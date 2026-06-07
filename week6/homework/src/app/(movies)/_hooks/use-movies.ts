"use client";

import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  createGuestSessionFromRoute,
  deleteMovieRatingFromRoute,
  getMoviesFromRoute,
  getRatedMoviesFromRoute,
  rateMovieFromRoute,
} from "@/features/movies/api/route-client";
import { movieQueryKeys } from "@/features/movies/api/query-keys";
import type {
  DiscoverMovieParams,
  MovieId,
  MovieListResponse,
  RatingRequest,
} from "@/features/movies/types";

import { useGuestSessionId } from "./use-guest-session";

const FIRST_PAGE = 1;
const MAX_TMDB_PAGE = 500;

export function useInfiniteMovies(
  params: Omit<DiscoverMovieParams, "page"> = {},
  initialPage?: MovieListResponse
) {
  return useInfiniteQuery({
    queryKey: movieQueryKeys.infiniteList(params),
    queryFn: ({ pageParam }) =>
      getMoviesFromRoute({
        ...params,
        page: Number(pageParam),
      }),
    initialPageParam: FIRST_PAGE,
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.page + 1;

      if (nextPage > lastPage.total_pages || nextPage > MAX_TMDB_PAGE) {
        return undefined;
      }

      return nextPage;
    },
    initialData: initialPage
      ? {
          pages: [initialPage],
          pageParams: [FIRST_PAGE],
        }
      : undefined,
    staleTime: 60_000,
  });
}

export function useMovieRating(movieId: MovieId) {
  const queryClient = useQueryClient();
  const { guestSessionId, isReady, setGuestSessionId, clearGuestSessionId } =
    useGuestSessionId();

  const ratedMoviesQuery = useQuery({
    queryKey: movieQueryKeys.ratedMovies(guestSessionId ?? "anonymous"),
    queryFn: () =>
      guestSessionId
        ? getRatedMoviesFromRoute(guestSessionId)
        : Promise.resolve({
            page: 1,
            results: [],
            total_pages: 0,
            total_results: 0,
          }),
    enabled: isReady,
  });

  const currentRating =
    ratedMoviesQuery.data?.results.find((movie) => movie.id === Number(movieId))
      ?.rating ?? null;

  const saveRatingMutation = useMutation({
    mutationFn: async (body: RatingRequest) => {
      const activeGuestSessionId =
        guestSessionId ??
        (await createGuestSessionFromRoute()).guest_session_id;

      if (!guestSessionId) {
        setGuestSessionId(activeGuestSessionId);
      }

      return rateMovieFromRoute(movieId, activeGuestSessionId, body);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: movieQueryKeys.all,
      });
    },
  });

  const deleteRatingMutation = useMutation({
    mutationFn: async () => {
      if (!guestSessionId) {
        throw new Error("삭제할 게스트 세션이 없습니다.");
      }

      return deleteMovieRatingFromRoute(movieId, guestSessionId);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: movieQueryKeys.all,
      });
    },
  });

  return {
    guestSessionId,
    currentRating,
    isRatingReady: isReady && !ratedMoviesQuery.isPending,
    isRatedMoviesError: ratedMoviesQuery.isError,
    saveRatingMutation,
    deleteRatingMutation,
    clearGuestSessionId,
  };
}

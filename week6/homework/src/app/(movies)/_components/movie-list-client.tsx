"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { useInfiniteMovies } from "../_hooks/use-movies";
import type {
  DiscoverMovieParams,
  MovieListResponse,
  MovieSummary,
} from "@/features/movies/types";
import { MovieCard } from "./movie-card";

type RatingFilter = "all" | "9" | "8" | "7" | "6";

type MovieListClientProps = {
  initialPage: MovieListResponse;
  initialRequestFailed: boolean;
  params: Omit<DiscoverMovieParams, "page">;
};

const RATING_FILTER_OPTIONS = [
  { label: "전체 별점", value: "all" },
  { label: "9점 이상", value: "9" },
  { label: "8점 이상", value: "8" },
  { label: "7점 이상", value: "7" },
  { label: "6점 이상", value: "6" },
] as const satisfies Array<{ label: string; value: RatingFilter }>;

function getMinimumRating(filter: RatingFilter) {
  return filter === "all" ? 0 : Number(filter);
}

function getUniqueMovies(movies: MovieSummary[]) {
  const seenMovieIds = new Set<number>();

  return movies.filter((movie) => {
    if (seenMovieIds.has(movie.id)) {
      return false;
    }

    seenMovieIds.add(movie.id);
    return true;
  });
}

export function MovieListClient({
  initialPage,
  initialRequestFailed,
  params,
}: MovieListClientProps) {
  const [ratingFilter, setRatingFilter] = useState<RatingFilter>("all");
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const { data, fetchNextPage, hasNextPage, isError, isFetchingNextPage } =
    useInfiniteMovies(params, initialPage);

  const movies = useMemo(
    () =>
      getUniqueMovies(
        data?.pages.flatMap((page) => page.results) ?? initialPage.results
      ),
    [data, initialPage.results]
  );
  const filteredMovies = useMemo(() => {
    const minimumRating = getMinimumRating(ratingFilter);

    return movies.filter((movie) => movie.vote_average >= minimumRating);
  }, [movies, ratingFilter]);

  useEffect(() => {
    const sentinel = sentinelRef.current;

    if (!sentinel || !hasNextPage) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting && !isFetchingNextPage) {
        void fetchNextPage();
      }
    });

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <>
      <div className="mt-8 rounded-lg bg-white p-4 shadow-sm">
        <label className="sr-only" htmlFor="rating-filter">
          별점 필터
        </label>
        <select
          id="rating-filter"
          value={ratingFilter}
          onChange={(event) =>
            setRatingFilter(event.target.value as RatingFilter)
          }
          className="h-11 min-w-40 rounded-md border border-zinc-200 bg-white px-3 text-sm font-medium text-zinc-800 transition outline-none focus:border-zinc-950"
        >
          {RATING_FILTER_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {initialRequestFailed || isError ? (
        <p className="mt-4 rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700">
          TMDB API 요청에 실패해 예시 데이터로 표시 중입니다. `.env`의 API_KEY를
          확인해주세요.
        </p>
      ) : null}

      <section className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>

      {filteredMovies.length === 0 ? (
        <p className="mt-10 rounded-lg bg-white p-6 text-center text-sm text-zinc-500">
          선택한 별점 조건에 맞는 영화가 없습니다.
        </p>
      ) : null}

      <div ref={sentinelRef} className="h-12" />

      <div className="pb-10 text-center text-sm text-zinc-500">
        {isFetchingNextPage
          ? "영화를 더 불러오는 중입니다."
          : hasNextPage
            ? "스크롤하면 다음 페이지를 불러옵니다."
            : "마지막 페이지입니다."}
      </div>
    </>
  );
}

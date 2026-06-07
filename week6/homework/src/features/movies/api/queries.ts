import { queryOptions } from "@tanstack/react-query";

import { getMovieDetail, getMovies, getRatedMovies } from "./movies";
import { movieQueryKeys } from "./query-keys";
import type { DiscoverMovieParams, MovieId, RatedMoviesParams } from "../types";

export const movieQueries = {
  list: (params: DiscoverMovieParams = {}) =>
    queryOptions({
      queryKey: movieQueryKeys.list(params),
      queryFn: () => getMovies(params),
    }),
  detail: (movieId: MovieId) =>
    queryOptions({
      queryKey: movieQueryKeys.detail(movieId),
      queryFn: () => getMovieDetail(movieId),
    }),
  ratedMovies: (guestSessionId: string, params: RatedMoviesParams = {}) =>
    queryOptions({
      queryKey: movieQueryKeys.ratedMovies(guestSessionId, params),
      queryFn: () => getRatedMovies(guestSessionId, params),
      enabled: Boolean(guestSessionId),
    }),
};

import type { DiscoverMovieParams, MovieId, RatedMoviesParams } from "../types";

export const movieQueryKeys = {
  all: ["movies"] as const,
  lists: () => [...movieQueryKeys.all, "list"] as const,
  list: (params: DiscoverMovieParams = {}) =>
    [...movieQueryKeys.lists(), params] as const,
  infiniteList: (params: Omit<DiscoverMovieParams, "page"> = {}) =>
    [...movieQueryKeys.lists(), "infinite", params] as const,
  details: () => [...movieQueryKeys.all, "detail"] as const,
  detail: (movieId: MovieId) => [...movieQueryKeys.details(), movieId] as const,
  guestSessions: () => [...movieQueryKeys.all, "guest-session"] as const,
  ratedMovies: (guestSessionId: string, params: RatedMoviesParams = {}) =>
    [...movieQueryKeys.all, "rated", guestSessionId, params] as const,
};

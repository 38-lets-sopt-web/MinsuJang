import { createHttpClient } from "@/lib/http";

import type {
  DeleteRatingResponse,
  DiscoverMovieParams,
  GuestSessionResponse,
  MovieDetail,
  MovieId,
  MovieListResponse,
  RatedMoviesParams,
  RatedMoviesResponse,
  RatingRequest,
  RatingResponse,
} from "../types";

const appHttp = createHttpClient();

export async function getMoviesFromRoute(params: DiscoverMovieParams = {}) {
  return appHttp
    .get("/api/movies", {
      searchParams: params,
    })
    .json<MovieListResponse>();
}

export async function getMovieDetailFromRoute(movieId: MovieId) {
  return appHttp.get(`/api/movies/${movieId}`).json<MovieDetail>();
}

export async function createGuestSessionFromRoute() {
  return appHttp.post("/api/auth/guest-session").json<GuestSessionResponse>();
}

export async function rateMovieFromRoute(
  movieId: MovieId,
  guestSessionId: string,
  body: RatingRequest
) {
  return appHttp
    .post(`/api/movies/${movieId}/rating`, {
      searchParams: {
        guest_session_id: guestSessionId,
      },
      json: body,
    })
    .json<RatingResponse>();
}

export async function deleteMovieRatingFromRoute(
  movieId: MovieId,
  guestSessionId: string
) {
  return appHttp
    .delete(`/api/movies/${movieId}/rating`, {
      searchParams: {
        guest_session_id: guestSessionId,
      },
    })
    .json<DeleteRatingResponse>();
}

export async function getRatedMoviesFromRoute(
  guestSessionId: string,
  params: RatedMoviesParams = {}
) {
  return appHttp
    .get(`/api/guest-session/${guestSessionId}/rated/movies`, {
      searchParams: params,
    })
    .json<RatedMoviesResponse>();
}

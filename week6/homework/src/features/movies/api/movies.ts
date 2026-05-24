import { tmdbHttp, withApiKey } from "./client";
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

export async function getMovies(params: DiscoverMovieParams = {}) {
  return tmdbHttp
    .get("discover/movie", {
      searchParams: withApiKey(params),
    })
    .json<MovieListResponse>();
}

export async function getMovieDetail(movieId: MovieId) {
  return tmdbHttp
    .get(`movie/${movieId}`, {
      searchParams: withApiKey(),
    })
    .json<MovieDetail>();
}

export async function createGuestSession() {
  return tmdbHttp
    .get("authentication/guest_session/new", {
      searchParams: withApiKey(),
    })
    .json<GuestSessionResponse>();
}

export async function rateMovie(
  movieId: MovieId,
  guestSessionId: string,
  body: RatingRequest
) {
  return tmdbHttp
    .post(`movie/${movieId}/rating`, {
      searchParams: withApiKey({
        guest_session_id: guestSessionId,
      }),
      json: body,
    })
    .json<RatingResponse>();
}

export async function getRatedMovies(
  guestSessionId: string,
  params: RatedMoviesParams = {}
) {
  return tmdbHttp
    .get(`guest_session/${guestSessionId}/rated/movies`, {
      searchParams: withApiKey(params),
    })
    .json<RatedMoviesResponse>();
}

export async function deleteMovieRating(
  movieId: MovieId,
  guestSessionId: string
) {
  return tmdbHttp
    .delete(`movie/${movieId}/rating`, {
      searchParams: withApiKey({
        guest_session_id: guestSessionId,
      }),
    })
    .json<DeleteRatingResponse>();
}

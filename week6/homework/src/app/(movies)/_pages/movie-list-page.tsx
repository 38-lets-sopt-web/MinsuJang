import { MovieListClient } from "../_components/movie-list-client";
import { getMovies } from "@/features/movies/api/movies";
import { MOVIE_LIST_PREVIEW } from "@/features/movies/data/preview-movies";
import type {
  DiscoverMovieParams,
  MovieListResponse,
} from "@/features/movies/types";

const MOVIE_LIST_PARAMS = {
  language: "ko-KR",
  include_adult: false,
  include_video: false,
  sort_by: "popularity.desc",
} satisfies Omit<DiscoverMovieParams, "page">;

function getFallbackMovieListPage(): MovieListResponse {
  return {
    page: 1,
    results: MOVIE_LIST_PREVIEW,
    total_pages: 1,
    total_results: MOVIE_LIST_PREVIEW.length,
  };
}

async function getInitialMovieListPage() {
  try {
    return {
      initialPage: await getMovies({
        ...MOVIE_LIST_PARAMS,
        page: 1,
      }),
      initialRequestFailed: false,
    };
  } catch {
    return {
      initialPage: getFallbackMovieListPage(),
      initialRequestFailed: true,
    };
  }
}

export async function MovieListPage() {
  const { initialPage, initialRequestFailed } = await getInitialMovieListPage();

  return (
    <main className="min-h-screen bg-zinc-100 text-zinc-950">
      <section className="mx-auto w-full max-w-7xl px-6 py-10 sm:px-10">
        <h1 className="text-4xl font-bold tracking-tight">Movie Explorer</h1>
        <MovieListClient
          initialPage={initialPage}
          initialRequestFailed={initialRequestFailed}
          params={MOVIE_LIST_PARAMS}
        />
      </section>
    </main>
  );
}

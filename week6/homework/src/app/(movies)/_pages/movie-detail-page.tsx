import Link from "next/link";

import { getMovieDetail } from "@/features/movies/api/movies";
import { getMovieDetailPreview } from "@/features/movies/data/preview-movies";
import type { MovieDetail, MovieId } from "@/features/movies/types";
import {
  formatCount,
  formatCurrency,
  formatRuntime,
  formatVoteAverage,
} from "@/features/movies/utils/format";
import { getTmdbImageUrl } from "@/features/movies/utils/image";
import { RatingPanel } from "../_components/rating-panel";

type MovieDetailPageProps = {
  movieId: MovieId;
};

type MovieDetailPageData = {
  movie: MovieDetail;
  initialRequestFailed: boolean;
};

function joinOrFallback(values: string[], fallback = "정보 없음") {
  return values.length > 0 ? values.join(", ") : fallback;
}

async function getMovieDetailPageData(
  movieId: MovieId
): Promise<MovieDetailPageData> {
  try {
    return {
      movie: await getMovieDetail(movieId),
      initialRequestFailed: false,
    };
  } catch {
    return {
      movie: getMovieDetailPreview(movieId),
      initialRequestFailed: true,
    };
  }
}

export async function MovieDetailPage({ movieId }: MovieDetailPageProps) {
  const { movie, initialRequestFailed } = await getMovieDetailPageData(movieId);

  const backdropUrl = getTmdbImageUrl(movie.backdrop_path, "original");
  const posterUrl = getTmdbImageUrl(movie.poster_path, "w500");
  const basicInformation = [
    { label: "원제", value: movie.original_title },
    { label: "원어", value: movie.original_language },
    {
      label: "제작 국가",
      value: joinOrFallback(
        movie.production_countries.map((country) => country.name)
      ),
    },
    {
      label: "사용 언어",
      value: joinOrFallback(
        movie.spoken_languages.map((language) => language.english_name)
      ),
    },
    { label: "예산", value: formatCurrency(movie.budget) },
    { label: "수익", value: formatCurrency(movie.revenue) },
  ];

  return (
    <main className="min-h-screen bg-zinc-100 text-zinc-950">
      <div className="mx-auto w-full max-w-5xl px-6 py-8 sm:px-10">
        <Link href="/" className="text-sm font-semibold text-zinc-700">
          {"<- 목록으로 돌아가기"}
        </Link>

        {initialRequestFailed ? (
          <p className="mt-4 rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700">
            TMDB API 요청에 실패해 예시 상세 데이터로 표시 중입니다. `.env`의
            API_KEY를 확인해주세요.
          </p>
        ) : null}

        <section className="mt-5 overflow-hidden rounded-lg bg-white shadow-sm">
          <div
            className="h-72 bg-zinc-300 bg-cover bg-center"
            style={
              backdropUrl
                ? {
                    backgroundImage: `url(${backdropUrl})`,
                  }
                : undefined
            }
          />

          <div className="grid gap-6 p-6 lg:grid-cols-[260px_1fr]">
            <div
              className="aspect-[2/3] max-w-64 rounded-lg bg-zinc-200 bg-cover bg-center"
              style={
                posterUrl
                  ? {
                      backgroundImage: `url(${posterUrl})`,
                    }
                  : undefined
              }
            />

            <div>
              <p className="text-sm font-medium text-zinc-500">
                {movie.release_date || "개봉일 미정"}
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight">
                {movie.title}
              </h1>

              <div className="mt-4 flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-700"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>

              <dl className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-zinc-200 p-4">
                  <dt className="text-sm text-zinc-500">평점</dt>
                  <dd className="mt-2 font-bold">
                    {formatVoteAverage(movie.vote_average)} / 10
                  </dd>
                </div>
                <div className="rounded-lg border border-zinc-200 p-4">
                  <dt className="text-sm text-zinc-500">투표 수</dt>
                  <dd className="mt-2 font-bold">
                    {formatCount(movie.vote_count)}
                  </dd>
                </div>
                <div className="rounded-lg border border-zinc-200 p-4">
                  <dt className="text-sm text-zinc-500">상영 시간</dt>
                  <dd className="mt-2 font-bold">
                    {formatRuntime(movie.runtime)}
                  </dd>
                </div>
                <div className="rounded-lg border border-zinc-200 p-4">
                  <dt className="text-sm text-zinc-500">상태</dt>
                  <dd className="mt-2 font-bold">{movie.status}</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="mt-5 rounded-lg bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">줄거리</h2>
          <p className="mt-4 text-sm leading-7 text-zinc-700">
            {movie.overview || "등록된 줄거리가 없습니다."}
          </p>
        </section>

        <section className="mt-5 grid gap-5 lg:grid-cols-[1fr_340px]">
          <article className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">기본 정보</h2>
            <dl className="mt-4 divide-y divide-zinc-100">
              {basicInformation.map((item) => (
                <div
                  key={item.label}
                  className="grid gap-3 py-3 text-sm sm:grid-cols-[120px_1fr]"
                >
                  <dt className="font-medium text-zinc-500">{item.label}</dt>
                  <dd className="text-zinc-900">{item.value}</dd>
                </div>
              ))}
            </dl>
          </article>

          <RatingPanel movieId={movieId} />
        </section>
      </div>
    </main>
  );
}

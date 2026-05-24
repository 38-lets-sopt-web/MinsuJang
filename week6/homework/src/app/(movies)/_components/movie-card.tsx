import Link from "next/link";

import type { MovieSummary } from "@/features/movies/types";
import {
  formatVoteAverage,
  getGenreNames,
  getReleaseYear,
} from "@/features/movies/utils/format";
import { getTmdbImageUrl } from "@/features/movies/utils/image";
import { cn } from "@/lib/cn";

type MovieCardProps = {
  movie: MovieSummary;
};

export function MovieCard({ movie }: MovieCardProps) {
  const posterUrl = getTmdbImageUrl(movie.poster_path, "w500");
  const genreNames = getGenreNames(movie.genre_ids).slice(0, 2);

  return (
    <Link
      href={`/movies/${movie.id}`}
      className={cn(
        "group grid overflow-hidden rounded-lg border border-zinc-200 bg-white",
        "shadow-sm transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg"
      )}
    >
      <div
        className="aspect-[2/3] bg-zinc-200 bg-cover bg-center"
        style={
          posterUrl
            ? {
                backgroundImage: `url(${posterUrl})`,
              }
            : undefined
        }
      />
      <div className="grid gap-3 p-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-medium text-zinc-500">
            {getReleaseYear(movie.release_date)}
          </p>
          <p className="rounded bg-zinc-950 px-2 py-1 text-xs font-semibold text-white">
            {formatVoteAverage(movie.vote_average)}
          </p>
        </div>
        <div>
          <h2 className="line-clamp-2 text-lg font-semibold text-zinc-950 group-hover:text-red-600">
            {movie.title}
          </h2>
          <p className="mt-2 text-xs font-medium text-zinc-500">
            {movie.release_date || "개봉일 미정"}
          </p>
          <p className="mt-2 line-clamp-3 text-sm leading-6 text-zinc-600">
            {movie.overview}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {genreNames.map((genreName) => (
            <span
              key={genreName}
              className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600"
            >
              {genreName}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

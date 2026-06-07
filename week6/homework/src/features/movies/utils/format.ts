import { MOVIE_GENRE_NAME_BY_ID } from "../constants/genres";

export function getReleaseYear(releaseDate: string) {
  return releaseDate ? releaseDate.slice(0, 4) : "TBA";
}

export function formatRuntime(runtime: number | null) {
  if (!runtime) {
    return "Runtime TBA";
  }

  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  return `${hours}h ${minutes}m`;
}

export function formatVoteAverage(voteAverage: number) {
  return voteAverage.toFixed(1);
}

export function formatCount(count: number) {
  return count.toLocaleString();
}

export function formatCurrency(value: number) {
  if (value <= 0) {
    return "정보 없음";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function getGenreNames(genreIds: number[]) {
  return genreIds
    .map((genreId) => MOVIE_GENRE_NAME_BY_ID.get(genreId))
    .filter((genreName): genreName is string => Boolean(genreName));
}

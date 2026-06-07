import { createHttpClient } from "@/lib/http";

const DEFAULT_TMDB_BASE_URL = "https://api.themoviedb.org/3";

export function getTmdbBaseUrl() {
  const baseUrl = process.env.API_BASE_URL ?? DEFAULT_TMDB_BASE_URL;

  return baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
}

export function getTmdbApiKey() {
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    throw new Error("API_KEY is not configured in .env.");
  }

  return apiKey;
}

export const tmdbHttp = createHttpClient({
  baseUrl: getTmdbBaseUrl(),
});

export function withApiKey(searchParams: object = {}) {
  return {
    api_key: getTmdbApiKey(),
    ...searchParams,
  } as Record<string, string | number | boolean | undefined>;
}

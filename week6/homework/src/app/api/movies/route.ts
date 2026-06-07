import { NextRequest, NextResponse } from "next/server";

import { getMovies } from "@/features/movies/api/movies";
import { createRouteErrorResponse } from "@/features/movies/api/route-error";
import type { DiscoverMovieParams } from "@/features/movies/types";

function getDiscoverParams(request: NextRequest): DiscoverMovieParams {
  const searchParams = request.nextUrl.searchParams;

  return {
    page: Number(searchParams.get("page") ?? 1),
    language: searchParams.get("language") ?? undefined,
    sort_by: searchParams.get("sort_by") ?? undefined,
    include_adult: searchParams.get("include_adult")
      ? searchParams.get("include_adult") === "true"
      : undefined,
    include_video: searchParams.get("include_video")
      ? searchParams.get("include_video") === "true"
      : undefined,
    with_genres: searchParams.get("with_genres") ?? undefined,
  };
}

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json(await getMovies(getDiscoverParams(request)));
  } catch (error) {
    return createRouteErrorResponse(error);
  }
}

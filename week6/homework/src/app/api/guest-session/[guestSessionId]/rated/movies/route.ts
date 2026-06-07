import { NextRequest, NextResponse } from "next/server";

import { getRatedMovies } from "@/features/movies/api/movies";
import { createRouteErrorResponse } from "@/features/movies/api/route-error";
import type { RatedMoviesParams } from "@/features/movies/types";

type RatedMoviesRouteContext = {
  params: Promise<{
    guestSessionId: string;
  }>;
};

function getRatedMoviesParams(request: NextRequest): RatedMoviesParams {
  const searchParams = request.nextUrl.searchParams;

  return {
    page: Number(searchParams.get("page") ?? 1),
    language: searchParams.get("language") ?? undefined,
    sort_by: searchParams.get("sort_by") ?? undefined,
  };
}

export async function GET(
  request: NextRequest,
  context: RatedMoviesRouteContext
) {
  try {
    const { guestSessionId } = await context.params;

    return NextResponse.json(
      await getRatedMovies(guestSessionId, getRatedMoviesParams(request))
    );
  } catch (error) {
    return createRouteErrorResponse(error);
  }
}

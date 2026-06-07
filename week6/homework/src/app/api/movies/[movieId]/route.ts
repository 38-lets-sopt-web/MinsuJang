import { NextResponse } from "next/server";

import { getMovieDetail } from "@/features/movies/api/movies";
import { createRouteErrorResponse } from "@/features/movies/api/route-error";

type MovieRouteContext = {
  params: Promise<{
    movieId: string;
  }>;
};

export async function GET(_request: Request, context: MovieRouteContext) {
  try {
    const { movieId } = await context.params;

    return NextResponse.json(await getMovieDetail(movieId));
  } catch (error) {
    return createRouteErrorResponse(error);
  }
}

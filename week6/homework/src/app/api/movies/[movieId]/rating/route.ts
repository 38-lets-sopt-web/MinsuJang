import { NextRequest, NextResponse } from "next/server";

import { deleteMovieRating, rateMovie } from "@/features/movies/api/movies";
import { createRouteErrorResponse } from "@/features/movies/api/route-error";
import type { RatingRequest } from "@/features/movies/types";

type RatingRouteContext = {
  params: Promise<{
    movieId: string;
  }>;
};

function getGuestSessionId(request: NextRequest) {
  return request.nextUrl.searchParams.get("guest_session_id");
}

function createMissingGuestSessionResponse() {
  return NextResponse.json(
    {
      success: false,
      status_code: 3,
      status_message: "guest_session_id is required.",
    },
    { status: 400 }
  );
}

export async function POST(request: NextRequest, context: RatingRouteContext) {
  try {
    const guestSessionId = getGuestSessionId(request);

    if (!guestSessionId) {
      return createMissingGuestSessionResponse();
    }

    const { movieId } = await context.params;
    const body = (await request.json()) as RatingRequest;

    return NextResponse.json(await rateMovie(movieId, guestSessionId, body));
  } catch (error) {
    return createRouteErrorResponse(error);
  }
}

export async function DELETE(
  request: NextRequest,
  context: RatingRouteContext
) {
  try {
    const guestSessionId = getGuestSessionId(request);

    if (!guestSessionId) {
      return createMissingGuestSessionResponse();
    }

    const { movieId } = await context.params;

    return NextResponse.json(await deleteMovieRating(movieId, guestSessionId));
  } catch (error) {
    return createRouteErrorResponse(error);
  }
}

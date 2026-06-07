import { NextResponse } from "next/server";

import { createGuestSession } from "@/features/movies/api/movies";
import { createRouteErrorResponse } from "@/features/movies/api/route-error";

export async function POST() {
  try {
    return NextResponse.json(await createGuestSession());
  } catch (error) {
    return createRouteErrorResponse(error);
  }
}

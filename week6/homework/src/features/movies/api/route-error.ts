import { NextResponse } from "next/server";
import { HTTPError } from "ky";

import type { TmdbErrorResponse } from "../types";

const FALLBACK_ERROR = {
  success: false,
  status_code: 500,
  status_message: "Unexpected server error.",
} satisfies TmdbErrorResponse;

async function parseHttpError(error: HTTPError) {
  try {
    return (await error.response.json()) as TmdbErrorResponse;
  } catch {
    return {
      ...FALLBACK_ERROR,
      status_code: error.response.status,
      status_message: error.message,
    };
  }
}

export async function createRouteErrorResponse(error: unknown) {
  if (error instanceof HTTPError) {
    return NextResponse.json(await parseHttpError(error), {
      status: error.response.status,
    });
  }

  if (error instanceof Error) {
    return NextResponse.json(
      {
        ...FALLBACK_ERROR,
        status_message: error.message,
      },
      { status: 500 }
    );
  }

  return NextResponse.json(FALLBACK_ERROR, { status: 500 });
}

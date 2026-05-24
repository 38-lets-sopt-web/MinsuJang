import ky, { type Options } from "ky";

export function createHttpClient(options: Options = {}) {
  return ky.create({
    timeout: 10_000,
    headers: {
      Accept: "application/json",
    },
    ...options,
  });
}

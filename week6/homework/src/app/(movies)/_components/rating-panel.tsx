"use client";

import { useState } from "react";

import type { MovieId } from "@/features/movies/types";

import { useMovieRating } from "../_hooks/use-movies";

const MIN_RATING = 0.5;
const MAX_RATING = 10;

type RatingPanelProps = {
  movieId: MovieId;
};

function isValidRating(value: number) {
  return value >= MIN_RATING && value <= MAX_RATING;
}

export function RatingPanel({ movieId }: RatingPanelProps) {
  const [ratingValue, setRatingValue] = useState("");
  const [isRatingEdited, setIsRatingEdited] = useState(false);
  const [message, setMessage] = useState("");
  const {
    currentRating,
    isRatingReady,
    isRatedMoviesError,
    saveRatingMutation,
    deleteRatingMutation,
  } = useMovieRating(movieId);

  const isPending =
    saveRatingMutation.isPending || deleteRatingMutation.isPending;
  const displayedRatingValue = isRatingEdited
    ? ratingValue
    : currentRating
      ? String(currentRating)
      : "";

  const handleSave = async () => {
    const nextRating = Number(displayedRatingValue);

    if (!isValidRating(nextRating)) {
      setMessage("0.5부터 10.0 사이의 숫자만 저장할 수 있습니다.");
      return;
    }

    try {
      await saveRatingMutation.mutateAsync({ value: nextRating });
      setIsRatingEdited(false);
      setMessage("별점이 저장되었습니다.");
    } catch {
      setMessage("별점 저장에 실패했습니다. API 키와 세션을 확인해주세요.");
    }
  };

  const handleDelete = async () => {
    try {
      await deleteRatingMutation.mutateAsync();
      setRatingValue("");
      setIsRatingEdited(true);
      setMessage("별점이 삭제되었습니다.");
    } catch {
      setMessage("삭제할 별점이 없거나 요청에 실패했습니다.");
    }
  };

  return (
    <section className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-zinc-950">별점 남기기</h2>
          <p className="mt-1 text-sm text-zinc-500">0.5 ~ 10.0</p>
        </div>
        <span className="rounded bg-red-50 px-2 py-1 text-xs font-semibold text-red-600">
          {currentRating ? currentRating.toFixed(1) : "비어 있음"}
        </span>
      </div>

      <label className="mt-5 grid gap-2 text-sm font-medium text-zinc-700">
        내 별점
        <input
          value={displayedRatingValue}
          onChange={(event) => {
            setIsRatingEdited(true);
            setRatingValue(event.target.value);
            setMessage("");
          }}
          inputMode="decimal"
          placeholder="예: 8.5"
          className="h-12 rounded-md border border-zinc-200 px-3 text-base transition outline-none focus:border-zinc-950"
          disabled={!isRatingReady || isPending}
        />
      </label>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={handleSave}
          disabled={!isRatingReady || isPending}
          className="rounded-md bg-zinc-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40"
        >
          별점 저장
        </button>
        <button
          type="button"
          onClick={handleDelete}
          disabled={!isRatingReady || isPending}
          className="rounded-md border border-zinc-200 px-4 py-3 text-sm font-semibold text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-50 disabled:cursor-not-allowed disabled:text-zinc-400"
        >
          별점 삭제하기
        </button>
      </div>

      {isRatedMoviesError ? (
        <p className="mt-3 text-sm text-amber-600">
          이전 별점 조회에 실패했습니다. 새 별점 저장은 가능합니다.
        </p>
      ) : null}

      {message ? <p className="mt-3 text-sm text-zinc-700">{message}</p> : null}
    </section>
  );
}

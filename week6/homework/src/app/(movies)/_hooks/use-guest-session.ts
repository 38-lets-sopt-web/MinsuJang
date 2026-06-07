"use client";

import { useCallback, useState } from "react";

const GUEST_SESSION_STORAGE_KEY = "tmdb_guest_session_id";

export function useGuestSessionId() {
  const [guestSessionId, setGuestSessionIdState] = useState<string | null>(
    () =>
      typeof window === "undefined"
        ? null
        : window.localStorage.getItem(GUEST_SESSION_STORAGE_KEY)
  );

  const setGuestSessionId = useCallback((nextGuestSessionId: string) => {
    window.localStorage.setItem(GUEST_SESSION_STORAGE_KEY, nextGuestSessionId);
    setGuestSessionIdState(nextGuestSessionId);
  }, []);

  const clearGuestSessionId = useCallback(() => {
    window.localStorage.removeItem(GUEST_SESSION_STORAGE_KEY);
    setGuestSessionIdState(null);
  }, []);

  return {
    guestSessionId,
    isReady: true,
    setGuestSessionId,
    clearGuestSessionId,
  };
}

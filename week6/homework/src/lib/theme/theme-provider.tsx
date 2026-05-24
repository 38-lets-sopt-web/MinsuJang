"use client";

import type { ReactNode } from "react";

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <div data-theme="light" className="contents">
      {children}
    </div>
  );
}

import { DEFAULT_FILTERS } from "./constants.js";

export const state = {
  filters: { ...DEFAULT_FILTERS },
  sortOrder: "desc",
  selectedIds: new Set(),
};

import { DEFAULT_FILTERS } from "../../core/constants.js";
import { state } from "../../core/state.js";
import { elements } from "../../dom/elements/index.js";

const readFilterFormValues = () => {
  return {
    keyword: elements.filter.keyword.value,
    type: elements.filter.type.value,
    category: elements.filter.category.value,
    paymentMethod: elements.filter.paymentMethod.value,
  };
};

export const updateFiltersFromForm = () => {
  state.filters = readFilterFormValues();
};

export const resetFilters = () => {
  state.filters = { ...DEFAULT_FILTERS };
  elements.filter.form.reset();
};

export const setSortOrder = (sortOrder) => {
  state.sortOrder = sortOrder;
};

import { state } from "../../core/state.js";
import { getVisibleSelectedIds } from "../../core/selectors.js";

export const toggleExpenseSelection = (expenseId, checked) => {
  const normalizedExpenseId = Number(expenseId);

  if (checked) {
    state.selectedIds.add(normalizedExpenseId);
    return;
  }

  state.selectedIds.delete(normalizedExpenseId);
};

export const toggleVisibleSelection = (visibleExpenses, checked) => {
  visibleExpenses.forEach((expense) => {
    toggleExpenseSelection(expense.id, checked);
  });
};

export const syncVisibleSelection = (visibleExpenses) => {
  state.selectedIds = getVisibleSelectedIds(state.selectedIds, visibleExpenses);
};

export const clearSelectedExpenses = () => {
  state.selectedIds.clear();
};

export const getSelectedExpenseIds = () => {
  return [...state.selectedIds];
};

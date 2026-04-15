import { deleteExpense, getExpenses } from "../../api/index.js";
import { getVisibleExpenses } from "../../core/selectors.js";
import { state } from "../../core/state.js";
import { render } from "../../ui/views/render.js";
import { resetFilters, setSortOrder, updateFiltersFromForm } from "./filters.js";
import {
  clearSelectedExpenses,
  getSelectedExpenseIds,
  toggleVisibleSelection,
} from "./selection.js";

/**
 * 현재 필터와 정렬 상태를 기준으로 화면에 보이는 지출 목록만 계산한다.
 *
 * @returns {Array<object>} 현재 화면에 렌더링되어야 하는 지출 목록
 */
const getCurrentVisibleExpenses = () => {
  return getVisibleExpenses(getExpenses(), state.filters, state.sortOrder);
};

/**
 * 필터 폼 값을 상태에 반영한 뒤 목록을 다시 렌더링한다.
 *
 * @returns {void}
 */
export const applyFilters = () => {
  updateFiltersFromForm();
  render();
};

/**
 * 필터 상태를 초기값으로 되돌린 뒤 목록을 다시 렌더링한다.
 *
 * @returns {void}
 */
export const resetExpenseFilters = () => {
  resetFilters();
  render();
};

/**
 * 날짜 정렬 순서를 변경한 뒤 목록을 다시 렌더링한다.
 *
 * @param {"asc"|"desc"} sortOrder 날짜 정렬 순서
 * @returns {void}
 */
export const changeSortOrder = (sortOrder) => {
  setSortOrder(sortOrder);
  render();
};

/**
 * 현재 보이는 항목만 전체 선택 또는 전체 해제한다.
 *
 * @param {boolean} checked 체크 여부
 * @returns {void}
 */
export const toggleAllVisibleExpenses = (checked) => {
  const visibleExpenses = getCurrentVisibleExpenses();

  toggleVisibleSelection(visibleExpenses, checked);
  render();
};

/**
 * 선택된 지출 항목을 모두 삭제한 뒤 목록을 다시 렌더링한다.
 *
 * @returns {void}
 */
export const deleteSelectedExpenses = () => {
  const selectedExpenseIds = getSelectedExpenseIds();

  if (selectedExpenseIds.length === 0) {
    window.alert("삭제할 항목을 선택해 주세요.");
    return;
  }

  selectedExpenseIds.forEach((id) => {
    deleteExpense(id);
  });

  clearSelectedExpenses();
  render();
};

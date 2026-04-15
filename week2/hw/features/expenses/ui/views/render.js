import { getExpenses } from "../../api/index.js";
import { syncVisibleSelection, toggleExpenseSelection } from "../../app/actions/selection.js";
import { getVisibleExpenses } from "../../core/selectors.js";
import { state } from "../../core/state.js";
import { renderDetailModal } from "./detail.js";
import { renderSummary, syncSelectAllCheckbox } from "./summary.js";
import { renderTable } from "./table.js";

/**
 * 현재 상태를 기준으로 지출 목록 화면 전체를 다시 렌더링한다.
 *
 * 테이블, 요약, 전체 선택 상태를 한 번에 동기화한다.
 *
 * @returns {void}
 */
export const render = () => {
  const expenses = getExpenses();
  const visibleExpenses = getVisibleExpenses(expenses, state.filters, state.sortOrder);

  syncVisibleSelection(visibleExpenses);

  renderTable(visibleExpenses, {
    selectedIds: state.selectedIds,
    onToggleExpenseSelection(expenseId, checked) {
      toggleExpenseSelection(expenseId, checked);
      syncSelectAllCheckbox(visibleExpenses, state.selectedIds);
    },
    onOpenExpenseDetail(expense) {
      renderDetailModal(expense);
    },
  });
  renderSummary(visibleExpenses);
  syncSelectAllCheckbox(visibleExpenses, state.selectedIds);
};

import { getExpenses } from "../../api/index.js";
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
 * @param {object} [handlers] 렌더 과정에서 실행할 app 계층 콜백
 * @param {(visibleExpenses: Array<object>) => void} [handlers.onBeforeRender] 렌더 전 상태 동기화 콜백
 * @param {(expenseId: number|string, checked: boolean) => void} [handlers.onToggleExpenseSelection] 행 선택 변경 콜백
 * @returns {void}
 */
export const render = ({ onBeforeRender = () => {}, onToggleExpenseSelection = () => {} } = {}) => {
  const expenses = getExpenses();
  const visibleExpenses = getVisibleExpenses(expenses, state.filters, state.sortOrder);

  onBeforeRender(visibleExpenses);

  renderTable(visibleExpenses, {
    selectedIds: state.selectedIds,
    onToggleExpenseSelection(expenseId, checked) {
      onToggleExpenseSelection(expenseId, checked);
      syncSelectAllCheckbox(visibleExpenses, state.selectedIds);
    },
    onOpenExpenseDetail(expense) {
      renderDetailModal(expense);
    },
  });
  renderSummary(visibleExpenses);
  syncSelectAllCheckbox(visibleExpenses, state.selectedIds);
};

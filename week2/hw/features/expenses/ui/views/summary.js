import { formatNetCurrency } from "../../core/formatters.js";
import { elements } from "../../dom/elements/index.js";

const updateHeaderSummary = (expenses) => {
  const valueElement = elements.header.summary.querySelector(".page-header__summary-value");
  valueElement.textContent = `${expenses.length}건`;
};

export const renderSummary = (expenses) => {
  const totalAmount = expenses.reduce((sum, expense) => sum + Number(expense.amount), 0);
  const netAmount = expenses.reduce((sum, expense) => {
    return expense.type === "수입" ? sum + Number(expense.amount) : sum - Number(expense.amount);
  }, 0);

  elements.table.countText.textContent = `총 ${expenses.length}건`;
  elements.table.totalText.textContent = `합계 ${totalAmount.toLocaleString("ko-KR")}원`;
  elements.table.netText.textContent = `순합계 ${formatNetCurrency(netAmount)}`;
  updateHeaderSummary(expenses);
};

export const syncSelectAllCheckbox = (expenses, selectedIds) => {
  if (expenses.length === 0) {
    elements.table.selectAllCheckbox.checked = false;
    elements.table.selectAllCheckbox.indeterminate = false;
    return;
  }

  const selectedCount = expenses.filter((expense) => selectedIds.has(Number(expense.id))).length;

  elements.table.selectAllCheckbox.checked = selectedCount === expenses.length;
  elements.table.selectAllCheckbox.indeterminate =
    selectedCount > 0 && selectedCount < expenses.length;
};

import { formatCurrency } from "../../core/formatters.js";
import { elements } from "../../dom/elements/index.js";

const createEmptyRow = () => {
  const row = document.createElement("tr");
  const cell = document.createElement("td");

  row.className = "expense-table__empty-row";
  cell.colSpan = 7;
  cell.textContent = "조건에 맞는 내역이 없습니다.";
  row.append(cell);

  return row;
};

const createExpenseRow = (expense, selectedIds, onToggleExpenseSelection, onOpenExpenseDetail) => {
  const row = document.createElement("tr");
  const checkboxCell = document.createElement("td");
  const titleCell = document.createElement("td");
  const amountCell = document.createElement("td");
  const dateCell = document.createElement("td");
  const typeCell = document.createElement("td");
  const categoryCell = document.createElement("td");
  const paymentMethodCell = document.createElement("td");

  row.dataset.expenseId = expense.id;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = selectedIds.has(Number(expense.id));
  checkbox.setAttribute("aria-label", `${expense.title} 선택`);
  checkbox.addEventListener("click", (event) => {
    event.stopPropagation();
  });
  checkbox.addEventListener("change", () => {
    onToggleExpenseSelection(expense.id, checkbox.checked);
  });

  const titleButton = document.createElement("button");
  titleButton.type = "button";
  titleButton.className = "expense-table__title-button";
  titleButton.textContent = expense.title;
  titleButton.addEventListener("click", () => {
    onOpenExpenseDetail(expense);
  });

  const amountBadge = document.createElement("span");
  amountBadge.className =
    expense.type === "수입"
      ? "amount-badge amount-badge--income"
      : "amount-badge amount-badge--expense";
  amountBadge.textContent = formatCurrency(expense.amount, expense.type);

  const typeBadge = document.createElement("span");
  typeBadge.className =
    expense.type === "수입"
      ? "type-badge type-badge--income"
      : "type-badge type-badge--expense";
  typeBadge.textContent = expense.type;

  checkboxCell.append(checkbox);
  titleCell.append(titleButton);
  amountCell.append(amountBadge);
  dateCell.textContent = expense.date;
  typeCell.append(typeBadge);
  categoryCell.textContent = expense.category;
  paymentMethodCell.textContent = expense.paymentMethod;

  row.append(
    checkboxCell,
    titleCell,
    amountCell,
    dateCell,
    typeCell,
    categoryCell,
    paymentMethodCell
  );

  return row;
};

export const renderTable = (
  expenses,
  { selectedIds, onToggleExpenseSelection, onOpenExpenseDetail }
) => {
  elements.table.body.replaceChildren();

  if (expenses.length === 0) {
    elements.table.body.append(createEmptyRow());
    return;
  }

  expenses.forEach((expense) => {
    elements.table.body.append(
      createExpenseRow(expense, selectedIds, onToggleExpenseSelection, onOpenExpenseDetail)
    );
  });
};

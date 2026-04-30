import { formatCurrency } from "../../core/formatters.js";
import { elements } from "../../dom/elements/index.js";
import { openModal } from "../controls/modal.js";

export const renderDetailModal = (expense) => {
  elements.modal.detailList.replaceChildren();

  [
    ["제목", expense.title],
    ["금액", formatCurrency(expense.amount, expense.type)],
    ["날짜", expense.date],
    ["유형", expense.type],
    ["카테고리", expense.category],
    ["결제수단", expense.paymentMethod],
  ].forEach(([label, value]) => {
    const wrapper = document.createElement("div");
    wrapper.className = "detail-list__item";

    const term = document.createElement("dt");
    term.textContent = label;

    const description = document.createElement("dd");
    description.textContent = value;

    wrapper.append(term, description);
    elements.modal.detailList.append(wrapper);
  });

  openModal(elements.modal.detail);
};

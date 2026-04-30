import {
  EXPENSE_CATEGORY_OPTIONS,
  EXPENSE_PAYMENT_OPTIONS,
  EXPENSE_TYPE_OPTIONS,
} from "../../core/constants.js";
import { state } from "../../core/state.js";
import { elements } from "../../dom/elements/index.js";
import { closeModal, openModal } from "../../ui/controls/modal.js";
import { fillSelect } from "../../ui/controls/select.js";
import {
  applyFilters,
  changeSortOrder,
  deleteSelectedExpenses,
  resetExpenseFilters,
  toggleAllVisibleExpenses,
} from "../actions/index.js";
import { submitAddExpenseForm } from "../forms/expense-form.js";

/**
 * 모달 열기/닫기와 제출 이벤트를 연결한다.
 *
 * @returns {void}
 */
const bindModalEvents = () => {
  elements.table.openAddModalButton.addEventListener("click", () => openModal(elements.modal.add));

  elements.modal.addForm.addEventListener("submit", (event) => {
    event.preventDefault();
    submitAddExpenseForm();
  });

  document.querySelectorAll("[data-close-modal]").forEach((button) => {
    button.addEventListener("click", (event) => {
      const target = event.currentTarget.dataset.closeModal;
      closeModal(target === "add" ? elements.modal.add : elements.modal.detail);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
      return;
    }

    closeModal(elements.modal.add);
    closeModal(elements.modal.detail);
  });
};

/**
 * 필터 폼과 정렬 이벤트를 연결한다.
 *
 * @returns {void}
 */
const bindFilterEvents = () => {
  elements.filter.form.addEventListener("submit", (event) => {
    event.preventDefault();
    applyFilters();
  });

  elements.filter.resetButton.addEventListener("click", () => {
    resetExpenseFilters();
  });

  elements.table.sortOrder.addEventListener("change", (event) => {
    changeSortOrder(event.target.value);
  });
};

/**
 * 전체 선택과 선택 삭제 이벤트를 연결한다.
 *
 * @returns {void}
 */
const bindSelectionEvents = () => {
  elements.table.selectAllCheckbox.addEventListener("change", (event) => {
    toggleAllVisibleExpenses(event.target.checked);
  });

  elements.table.deleteSelectedButton.addEventListener("click", deleteSelectedExpenses);
};

/**
 * 헤더 보조 액션 이벤트를 연결한다.
 *
 * @returns {void}
 */
const bindHeaderEvents = () => {
  elements.header.reloadButton.addEventListener("click", () => {
    window.location.reload();
  });
};

/**
 * 지출 기능에 필요한 모든 DOM 이벤트를 초기화한다.
 *
 * @returns {void}
 */
export const bindEvents = () => {
  bindFilterEvents();
  bindSelectionEvents();
  bindModalEvents();
  bindHeaderEvents();
};

/**
 * 필터와 폼에 필요한 select 옵션과 기본 선택값을 초기화한다.
 *
 * @returns {void}
 */
export const initSelects = () => {
  fillSelect(elements.filter.type, EXPENSE_TYPE_OPTIONS, true);
  fillSelect(elements.filter.category, EXPENSE_CATEGORY_OPTIONS, true);
  fillSelect(elements.filter.paymentMethod, EXPENSE_PAYMENT_OPTIONS, true);
  fillSelect(elements.modal.expenseType, EXPENSE_TYPE_OPTIONS);
  fillSelect(elements.modal.expenseCategory, EXPENSE_CATEGORY_OPTIONS);
  fillSelect(elements.modal.expensePaymentMethod, EXPENSE_PAYMENT_OPTIONS);

  elements.modal.expenseType.selectedIndex = 0;
  elements.modal.expenseCategory.selectedIndex = 0;
  elements.modal.expensePaymentMethod.selectedIndex = 0;
  elements.table.sortOrder.value = state.sortOrder;
};

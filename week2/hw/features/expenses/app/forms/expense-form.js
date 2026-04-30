import { addExpense } from "../../api/index.js";
import { elements } from "../../dom/elements/index.js";
import { closeModal } from "../../ui/controls/modal.js";
import { renderExpenses } from "../actions/index.js";

/**
 * 지출 추가 폼에서 현재 입력값을 읽어 도메인 초안 객체로 변환한다.
 *
 * @param {HTMLFormElement} formElement 지출 추가 폼 요소
 * @returns {{rawAmount: string, payload: object}} 파싱된 폼 데이터
 */
export const readExpenseForm = (formElement) => {
  const formData = new FormData(formElement);
  const rawAmount = String(formData.get("amount") || "").trim();

  return {
    rawAmount,
    payload: {
      title: String(formData.get("title") || "").trim(),
      amount: Number(rawAmount),
      date: String(formData.get("date") || "").trim(),
      type: String(formData.get("type") || "").trim(),
      category: String(formData.get("category") || "").trim(),
      paymentMethod: String(formData.get("paymentMethod") || "").trim(),
    },
  };
};

/**
 * 지출 초안의 필수 입력값을 검증한다.
 *
 * @param {{rawAmount: string, payload: object}} draft 파싱된 폼 데이터
 * @returns {{ok: true, payload: object} | {ok: false, message: string}}
 */
export const validateExpenseDraft = ({ rawAmount, payload }) => {
  const hasEmptyField =
    rawAmount === "" ||
    Object.values(payload).some((value) => value === "" || Number.isNaN(value));

  if (hasEmptyField) {
    return {
      ok: false,
      message: "모든 값을 입력해 주세요.",
    };
  }

  return {
    ok: true,
    payload,
  };
};

/**
 * 지출 추가 폼과 select 기본 선택값을 초기 상태로 되돌린다.
 *
 * @returns {void}
 */
export const resetAddExpenseForm = () => {
  elements.modal.addForm.reset();
  elements.modal.expenseType.selectedIndex = 0;
  elements.modal.expenseCategory.selectedIndex = 0;
  elements.modal.expensePaymentMethod.selectedIndex = 0;
};

/**
 * 지출 추가 폼 제출을 처리하고 성공 시 목록을 다시 렌더링한다.
 *
 * @returns {{ok: true} | {ok: false, message: string}}
 */
export const submitAddExpenseForm = () => {
  const expenseDraft = readExpenseForm(elements.modal.addForm);
  const validation = validateExpenseDraft(expenseDraft);

  if (!validation.ok) {
    window.alert(validation.message);
    return validation;
  }

  addExpense(validation.payload);
  resetAddExpenseForm();
  closeModal(elements.modal.add);
  renderExpenses();

  return {
    ok: true,
  };
};

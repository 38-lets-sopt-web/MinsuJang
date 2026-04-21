let previousFocusedElement = null;

/**
 * 모달 내부에서 키보드 포커스를 받을 수 있는 첫 번째 요소를 찾는다.
 *
 * @param {HTMLElement} modalElement 대상 모달 요소
 * @returns {HTMLElement | null}
 */
const getFirstFocusableElement = (modalElement) => {
  return modalElement.querySelector(
    "button, input, select, textarea, a[href], [tabindex]:not([tabindex='-1'])"
  );
};

/**
 * 모달을 열고 포커스를 모달 내부로 이동한다.
 *
 * 모달을 닫을 때 기존 위치로 포커스를 되돌리기 위해
 * 열기 직전에 포커스되어 있던 요소를 저장한다.
 *
 * @param {HTMLElement} modalElement 열 모달 요소
 * @returns {void}
 */
export const openModal = (modalElement) => {
  previousFocusedElement = document.activeElement;

  modalElement.classList.remove("hidden");
  modalElement.setAttribute("aria-hidden", "false");

  getFirstFocusableElement(modalElement)?.focus();
};

/**
 * 모달을 닫고 모달을 열기 전에 포커스되어 있던 요소로 되돌린다.
 *
 * @param {HTMLElement} modalElement 닫을 모달 요소
 * @returns {void}
 */
export const closeModal = (modalElement) => {
  modalElement.classList.add("hidden");
  modalElement.setAttribute("aria-hidden", "true");

  previousFocusedElement?.focus();
  previousFocusedElement = null;
};

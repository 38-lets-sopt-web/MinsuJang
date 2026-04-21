let previousFocusedElement = null;

const getFirstFocusableElement = (modalElement) => {
  return modalElement.querySelector(
    "button, input, select, textarea, a[href], [tabindex]:not([tabindex='-1'])"
  );
};

export const openModal = (modalElement) => {
  previousFocusedElement = document.activeElement;

  modalElement.classList.remove("hidden");
  modalElement.setAttribute("aria-hidden", "false");

  getFirstFocusableElement(modalElement)?.focus();
};

export const closeModal = (modalElement) => {
  modalElement.classList.add("hidden");
  modalElement.setAttribute("aria-hidden", "true");

  previousFocusedElement?.focus();
  previousFocusedElement = null;
};

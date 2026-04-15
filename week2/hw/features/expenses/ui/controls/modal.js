export const openModal = (modalElement) => {
  modalElement.classList.remove("hidden");
  modalElement.setAttribute("aria-hidden", "false");
};

export const closeModal = (modalElement) => {
  modalElement.classList.add("hidden");
  modalElement.setAttribute("aria-hidden", "true");
};

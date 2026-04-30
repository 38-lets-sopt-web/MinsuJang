export const createOption = (value, includeAllOption = false) => {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = value;

  if (includeAllOption && value === "") {
    option.textContent = "전체";
  }

  return option;
};

export const fillSelect = (selectElement, values, includeAllOption = false) => {
  selectElement.replaceChildren();

  if (includeAllOption) {
    selectElement.append(createOption("", true));
  }

  values.forEach((value) => {
    selectElement.append(createOption(value));
  });
};

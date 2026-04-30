import { bindEvents, initSelects } from "./app/events/index.js";
import { renderExpenses } from "./app/actions/index.js";

const init = () => {
  initSelects();
  bindEvents();
  renderExpenses();
};

init();

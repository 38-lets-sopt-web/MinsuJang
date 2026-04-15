import { bindEvents, initSelects } from "./app/events/index.js";
import { render } from "./ui/views/render.js";

const init = () => {
  initSelects();
  bindEvents();
  render();
};

init();

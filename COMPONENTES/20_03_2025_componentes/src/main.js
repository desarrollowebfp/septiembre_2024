import "./style.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const init = () => {
  document.body.innerHTML = `
  ${Header()}
  ${Main()}
  `;
};

document.addEventListener("DOMContentLoaded", () => {
  init();
});

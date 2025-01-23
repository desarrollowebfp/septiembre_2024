import "./style.css";
import words from "./data/words";

const container = document.querySelector("#app");

for (const word of words) {
  const p = document.createElement("p");
  p.textContent = word;
  container.appendChild(p);
}

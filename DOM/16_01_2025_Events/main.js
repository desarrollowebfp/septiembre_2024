/* const title = document.querySelector("h1");
title.remove(); */

//EVENTOS
const btnTest = document.querySelector("#btnTheme");

btnTest.addEventListener("click", (ev) => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    btnTest.textContent = "🌞";
  } else {
    btnTest.textContent = "🌚";
  }
});

//

const result = document.querySelector("#result");

/* window.addEventListener("scroll", (ev) => {
  result.textContent = ev.target.defaultView.pageYOffset;
}); */

window.addEventListener("resize", (ev) => {
  result.textContent = window.innerHeight + "x" + window.innerWidth;
});

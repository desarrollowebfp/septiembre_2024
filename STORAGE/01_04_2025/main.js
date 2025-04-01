/* localStorage -> Se mantiene memorizado durante las sesiones, reinicios y apagados.
sessionStorage -> Se mantiene durante una sesión de navegación */

/* localStorage.setItem("username", "Rodrigo");
console.log(localStorage.getItem("username"));
localStorage.removeItem("username");
console.log(localStorage.getItem("username"));
localStorage.setItem("username", "Rodrigo");
localStorage.clear(); */

document.querySelector("#theme_btn").addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    document.querySelector("#theme_btn").textContent = "Light";
    localStorage.setItem("theme", "dark");
  } else {
    document.querySelector("#theme_btn").textContent = "Dark";
    localStorage.setItem("theme", "light");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    document.querySelector("#theme_btn").textContent = "Light";
  } else {
    document.body.classList.remove("dark");
    document.querySelector("#theme_btn").textContent = "Dark";
  }
});

//Importamos las páginas
import { Home, About, NotFound } from "./pages";
//Creamos un mapa con un objeto de las rutas
const routes = {
  "/": Home,
  "/about": About,
};

//Creamos una función que navegue a una URL en el navegador, cambie la URL y no recargue mientras muestra otro componente, en este caso páginas
const navigateTo = (url) => {
  //A través del historial insertaremos la URL y la cambiaremos
  history.pushState(null, "", url);
  //Llamamos a la función que dispara el router para renderizar cada una de las páginas
  router();
};

const router = () => {
  //Recuperar la ruta actual de nuestra URL del navegador
  const path = window.location.pathname;
  //Seleccionamos la página a pintar y si no existe, NotFound.
  const page = routes[path] || NotFound;
  //Cambiamos el title según la página
  if (path === "/about") {
    document.title = "Vite App | About";
  } else if (path === "/") {
    document.title = "Vite App | Home";
  } else {
    document.title = "Vite App";
  }
  //Inyectamos nuestra página para renderizarla en el #app;
  document.querySelector("#app").innerHTML = page();
};

//Vamos a añadirle un evento al window para que re-renderice las páginas si pulso atrás o adelante en el historial
window.addEventListener("popstate", router);

//Vamos a crear una función que le añada los eventos click a los links que pintan las diferentes páginas
const linksListeners = () => {
  //Recuperamos todos los links que hemos marcado con el atributo data-link
  const links = document.querySelectorAll("a[data-link]");
  //Recorremos los links y le añadimos un evento click a cada uno
  for (const link of links) {
    link.addEventListener("click", (ev) => {
      //Evitamos que recargue la página al clickar en estos anchor
      ev.preventDefault();
      //Le pasamos como argumento a la función que creamos para introducir URLS en el historial para que navegue, como cada link tiene un href distinto le vamos a pasar los que coinciden con nuestras rutas
      navigateTo(link.href);
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  router();
  linksListeners();
});

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  }
];

const header = document.querySelector("header");
//Creamos un titulo
const title = document.createElement("h1");
title.textContent = "My App";
//Añadimos el titulo al header
header.appendChild(title);
//Creamos un navbar
const nav = document.createElement("nav");
//Creamos la lista del navbar
const ul = document.createElement("ul");
//Añadimos el ul al nav
nav.appendChild(ul);
//Añadimos el nav al header
header.appendChild(nav);
console.log(header)
//Vamos a añadir todos los links a la lista del navbar
for (const link of links) {
  //Por cada uno de los links creo un li
  const li = document.createElement("li");
  //Por cada uno de los links quiero un anchor;
  const a = document.createElement("a");
  //Ahora le asignamos las propiedades al anchor
  a.textContent = link.name;
  a.href= link.path;
  //Metemos el a en el li
  li.appendChild(a);
  //Metemos cada uno de los li en el ul de fuera
  ul.appendChild(li)
}
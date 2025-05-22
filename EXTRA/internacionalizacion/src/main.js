import "./style.css";

import i18next from "i18next";
import config from "./lngconfig";

//Almacenamos los elementos a traducir
const title = document.querySelector("h1");
const description = document.querySelector("p");

i18next.init(config);

//Pintamos por defecto con el idioma detectado del navegador
title.innerHTML = i18next.t("title");
description.innerHTML = i18next.t("description");

//AddEventListener al select
document.querySelector("#lngselect").addEventListener("change", (ev) => {
  i18next.changeLanguage(ev.target.value).then((t) => {
    title.innerHTML = t("title");
    description.innerHTML = t("description");
  });
});

//Formateo de un array con Intl
const alumnos = ["Sergio", "Manuel", "Martin"];
const formatter = new Intl.ListFormat("es", {
  style: "long",
  type: "conjunction",
});

console.log(formatter.format(alumnos))

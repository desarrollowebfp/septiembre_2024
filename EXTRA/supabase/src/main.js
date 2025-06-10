import "./style.css";
import supabase from "./supabase";

//Importamos los elementos
const form = document.querySelector("#form");
const vg_name = document.querySelector("#vg_name");
const vg_genre = document.querySelector("#vg_genre");
const vg_platform = document.querySelector("#vg_platform");
const vg_date = document.querySelector("#vg_date");
const container = document.querySelector("#videogames_container");

//Creamos la función de cargar los videojuegos
const loadVideogames = async () => {
  container.innerHTML = "";
  let { data: videogames, error } = await supabase
    .from("videogames")
    .select("*")
    .order("date", { ascending: false });
  //Controlamos posibles errores
  if (error) {
    console.error("Error en la conexión con Supabase");
    return;
  }
  //Recorremos los objetos
  for (const videogame of videogames) {
    container.innerHTML += `
    <li>
      <h2>${videogame.name}</h2>
      <p>${videogame.platform} - ${videogame.genre}</p>
      <p>${videogame.date}</p>
    </li>
    `;
  }
};

//Vamos a añadirle el evento submit al formulario para crear nuevos videojuegos
form.addEventListener("submit", async (ev) => {
  ev.preventDefault();
  const newVideogame = {
    name: vg_name.value,
    platform: vg_platform.value,
    genre: vg_genre.value,
    date: vg_date.value,
  };
  //Llamamos a Supabase igual que antes
  const { data, error } = await supabase
    .from("videogames")
    .insert([newVideogame]);
  if (error) {
    console.error("Error insertando nuevo videojuego");
    return;
  }
  form.reset();
  loadVideogames();
});

document.addEventListener("DOMContentLoaded", loadVideogames);

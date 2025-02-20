import "./style.css";
import { pokemons, typeIcons } from "./data/data";

//Mapeamos los pokemons para quitar algunas propiedades y recalcular el peso y la altura en un nuevo array para no tener ruido a la hora de utilizar los datos
const mapPokemons = (pokemons) => {
  const newPokemons = pokemons.map((pokemon) => ({
    id: pokemon.number,
    name: pokemon.name,
    image: pokemon.image,
    type: pokemon.type[0],
    weight: pokemon.weight / 10,
    height: pokemon.height / 10,
  }));
  printPokemons(newPokemons);
};

const printPokemons = (pokemons) => {
  const container = document.querySelector("#container");
  for (const pokemon of pokemons) {
    const li = document.createElement("li");
    li.innerHTML = `
    <h2>#${pokemon.id} - ${pokemon.name}</h2>
    <img src="${pokemon.image}" alt="${pokemon.name}"/>
    <div class="${pokemon.type} icon_container">
    <img src="${typeIcons[pokemon.type]}" alt="${pokemon.type} icon" class="icon"/>
    </div>
    <p>${pokemon.weight}kg</p>
    <p>${pokemon.height}m</p>

    `;
    container.appendChild(li);
  }
};

//Con este evento lanzamos las funcionalidades que queramos una vez se parsee el DOM
window.addEventListener("DOMContentLoaded", () => {
  mapPokemons(pokemons);
});

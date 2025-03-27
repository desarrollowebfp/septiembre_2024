import "./style.css";
import getMovies from "./functions/getMovies";
import MovieCard from "./components/MovieCard/MovieCard";

const init = async () => {
  //Recuperamos la información de la API en una constante
  const data = await getMovies();
  //Pintamos todas las cartas en su contenedor
  for (const movie of data) {
    document.body.innerHTML += MovieCard(movie);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  init();
});

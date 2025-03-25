import "./style.css";
import { movies, shows } from "./data/data";
import Card from "./components/Card/Card";


console.log(movies);

document.body.innerHTML = `
  ${movies.map((movie) => Card("movie", movie)).join("")}
  ${shows.map((show) => Card("show", show)).join("")}
`;

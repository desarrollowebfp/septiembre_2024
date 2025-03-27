import "./MovieCard.css";
import Stars from "../Stars/Stars";

/* const etiquetaMeter = ` <meter id="vote" min="0" max="10" low="3" high="6" optimum="8" value="${movie.vote_average}">${movie.vote_average}</meter>`; */

/* ${Stars(movie.vote_average)} */

const MovieCard = (movie) => {
  return `
  <article class="movie_card">
    <img src="https://media.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}" alt="${movie.title} poster"/>
    <div>
        <circle-progress class="vote" value="${movie.vote_average}" max="10"></circle-progress>

        <h2>${movie.original_title}</h2>
        <p>${movie.release_date}</p>
        <details>
            <summary>Read more...</summary>
                ${movie.overview}
        </details>
    </div>
  </article>
  `;
};

export default MovieCard;

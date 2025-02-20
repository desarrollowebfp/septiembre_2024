const getPeliculas = () => {
  fetch("https://ghibliapi.vercel.app/films")
    .then((res) => res.json())
    .then((films) => {
      console.log(films);
    })
    .catch((error) => {
      alert("No se han podido obtener las películas");
    });
};

const getPeliculasES6 = async () => {
  try {
    const res = await fetch("https://ghibliapi.vercel.app/films");
    const films = await res.json();
    mapPeliculas(films);
  } catch (error) {
    alert("No se han podido obtener las películas");
  }
};

const mapPeliculas = (films) => {
  const mappedPeliculas = films.map((film) => ({
    title: film.title,
    japTitle: film.original_title,
    year: film.release_date,
    director: film.director,
    poster: film.image,
  }));
  renderPeliculas(mappedPeliculas)
};

const renderPeliculas = (films) => {
  const container = document.querySelector("#container");
  films.forEach(film => {
    const li = document.createElement("li");
    li.innerHTML = `
    <h3>${film.title}</h3>
    <h4>${film.japTitle}</h4>
    <img src="${film.poster}" alt="${film.title} poster"/>
    <p>${film.director} - ${film.year}</p>
    `
    container.appendChild(li);
  });
};

window.addEventListener("DOMContentLoaded", () => {
  getPeliculasES6();
});

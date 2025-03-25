import "./Card.css";

const Card = (type = "movie", data ={
    titulo: "Titulo",
    año: "Año",
    director: "Director",
  }) => {
  if (type != "movie" && type != "show") {
    console.error("Usa los argumentos correctos en el componente Card")
    return;
  }

  if (type === "movie") {
    return `
    <article class='card movie ${data.nota >= 6 ? "good" : "bad"}'>
        <h3>${data.titulo} - ${data.año}</h3>
        <p>Dirigida por: ${data.director}</p>
    </article>
    `;
  }

  if (type === "show") {
    return `
    <article class="card show">
        <h3>${data.titulo} - ${data.año}</h3>
        <p>Temporada ${data.temporada}</p>
        <p>Dirigida por: ${data.director}</p>
        <p>La puedes ver en ${data.plataforma}</p>

    </article>`;
  }
};

export default Card
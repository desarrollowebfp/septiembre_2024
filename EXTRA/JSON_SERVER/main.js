const API = "http://localhost:3000/discos";
const lista = document.querySelector("#discos-container");
const formulario = document.querySelector("#form-disco");

const crearDisco = (disco) => {
  const li = document.createElement("li");
  li.innerHTML = `
          <h2>${disco.artist} - ${disco.title}</h2>
          <img src="${disco.cover}" alt="${disco.artist} - ${disco.title}"/>
          <p>${disco.year}</p>
      `;
  //Añadimos el botón y la función de borrar tanto de la web como de la API
  return li;
};

//GET
const consultarDiscos = async () => {
  //Colocamos un loading
  lista.innerHTML = "Cargando...";
  //Atacamos a nuestra API
  const res = await fetch(API);
  const data = await res.json();
  //Vaciamos la lista
  lista.innerHTML = "";
  data.forEach((disco) => lista.appendChild(crearDisco(disco)));
};

//POST
formulario.addEventListener("submit", async (ev) => {
  ev.preventDefault();
  //Recuperamos los valores
  const titulo = document.querySelector("#titulo").value;
  const artista = document.querySelector("#artista").value;
  const portada = document.querySelector("#portada").value;
  const año = document.querySelector("#año").value;
  //Creamos el nuevo objeto disco
  const nuevoDisco = {
    title: titulo,
    artist: artista,
    year: año,
    cover: portada,
  };
  //Y lo mandamos a la base de datos mediante fetch
  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(nuevoDisco),
  });
  //Reiniciamos el formulario
  formulario.reset();
  //Repintamos los discos para poder ver los cambios a tiempo real
  await consultarDiscos();
});

document.addEventListener("DOMContentLoaded", consultarDiscos);

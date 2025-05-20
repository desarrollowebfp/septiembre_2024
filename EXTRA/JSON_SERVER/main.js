const API = "http://localhost:3000/discos";
const lista = document.querySelector("#discos-container");
const formulario = document.querySelector("#form-disco");

let modoEdicion = false;

const crearDisco = (disco) => {
  const li = document.createElement("li");
  li.innerHTML = `
          <h2>${disco.artist} - ${disco.title}</h2>
          <img src="${disco.cover}" alt="${disco.artist} - ${disco.title}"/>
          <p>${disco.year}</p>
      `;
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Borrar disco";
  deleteBtn.addEventListener("click", async () => {
    await fetch(`${API}/${disco.id}`, {
      method: "DELETE",
    });
    consultarDiscos();
  });
  li.appendChild(deleteBtn);
  //Creamoe el boton de edtiar
  const editBtn = document.createElement("button");
  editBtn.textContent = "Editar disco";
  editBtn.addEventListener("click", () => {
    modoEdicion = true;
    document.querySelector("#submitbtn").textContent = "Editar disco";
    //Pintamos los datos del disco existente en el formulario
    document.querySelector("#titulo").value = disco.title;
    document.querySelector("#artista").value = disco.artist;
    document.querySelector("#portada").value = disco.cover;
    document.querySelector("#año").value = disco.year;
    document.querySelector("#id").value = disco.id;
  });
  li.appendChild(editBtn);
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

  if (!modoEdicion) {
    //Creamos el nuevo objeto disco
    const nuevoDisco = {
      id: crypto.randomUUID(),
      title: document.querySelector("#titulo").value,
      artist: document.querySelector("#artista").value,
      year: document.querySelector("#año").value,
      cover: document.querySelector("#portada").value,
    };
    //Y lo mandamos a la base de datos mediante fetch
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevoDisco),
    });
  } else {
    //Recuperamos el id
    const inputID = document.querySelector("#id").value;
    const nuevoDisco = {
      id: document.querySelector("#id").value,
      title: document.querySelector("#titulo").value,
      artist: document.querySelector("#artista").value,
      year: document.querySelector("#año").value,
      cover: document.querySelector("#portada").value,
    };
    await fetch(`${API}/${inputID}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevoDisco),
    });
    modoEdicion = false
  }

  //Reiniciamos el formulario
  formulario.reset();
  //Repintamos los discos para poder ver los cambios a tiempo real
  await consultarDiscos();
});

document.addEventListener("DOMContentLoaded", consultarDiscos);

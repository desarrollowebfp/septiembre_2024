console.log("INICIO")

fetch("https://rickandmortyapi.com/api/character")
  .then((res) => res.json())
  .then((res) => {
      const personajes = res.results;
      console.log("FINAL")
      for (const personaje of personajes) {
        const div = document.createElement("div");
        div.innerHTML = `
        <h2>${personaje.name}</h2>
        <img src="${personaje.image}" alt="${personaje.name}"/>
        <p>${personaje.origin.name}</p>
        <p>${personaje.status}</p>
        `
        document.body.appendChild(div);
      }
  }).catch((error) => {
    document.body.innerHTML = `
    <h2>Ahora mismo no se pueden mostrar los datos, vuelve más tarde</h2>
    `
  })

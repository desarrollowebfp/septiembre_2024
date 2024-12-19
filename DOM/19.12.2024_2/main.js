const elementos = [
  {
    nombre: "Hidrogeno",
    simbolo: "H",
    numeroAtomico: 1,
    masaAtomica: 1.008,
    grupo: "No metal",
  },
  {
    nombre: "Helio",
    simbolo: "He",
    numeroAtomico: 2,
    masaAtomica: 4.0026,
    grupo: "Gas noble",
  },
  {
    nombre: "Litio",
    simbolo: "Li",
    numeroAtomico: 3,
    masaAtomica: 6.94,
    grupo: "Metal alcalino",
  },
  {
    nombre: "Berilio",
    simbolo: "Be",
    numeroAtomico: 4,
    masaAtomica: 9.0122,
    grupo: "Metal alcalinoterreo",
  },
  {
    nombre: "Boro",
    simbolo: "B",
    numeroAtomico: 5,
    masaAtomica: 10.81,
    grupo: "Metaloide",
  },
];

const main = document.querySelector("main");

const pintarElementos = (elementos) => {
  if (elementos.length) {
    main.innerHTML = "";
    for (const elemento of elementos) {
      main.innerHTML += `
      <article>
        <h2>${elemento.numeroAtomico} - ${elemento.simbolo}</h2>
        <h3>${elemento.nombre}</h3>
        <p>${elemento.grupo}</p>
      </article>
      `;
    }
  } else{
    main.innerHTML = "<h2>No hay coincidencias</h2>"
  }
};

pintarElementos(elementos);

document.querySelector("#inputText").addEventListener("input", (ev) => {
  const elementosFiltrados = elementos.filter((elemento) =>
    elemento.nombre.toLowerCase().includes(ev.target.value.toLowerCase())
  );
  pintarElementos(elementosFiltrados);
});

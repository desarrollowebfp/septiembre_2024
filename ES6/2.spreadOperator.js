//Spread Operator -> ...

const newMovies = ["Heretic", "Nosferatu", "Gladiator II"];
const oldMovies = ["Los Vengadores", "Matrix", "El hombre elefante"];

const movies = ["Matrix 2", ...newMovies,"",...oldMovies, "Bracula"];
console.log(movies)

//Cuando se utiliza como parametro de una funcion se le denomina rest operator
const juntarAlumnos = (...alumnos) => {
  return alumnos.join("-")
}

console.log(juntarAlumnos("Mateo", "Martin", "Jose", "Sergio"))

//En Objetos

const peluche = {
  color: "verde",
  price: 7,
  tipo: "Marciano"
}

const {color, ...rest} = peluche;
console.log(color);
console.log(rest)

//Push
let peliculasVistas = [];
console.log(peliculasVistas);
peliculasVistas = [...peliculasVistas, "Matrix"];
console.log(peliculasVistas);
peliculasVistas = [...peliculasVistas, "Dune"];
console.log(peliculasVistas);

//String
const frase = "Tengo sueño";
const desFrase = [...frase];
console.log(desFrase);

console.log(..."👼🏽");


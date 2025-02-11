const peliculas = [
  { titulo: "El Padrino", rating: 9.2 },
  { titulo: "Pulp Fiction", rating: 8.9 },
  { titulo: "Inception", rating: 8.8 },
];

const totalRating = peliculas.reduce((acc, pelicula) => {
  return acc + pelicula.rating;
}, 0);

console.log(totalRating);

//MAP
const arrayDeTitulos = peliculas.map((pelicula) => pelicula.titulo);

const arrayDeTitulosRed = peliculas.reduce((acc, pelicula) => {
  acc.push(pelicula.titulo);
  return acc;
}, []);

console.log(arrayDeTitulosRed);

//FILTER

const arrayDeMayorQue9 = peliculas.filter((pelicula) => pelicula.rating > 9);

const arrayDeMayorQue9Red = peliculas.reduce((acc, pelicula) => {
  if (pelicula.rating > 9) {
    acc.push(pelicula);
  }
  return acc;
}, []);

console.log(arrayDeMayorQue9Red);

//FIND
const buscarElPadrino = peliculas.find(
  (pelicula) => pelicula.titulo === "El Padrino"
);

const buscarElPadrinoRed = peliculas.reduce((acc, pelicula) => {
  //Si la pelicula coincide devolvemos el acumulador
  if (acc) {
    return acc;
  }
  //Y si no evaluamos si el acumulador sera la pelicula o será undefined
  return pelicula.titulo === "El Padrino" ? pelicula : undefined;
}, undefined);

console.log(buscarElPadrinoRed);

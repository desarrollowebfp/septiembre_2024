/* Dada una lista de canciones, clasifícalas en un objeto donde las claves sean los géneros y los valores sean arrays de canciones de ese género.

Utiliza bucles para estructurar este objeto e imprime el resultado por consola. */

const tracks = [
  { title: "Enter Sandman", genre: "Metal" },
  { title: "Back in Black", genre: "Rock" },
  { title: "Bohemian Rhapsody", genre: "Rock" },
  { title: "Blinding Lights", genre: "Pop" },
  { title: "Old Town Road", genre: "Country" },
  { title: "Smells Like Teen Spirit", genre: "Grunge" },
  { title: "Bad Guy", genre: "Pop" },
  { title: "Thunderstruck", genre: "Rock" },
  { title: "Hotel California", genre: "Rock" },
  { title: "Stairway to Heaven", genre: "Rock" },
];

// Añade tu código de bucle aquí
const music = {};

for (const track of tracks) {
  const genre = track.genre;
  //Si music no tiene la clave del genero de cada una de las vueltas la creamos con un array vacio
  if (!music[genre]) {
    music[genre] = [];
  }
  //Añadimos en cada uno de los generos los titulos de las canciones
  music[genre].push(track.title);
}

console.log(music);

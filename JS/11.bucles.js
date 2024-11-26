const peliculas = [
  "El Padrino",
  "El Caballero Oscuro",
  "Pulp Fiction",
  "La Lista de Schindler",
  "Forrest Gump",
  "El Señor de los Anillos: La Comunidad del Anillo",
  "Inception",
  "Matrix",
  "Gladiador",
  "El Gran Hotel Budapest",
];

//FOROF
for (const pelicula of peliculas) {
  console.log(pelicula);
}
//FOREACH
peliculas.forEach((pelicula) => {
  console.log(pelicula);
});
//FORIN
const consola = {
  nombre: "PlayStation 5",
  fabricante: "Sony",
  anioDeLanzamiento: 2020,
  almacenamiento: "825GB SSD",
  resolucionMaxima: "8K",
  mando: "DualSense",
  juegosIncluidos: ["Astro's Playroom"],
  coloresDisponibles: ["blanco", "negro"],
};

for (const key in consola) {
  console.log("La propiedad " + key + " tiene como valor: " + consola[key])
}

//PROBEMOS FOROF Y FORIN CON ARRAYS Y OBJETOS
/* for (const element of consola) {
  console.log(element)
} */

for (const key in peliculas) {
  console.log(key)
}
/* Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función: */
const alumnos = [
  "Martin",
  "Mario",
  "Aixa",
  "Mateo",
  "Sergio",
  "Carlos",
  "Juanita",
  "Jose",
  "Manuel",
];

const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(stringList) {
  let longestWord = "";
  for (const string of stringList) {
    if (string.length > longestWord.length) {
      longestWord = string;
    }
  }
  console.log(longestWord);
}

findLongestWord(avengers);
findLongestWord(alumnos);

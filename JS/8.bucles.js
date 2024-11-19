//BUCLE BASICO

for (let i = 0; i < 5; i++) {
  console.log("Hola ", i);
}

//EMPIEZA EL BUCLE
//i = 0 -> SE CUMPLE -> ME LLEVO UNA PARA LA SIGUIENTE VUELTA
//Hola 0
//i = 1 -> SE CUMPLE -> ME LLEVO UNA PARA LA SIGUIENTE VUELTA
//Hola 1
//i = 2 ->  SE CUMPLE -> ME LLEVO UNA PARA LA SIGUIENTE VUELTA
//Hola 2
//i = 3 ->  SE CUMPLE -> ME LLEVO UNA PARA LA SIGUIENTE VUELTA
//Hola 3
//i = 4 ->  SE CUMPLE -> ME LLEVO UNA PARA LA SIGUIENTE VUELTA
//Hola 4
//i = 5 -> NO SE CUMPLE -> SE ROMPE EL BUCLE

const animales = [
  "perro",
  "gato",
  "elefante",
  "león",
  "tigre",
  "jirafa",
  "zorro",
  "conejo",
  "lobo",
  "oso",
  "pájaro",
  "pez",
  "caballo",
  "vaca",
  "oveja",
  "cerdo",
  "águila",
  "serpiente",
  "delfín",
  "canguro",
  "cocodrilo",
  "hipopótamo",
  "rinoceronte",
  "camello",
  "panda",
  "pingüino",
  "armadillo",
  "koala",
  "murciélago",
  "mapache",
  "tortuga",
  "ardilla",
  "flamenco",
  "ciervo",
  "alce",
];

for (let i = 0; i < animales.length; i++) {
  const animal = animales[i];
  console.log(animal, i);
}

//

const numeros = [
  42, 87, 12, 56, 33, 78, 91, 64, 29, 5, 72, 18, 50, 44, 97, 31, 66, 23, 10, 88,
];

let counter = 0;

/* for (let i = 0; i < numeros.length; i++) {
  const numero = numeros[i];
  counter += numero;
} */

//FOROF
for (const numero of numeros) {
  counter += numero;
}

console.log(counter);

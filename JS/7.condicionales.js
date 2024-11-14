/* //Igual que o estrictamente igual que
const x = 10;

if(x === "10"){
  console.log("OK")
} */

const heLimpiado = true;
const heEstudiado = true;

/* if (heLimpiado === true) {
  console.log("Puedo salir a la calle");
} */

/* if (heLimpiado && heEstudiado) {
  console.log("Puedo salir a la calle");
} else {
  console.log("Estas castigado");
}
 */

const age = 987;

if (age > 0 && age < 18) {
  console.log("No puedes entrar sin tus padres");
} else if (age >= 18 && age < 80) {
  console.log("Puedes pasar a la pista");
} else if (age >= 80 && age < 120) {
  console.log("Puedes pasar a la grada con sofas");
} else {
  console.log("No existes");
}

//TERNARIO
/* if (heLimpiado && heEstudiado) {
  console.log("Puedo salir a la calle");
} else {
  console.log("Estas castigado");
}
 */
heLimpiado && heEstudiado
  ? console.log("Puedo salir a la calle")
  : console.log("Estas castigado");

//SWITCH
const pelicula = "The Matrix";

switch (pelicula) {
  case "The Matrix":
    console.log("Es una pelicula de gente en gabardina");
    break;
  case "Dune":
    console.log("Es una película con arena");
    break;
  case "Dracula":
    console.log(
      "Es una película con un señor mayor que secuestra gente y se la come"
    );
    break;
  default:
    console.log("No se que película es esa");
    break;
}

if (pelicula === "The Matrix") {
  console.log("Es una pelicula de gente en gabardina");
} else if (pelicula === "Dune") {
  console.log("Es una película con arena");
} else if (pelicula === "Dracula") {
  console.log(
    "Es una película con un señor mayor que secuestra gente y se la come"
  );
} else {
  console.log("No se que película es esa");
}

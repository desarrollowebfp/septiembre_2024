/* Completa esta función para que, al recibir dos números por */ /* argumento, te devuelva por consola el más alto de los dos. */

function greaterNumber(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    console.log(numberOne);
  } else if (numberOne === numberTwo) {
    console.log("Son iguales");
  } else {
    console.log(numberTwo);
  }
}

greaterNumber(4, 4);

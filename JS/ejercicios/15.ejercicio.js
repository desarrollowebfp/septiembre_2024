const crearPiramide = (pisos) => {
  for (let i = 1; i <= pisos; i++) {
    let espacios = " ".repeat(pisos - i);
    let asteriscos = "*".repeat(2 * i - 1);
    console.log(espacios + asteriscos);
  }
};

crearPiramide(25)
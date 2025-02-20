const miPromesa = new Promise((resolve, reject) => {
  console.log("Inicio de promesa");
  setTimeout(() => {
    const exito = false;
    if (exito) {
      resolve("Tarea completada!");
    } else {
      reject("Ocurrió un error");
    }
  }, 2000);
});

miPromesa
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.log(error);
  })

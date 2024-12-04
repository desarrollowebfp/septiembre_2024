const alumnos = ["Martin", "Carlos", "Manuel", "Yria", "Eugenio", "Sufyan"];

//Length
console.log(alumnos.length);

//Posiciones
alumnos[0];

//Reasignar elementos de un array atacando a su posición
alumnos[1] = "Paco";

//METODOS QUE MODIFICAN LOS ARRAYS
//Push -> Añade elementos en la ultima posicion
alumnos.push("Jose");
console.log(alumnos);
//Pop -> Elimina el ultimo elemento
alumnos.pop();
console.log(alumnos);
//Unshift -> Inserta elementos en la primera posición
alumnos.unshift("Jose");
console.log(alumnos);
//Shift -> Elimina la primera posición
alumnos.shift();
console.log(alumnos);
//Reverse -> Invierte el array
alumnos.reverse();
console.log(alumnos);
//Sort -> Ordena un array en orden alfabetico
alumnos.sort();
console.log(alumnos);

//INCISO
const numeros = [1, 34, 54, 5, 23, 11, 12, 9, 123, 98];
numeros.sort((a, b) => b - a);
console.log(numeros);

//Splice
alumnos.splice(2, 2, "Byron");
console.log(alumnos);

//METODOS QUE NO MODIFICAN EL ARRAY
//IndexOf -> Buscar el indice de un elemento de array
console.log(alumnos.indexOf("Manuel"));
//Includes -> Devolver un booleano dependiendo de si encuentra o no un elemento en el array
console.log(alumnos.includes("Byron"));
//Slice -> Cortamos una porción del array por posiciones, la primera posicion la incluye, la segunda no.
console.log(alumnos.slice(1, 4));
//Son duplicados, no tienen referencia con el array original
const nuevosAlumnos = alumnos.slice(1, 4);
console.log(nuevosAlumnos);
//Concat -> Concatenar arrays
const acoplados = ["Violeta", "Naruto", "Perro"];
const cursoCompleto = alumnos.concat(acoplados);
console.log(cursoCompleto);

//Flat
const arrayMarciano = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]];
console.log(arrayMarciano.flat(4));
console.log(arrayMarciano[3][3][3][0]);

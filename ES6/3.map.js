const numbers = [1, 2, 3, 4, 5];
/* let numbersX2 = [];

for (const number of numbers) {
  const result = number * 2;
  numbersX2.push(result)
}
;

console.log(numbersX2) */

const numbersX2 = numbers.map((number) => number * 2);
console.log(numbersX2);

//

const alumnos = ["Martin", "Samuel", "Sergio", "Yria", "Manuel"];

const alumnosConLength = alumnos.map((alumno) => ({
  name: alumno,
  length: alumno.length,
}));
console.log(alumnosConLength);

//

const pokemons = [
  {
    name: "Pikachu",
    id: "cv7455345hbjnkmsdlgfkn325sbfhzdjgd",
    weight: 60, //Dividir entre diez para que sean kilos
    height: 4, //Dividir entre diez para que sean metros
  },
  {
    name: "Pollomon",
    id: "cvsd934u534tbjnkmsdlgfkn325sbfhzdjgd",
    weight: 90, //Dividir entre diez para que sean kilos
    height: 9, //Dividir entre diez para que sean metros
  },
];

const pokemonsMapeados = pokemons.map((pokemon) => ({
  nombre: pokemon.name,
  peso: pokemon.weight / 10 + "KG",
  altura: pokemon.height / 10 + "M",
}))

console.log(pokemonsMapeados)

//

const personas = ["Peter", "Mateo", "Billy", "Samuel"];

const infectados = personas.map((persona) => {
  if(persona !== "Mateo"){
    return "🧟"
  } else{
    return persona
  }
});
console.log(infectados)
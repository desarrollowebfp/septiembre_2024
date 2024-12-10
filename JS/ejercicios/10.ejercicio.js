/* Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.

Recuerda no usar frutas duplicadas.

Finalmente, imprime el array resultante. */

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Strawberry", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

//Nuevo array
const newFood = [];

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

//Posicion temporal
let fruitPos = 0;

for (const food of foodSchedule) {
  if (food.isVegan) {
    newFood.push(food);
  } else {
    newFood.push({
      name: fruits[fruitPos],
      isVegan: true,
    });
    fruitPos++;
  }
}

console.log(newFood);

//Segunda solucion -> CUIDADO SI FUERAN SEGUIDOS NO FUNCIONARIA COMO EN EL EJERCICIO DE LOS GATOS

for (const food of foodSchedule) {
  if (!food.isVegan) {
    const pos = foodSchedule.indexOf(food);
    foodSchedule.splice(pos, 1, {
      name: fruits[fruitPos],
      isVegan: true,
    });
    fruitPos++;
  }
}

console.log(foodSchedule)

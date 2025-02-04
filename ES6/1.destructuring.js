//Objetos
const phone = {
  name: "iPhone 12 mini",
  price: 300,
  color: "black",
  brand: "Apple",
  memory: "64GB",
  apps: {
    first: "Contacts",
    second: "Notion"
  }
};

/* const price = phone.price;
const color = phone.color;
const brand = phone.brand; */

const {price, color, brand} = phone;
const {first} = phone.apps;

console.log(price)

//Arrays

const animales = ["Perro", "Gato", "Delfin"];
/* const primero = animales[0];
const segundo = animales[1];
const tercero = animales[2]; */

const [primero, segundo, tercero] = animales;

//Intercambio de variables
let x = 10;
let y = 2;

[x,y] = [y,x];

console.log(x);

import {data, strings } from "data.js";
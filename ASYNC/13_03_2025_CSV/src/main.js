import "./style.css";
import converter from "convert-csv-to-json";
import data from "./data/data";

const parsedData = converter.csvStringToJson(data);
console.log(parsedData)

const main = document.querySelector("main")

for (const band of parsedData) {
  const div = document.createElement("div");
  div.innerHTML = `
  <h2>${band.Name} - ${band.Year}</h2>
  <img src="${band.Cover}" alt="${band.Name}"/>
  <p>${band.Country}</p>
  `
  main.appendChild(div)
  
}
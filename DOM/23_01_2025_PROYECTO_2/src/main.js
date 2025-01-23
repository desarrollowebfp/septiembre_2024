import "./style.css";
//Importo los datos
import data from "./data/data";

//Recuperamos los contenedores existentes
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

const printHeader = () => {
  const logo = document.createElement("img");
  logo.src = data.icon;
  logo.alt = data.title + " logo";
  header.appendChild(logo);
  const h1 = document.createElement("h1");
  h1.textContent = data.title;
  header.appendChild(h1);
};

const printMain = () => {
  for (const game of data.games) {
    const article = document.createElement("article");
    article.innerHTML = `
    <img src="${game.cover}" alt="${game.title} cover"/>
    <h2>${game.title}</h2>
    <h3>${game.developer}</h3>
    <p>${game.releaseDate} - ${game.price}</p>
    `
    main.appendChild(article)
  }
};

const printFooter = () => {
  const p = document.createElement("p");
  p.textContent = data.copyright;
  footer.appendChild(p);
};

const renderPage = () => {
  printHeader();
  printMain();
  printFooter();
};

renderPage();

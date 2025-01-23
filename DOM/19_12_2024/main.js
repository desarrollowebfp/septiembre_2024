const main = document.querySelector("main");

main.innerHTML = "<h2>Loading...</h2>";

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((res) => {
    main.innerHTML = "";
    for (const article of res) {
      main.innerHTML += `
        <article>
          <img src="${article.image}" alt="${article.title}" />
          <h2>${article.title}</h2>
          <p class="${article.price >= 100 ? "expensive" : "cheap"}">${article.price}€</p>
        </article>
      `;
    }
  });

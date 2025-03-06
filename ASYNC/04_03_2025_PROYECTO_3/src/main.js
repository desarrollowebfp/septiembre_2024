import "./style.css";

const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;
const photo_input = document.querySelector("#photo_input");
const search_btn = document.querySelector("#search_btn");
const color_input = document.querySelector("#color_input");
const prev_btn = document.querySelector("#prevBtn");
const next_btn = document.querySelector("#nextBtn");

let currentPage = 1;
let currentKeyword = "";

const getPhotos = async (keyword, pageNum = 1) => {
  currentPage = pageNum;
  currentKeyword = keyword;

  let url = `https://api.unsplash.com/search/photos?page=${pageNum}&per_page=10&query=${keyword}&client_id=${ACCESS_KEY}`;

  //Vamos a hacer la comprobación de si tenemos que buscar con color o no porque si no se rompe
  if (color_input.value != "") {
    url += `&color=${color_input.value}`;
  }
  try {
    const res = await fetch(url);
    const data = await res.json();
    mapPhotos(data.results);
  } catch (error) {
    alert("No funciona la API");
  }
};

const mapPhotos = (photos) => {
  const mappedPhotos = photos.map((photo) => ({
    alt: photo.alt_description,
    photo: photo.urls.regular,
    original_photo: photo.urls.raw,
    color: photo.color,
  }));

  printPhotos(mappedPhotos);
};

const printPhotos = (photos) => {
  const container = document.querySelector("#photo_container");
  container.innerHTML = "";
  if (photos.length) {
    for (const photo of photos) {
      const li = document.createElement("li");
      li.innerHTML = `
      <a href="${photo.original_photo}" target="_blank">
        <img src="${photo.photo}" alt="${photo.alt}" style="background-color:${photo.color}"/>
      </a>
      `;
      container.appendChild(li);
    }
    checkBtns();
  } else {
    container.innerHTML = "<h2 class='error'>Try another keyword...</h2>";
    checkBtns();
  }
};

const checkBtns = () => {
  if (currentPage === 1) {
    prev_btn.disabled = true;
  } else {
    prev_btn.disabled = false;
  }
};

search_btn.addEventListener("click", () => {
  getPhotos(photo_input.value);
});

prev_btn.addEventListener("click", () => {
  if (currentPage > 1) {
    getPhotos(currentKeyword, currentPage - 1);
  }
});

next_btn.addEventListener("click", () => {
  getPhotos(currentKeyword, currentPage + 1);
});

window.addEventListener("DOMContentLoaded", () => {
  getPhotos("capybara");
});

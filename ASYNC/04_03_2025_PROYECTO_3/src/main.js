import "./style.css";

const ACCESS_KEY = "f6GXQ9bygU7KoLCwN06tZUWzI6zRJSloOQHECHpVts0";
const photo_input = document.querySelector("#photo_input");
const search_btn = document.querySelector("#search_btn");

const getPhotos = async (keyword) => {
  const res = await fetch(
    `https://api.unsplash.com/search/photos?page=1&per_page=20&query=${keyword}&client_id=${ACCESS_KEY}`
  );
  const data = await res.json();
  mapPhotos(data.results);
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

  for (const photo of photos) {
    const li = document.createElement("li");
    li.innerHTML = `
    <a href="${photo.original_photo}" target="_blank">
      <img src="${photo.photo}" alt="${photo.alt}" style="background-color:${photo.color}"/>
    </a>
    `;
    container.appendChild(li);
  }
};

search_btn.addEventListener("click", () => {
  getPhotos(photo_input.value);
});

window.addEventListener("DOMContentLoaded", () => {
  getPhotos("capybara");
});

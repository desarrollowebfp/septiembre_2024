import "./style.css";
import { createApi } from "unsplash-js";

const ACCESS_KEY = "B4wtMyCSvO1gIAfaKocHHrszI_YykTFiT-QL50KHe_A";

//Mediante el método createAPI creamos una instancia llamada unsplash que nos permitirá utilizar varios métodos:
const unsplash = createApi({ accessKey: ACCESS_KEY });

unsplash.search
  .getPhotos({
    query: "capybara",
    page: 1,
    perPage: 20,
  })
  .then((result) => {
    console.log(result.response.results);
  });

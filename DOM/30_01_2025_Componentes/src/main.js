import "./style.css";
import Avatar from "./components/Avatar";

const yriaSettings = {
  username: "Yria",
  size: "lg",
  color: "lightblue",
};

const mateoSettings = {
  username: "Mateo Tascon",
};

const cloudSettings = {
  username: "Cloud",
  size: "sm",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF-_C07Mtmq8qC-rrHPa_sAmqsndUrpYNwUA&s",
};

document.querySelector("#app").innerHTML = `
    ${Avatar(yriaSettings)}
    ${Avatar(mateoSettings)}
    ${Avatar(cloudSettings)}
`;

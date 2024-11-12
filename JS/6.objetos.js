const guitar = {
  name: "Les Paul",
  label: "Epiphone",
  color: "black",
  image:
    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRJpdzq0hjQHNYavMKdgNFgQASte82ffOvwdYRqgd5lZp9BdXrRWqId-0Wh8jSE_DnbLw0-xf1WHzzlLdd7qY2rKPwF6g0Gqg",
  price: 750.54,
  strings: 6,
};

console.log(guitar.color);
console.log(guitar["color"]);

guitar.color = "red";
console.log(guitar);

guitar.model = "76HY";
console.log(guitar);

delete guitar.model;
console.log(guitar);

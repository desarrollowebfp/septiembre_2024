const pueblosGraciosos = [
  {
    name: "Guarromán",
    population: 2926,
    province: "Jaén",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Bandera_de_Ja%C3%A9n.svg",
  },
  {
    name: "Villapene",
    population: 133,
    province: "Lugo",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_Lugo_%28Spain%29.svg",
  },
  {
    name: "Malcocinado",
    population: 395,
    province: "Badajoz",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Bandera_de_la_Provincia_de_Badajoz.svg",
  },
  {
    name: "Alcantarilla",
    population: 41021,
    province: "Murcia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/37/Flag_of_the_Region_of_Murcia.svg",
  },
  {
    name: "Cenicero",
    population: 2000,
    province: "La Rioja",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_La_Rioja_%28with_coat_of_arms%29.svg",
  },
  {
    name: "La Hija de Dios",
    population: 79,
    province: "Ávila",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Bandera_de_%C3%81vila.svg",
  },
  {
    name: "Pepino",
    population: 2174,
    province: "Toledo",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Bandera_Provincia_Toledo.svg",
  },
  {
    name: "Adiós",
    population: 170,
    province: "Navarra",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_Navarre.svg",
  },
  {
    name: "Cariño",
    population: 4373,
    province: "A Coruña",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_A_Coru%C3%B1a_Province.svg",
  },
  {
    name: "Guasa",
    population: 64,
    province: "Huesca",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flag_of_Huesca_%28province%29.svg",
  },
  {
    name: "Calamocos",
    population: 262,
    province: "León",
    flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Le%C3%B3n_%28Spain%29.svg",
  },
  {
    name: "El Pito",
    population: 90,
    province: "Asturias",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flag_of_Asturias.svg",
  },
  {
    name: "Cebolla",
    population: 3527,
    province: "Toledo",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Bandera_Provincia_Toledo.svg",
  },
  {
    name: "Los Infiernos",
    population: 30,
    province: "Murcia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/37/Flag_of_the_Region_of_Murcia.svg",
  },
  {
    name: "Chulilla",
    population: 676,
    province: "Valencia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/94/Flag_of_the_Valencian_Community_%28official%29.svg",
  },
  {
    name: "Matagorda",
    population: 2266,
    province: "Almería",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/13/Flag_Province_of_Almer%C3%ADa.svg",
  },
  {
    name: "Berga",
    population: 16238,
    province: "Barcelona",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_Barcelona_%28province%29.svg",
  },
  {
    name: "Seno",
    population: 42,
    province: "Teruel",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Bandera_de_la_provincia_de_Teruel.svg",
  },
  {
    name: "Humilladero",
    population: 3364,
    province: "Málaga",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/44/Flag_of_M%C3%A1laga_Province.svg",
  },
  {
    name: "Pulgar",
    population: 1603,
    province: "Toledo",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Bandera_Provincia_Toledo.svg",
  },
  {
    name: "La Pera",
    population: 441,
    province: "Girona",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Girona_%28province%29.svg",
  },
  {
    name: "Silla",
    population: 18570,
    province: "Valencia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/94/Flag_of_the_Valencian_Community_%28official%29.svg",
  },
  {
    name: "Melón",
    population: 1293,
    province: "Ourense",
    flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_Ourense_Province.svg",
  },
  {
    name: "Sordillos",
    population: 24,
    province: "Burgos",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Burgos_%28Spain%29.svg",
  },
  {
    name: "Venta de Pantalones",
    population: "Deshabitado (activo en verano)",
    province: "Jaén",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Bandera_de_Ja%C3%A9n.svg",
  },
];

const mappedPueblos = pueblosGraciosos.map((pueblo) => ({
  name: pueblo.name,
  population: pueblo.population,
  province: pueblo.province,
}));

const printPueblos = (pueblos) => {
  const container = document.querySelector("#container");
  container.innerHTML = "";
  for (const pueblo of pueblos) {
    const article = document.createElement("article");
    article.innerHTML = `
    <h2>${pueblo.name}</h2>
    <h3>${pueblo.population}</h3>
    <p>${pueblo.province}</p>
    `;
    container.appendChild(article);
  }
};

//Le damos un evento input al input de texto
document.querySelector("#puebloName").addEventListener("input", (ev) => {
  const pueblosFiltrados = mappedPueblos.filter((pueblo) =>
    pueblo.name.toLowerCase().includes(ev.target.value.toLowerCase()) ||
    pueblo.province.toLowerCase().includes(ev.target.value.toLowerCase())
  );
  printPueblos(pueblosFiltrados);
});

//Ejecutamos al cargar el main la funcion que me pinta los pueblos iniciales
printPueblos(mappedPueblos);


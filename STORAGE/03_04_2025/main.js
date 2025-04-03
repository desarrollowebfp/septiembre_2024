//REPASO

/* localStorage.setItem("user", "Paco");
const user = localStorage.getItem("user");

/* localStorage.removeItem("user");
localStorage.clear();
 */

//Si queremos almacenar datos más complejos que un string, tendremos que convertirlos a string a la hora de almacenarlos
/* localStorage.setItem("countries", JSON.stringify(countries)); */

//Para desconvertirlos de string utilizaremos JSON.parse
//const countries = JSON.parse(localStorage.getItem("countries"));

const countries = [
  {
    name: "United States",
    capital: "Washington, D.C.",
    population: 331002651,
    flag: "🇺🇸",
    continent: "North America",
    officialLanguage: "English",
    currency: "USD",
    area: 9833520, // km²
  },
  {
    name: "Canada",
    capital: "Ottawa",
    population: 37742154,
    flag: "🇨🇦",
    continent: "North America",
    officialLanguage: "English, French",
    currency: "CAD",
    area: 9984670, // km²
  },
  {
    name: "United Kingdom",
    capital: "London",
    population: 67886011,
    flag: "🇬🇧",
    continent: "Europe",
    officialLanguage: "English",
    currency: "GBP",
    area: 242495, // km²
  },
  {
    name: "Japan",
    capital: "Tokyo",
    population: 126476461,
    flag: "🇯🇵",
    continent: "Asia",
    officialLanguage: "Japanese",
    currency: "JPY",
    area: 377975, // km²
  },
];

const printCountries = (countries) => {
  const main = document.querySelector("main");
  main.innerHTML = "";
  for (const country of countries) {
    main.innerHTML += `

        <div>
            <h2>${country.flag} - ${country.name}</h2>
            <h3>${country.capital}</h3>
            <h4>${country.continent}</h4>
        </div>
        `;
  }
};

document.querySelector("#brazil_btn").addEventListener("click", () => {
  countries.push({
    name: "Brazil",
    capital: "Brasília",
    population: 211000000,
    flag: "🇧🇷",
    continent: "South America",
    officialLanguage: "Portuguese",
    currency: "BRL",
    area: 8515767, // km²
  });
  localStorage.setItem("countries", JSON.stringify(countries));
  printCountries(countries);
});

document.addEventListener("DOMContentLoaded", () => {
  if(localStorage.getItem("countries")){
    const storageCountries = JSON.parse(localStorage.getItem("countries"));
    printCountries(storageCountries)
  } else{
    printCountries(countries)
  }
});

const lolChampions = [
  {
    name: "Ahri",
    race: "Vastaya",
    attackLevel: 6,
    class: "Mage",
    role: "Mid",
  },
  {
    name: "Yasuo",
    race: "Human",
    attackLevel: 9,
    class: "Assassin",
    role: "Mid",
  },
  {
    name: "Garen",
    race: "Human",
    attackLevel: 8,
    class: "Fighter",
    role: "Top",
  },
  {
    name: "Teemo",
    race: "Yordle",
    attackLevel: 5,
    class: "Marksman",
    role: "Top",
  },
  {
    name: "Lux",
    race: "Human",
    attackLevel: 7,
    class: "Mage",
    role: "Mid",
  },
  {
    name: "Darius",
    race: "Human",
    attackLevel: 8,
    class: "Fighter",
    role: "Top",
  },
  {
    name: "Jinx",
    race: "Human",
    attackLevel: 7,
    class: "Marksman",
    role: "ADC",
  },
];

/* let humans = [];

for (const champion of lolChampions) {
  if(champion.race === "Human"){
    humans.push(champion);
  }
}

console.log(humans) */

const humans = lolChampions.filter((champion) => champion.race === "Human");
const humansTop = lolChampions.filter(
  (champion) => champion.race === "Human" && champion.attackLevel >= 8
);
console.log(humansTop);

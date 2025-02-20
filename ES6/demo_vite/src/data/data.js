const pokemons = [
  {
    number: 1,
    name: "Bulbasaur",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    type: ["grass", "poison"],
    weight: 69,
    height: 7,
    moves: ["tackle", "vine whip"],
    base_experience: 64
  },
  {
    number: 2,
    name: "Ivysaur",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    type: ["grass", "poison"],
    weight: 130,
    height: 10,
    moves: ["tackle", "razor leaf"],
    base_experience: 142
  },
  {
    number: 3,
    name: "Venusaur",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    type: ["grass", "poison"],
    weight: 1000,
    height: 20,
    moves: ["tackle", "solar beam"],
    base_experience: 236
  },
  {
    number: 4,
    name: "Charmander",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    type: ["fire"],
    weight: 85,
    height: 6,
    moves: ["scratch", "ember"],
    base_experience: 62
  },
  {
    number: 5,
    name: "Charmeleon",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    type: ["fire"],
    weight: 190,
    height: 11,
    moves: ["scratch", "flamethrower"],
    base_experience: 142
  },
  {
    number: 6,
    name: "Charizard",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    type: ["fire", "flying"],
    weight: 905,
    height: 17,
    moves: ["wing attack", "flamethrower"],
    base_experience: 240
  },
  {
    number: 7,
    name: "Squirtle",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    type: ["water"],
    weight: 90,
    height: 5,
    moves: ["tackle", "water gun"],
    base_experience: 63
  },
  {
    number: 8,
    name: "Wartortle",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    type: ["water"],
    weight: 225,
    height: 10,
    moves: ["tackle", "bubble"],
    base_experience: 142
  },
  {
    number: 9,
    name: "Blastoise",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    type: ["water"],
    weight: 855,
    height: 16,
    moves: ["bite", "hydro pump"],
    base_experience: 239
  },
  {
    number: 10,
    name: "Caterpie",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    type: ["bug"],
    weight: 29,
    height: 3,
    moves: ["tackle", "string shot"],
    base_experience: 39
  },
  {
    number: 11,
    name: "Metapod",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    type: ["bug"],
    weight: 99,
    height: 3,
    moves: ["harden", "tackle"],
    base_experience: 72
  },
  {
    number: 12,
    name: "Butterfree",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    type: ["bug", "flying"],
    weight: 320,
    height: 11,
    moves: ["gust", "silver wind"],
    base_experience: 178
  },
  {
    number: 13,
    name: "Weedle",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    type: ["bug", "poison"],
    weight: 32,
    height: 3,
    moves: ["poison sting", "tackle"],
    base_experience: 39
  },
  {
    number: 14,
    name: "Kakuna",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
    type: ["bug", "poison"],
    weight: 100,
    height: 3,
    moves: ["harden", "tackle"],
    base_experience: 72
  },
  {
    number: 15,
    name: "Beedrill",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    type: ["bug", "poison"],
    weight: 295,
    height: 10,
    moves: ["twineedle", "pin missile"],
    base_experience: 173
  },
  {
    number: 16,
    name: "Pidgey",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
    type: ["normal", "flying"],
    weight: 18,
    height: 3,
    moves: ["tackle", "gust"],
    base_experience: 50
  },
  {
    number: 17,
    name: "Pidgeotto",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
    type: ["normal", "flying"],
    weight: 300,
    height: 11,
    moves: ["wing attack", "quick attack"],
    base_experience: 122
  },
  {
    number: 18,
    name: "Pidgeot",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
    type: ["normal", "flying"],
    weight: 395,
    height: 15,
    moves: ["wing attack", "gust"],
    base_experience: 216
  },
  {
    number: 19,
    name: "Rattata",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    type: ["normal"],
    weight: 35,
    height: 3,
    moves: ["tackle", "bite"],
    base_experience: 51
  },
  {
    number: 20,
    name: "Raticate",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
    type: ["normal"],
    weight: 185,
    height: 7,
    moves: ["tackle", "hyper fang"],
    base_experience: 145
  },
  {
    number: 21,
    name: "Spearow",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
    type: ["normal", "flying"],
    weight: 20,
    height: 3,
    moves: ["peck", "growl"],
    base_experience: 52
  },
  {
    number: 22,
    name: "Fearow",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
    type: ["normal", "flying"],
    weight: 380,
    height: 12,
    moves: ["drill peck", "agility"],
    base_experience: 155
  },
  {
    number: 23,
    name: "Ekans",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
    type: ["poison"],
    weight: 69,
    height: 20,
    moves: ["bite", "poison sting"],
    base_experience: 58
  },
  {
    number: 24,
    name: "Arbok",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
    type: ["poison"],
    weight: 650,
    height: 35,
    moves: ["bite", "glare"],
    base_experience: 153
  },
  {
    number: 25,
    name: "Pikachu",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    type: ["electric"],
    weight: 60,
    height: 4,
    moves: ["thunder shock", "quick attack"],
    base_experience: 112
  },
  {
    number: 26,
    name: "Raichu",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
    type: ["electric"],
    weight: 300,
    height: 8,
    moves: ["thunder punch", "thunderbolt"],
    base_experience: 218
  },
  {
    number: 27,
    name: "Sandshrew",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
    type: ["ground"],
    weight: 120,
    height: 6,
    moves: ["scratch", "sand attack"],
    base_experience: 60
  },
  {
    number: 28,
    name: "Sandslash",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
    type: ["ground"],
    weight: 295,
    height: 10,
    moves: ["scratch", "slash"],
    base_experience: 158
  },
  {
    number: 29,
    name: "Nidoran♀",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
    type: ["poison"],
    weight: 70,
    height: 4,
    moves: ["scratch", "double kick"],
    base_experience: 55
  },
  {
    number: 30,
    name: "Nidorina",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
    type: ["poison"],
    weight: 200,
    height: 7,
    moves: ["bite", "double kick"],
    base_experience: 128
  },
  {
    number: 31,
    name: "Nidoqueen",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
    type: ["poison", "ground"],
    weight: 600,
    height: 13,
    moves: ["bite", "earth power"],
    base_experience: 227
  },
  {
    number: 32,
    name: "Nidoran♂",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
    type: ["poison"],
    weight: 90,
    height: 5,
    moves: ["peck", "horn attack"],
    base_experience: 55
  },
  {
    number: 33,
    name: "Nidorino",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
    type: ["poison"],
    weight: 195,
    height: 9,
    moves: ["horn attack", "bite"],
    base_experience: 128
  },
  {
    number: 34,
    name: "Nidoking",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
    type: ["poison", "ground"],
    weight: 620,
    height: 14,
    moves: ["horn attack", "earthquake"],
    base_experience: 227
  },
  {
    number: 35,
    name: "Clefairy",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    type: ["fairy"],
    weight: 75,
    height: 6,
    moves: ["pound", "double slap"],
    base_experience: 68
  },
  {
    number: 36,
    name: "Clefable",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
    type: ["fairy"],
    weight: 400,
    height: 13,
    moves: ["pound", "moonblast"],
    base_experience: 217
  },
  {
    number: 37,
    name: "Vulpix",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
    type: ["fire"],
    weight: 99,
    height: 6,
    moves: ["ember", "tail whip"],
    base_experience: 60
  },
  {
    number: 38,
    name: "Ninetales",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
    type: ["fire"],
    weight: 199,
    height: 11,
    moves: ["fire spin", "flamethrower"],
    base_experience: 177
  },
  {
    number: 39,
    name: "Jigglypuff",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    type: ["normal", "fairy"],
    weight: 55,
    height: 5,
    moves: ["sing", "pound"],
    base_experience: 95
  },
  {
    number: 40,
    name: "Wigglytuff",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
    type: ["normal", "fairy"],
    weight: 120,
    height: 10,
    moves: ["sing", "body slam"],
    base_experience: 218
  },
  {
    number: 41,
    name: "Zubat",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
    type: ["poison", "flying"],
    weight: 75,
    height: 8,
    moves: ["bite", "wing attack"],
    base_experience: 49
  },
  {
    number: 42,
    name: "Golbat",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
    type: ["poison", "flying"],
    weight: 550,
    height: 16,
    moves: ["bite", "wing attack"],
    base_experience: 159
  },
  {
    number: 43,
    name: "Oddish",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
    type: ["grass", "poison"],
    weight: 54,
    height: 5,
    moves: ["absorb", "acid"],
    base_experience: 64
  },
  {
    number: 44,
    name: "Gloom",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
    type: ["grass", "poison"],
    weight: 86,
    height: 8,
    moves: ["absorb", "acid"],
    base_experience: 138
  },
  {
    number: 45,
    name: "Vileplume",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
    type: ["grass", "poison"],
    weight: 100,
    height: 12,
    moves: ["mega drain", "petal dance"],
    base_experience: 221
  },
  {
    number: 46,
    name: "Paras",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
    type: ["bug", "grass"],
    weight: 54,
    height: 3,
    moves: ["scratch", "leech life"],
    base_experience: 57
  },
  {
    number: 47,
    name: "Parasect",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
    type: ["bug", "grass"],
    weight: 295,
    height: 10,
    moves: ["scratch", "slash"],
    base_experience: 142
  },
  {
    number: 48,
    name: "Venonat",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
    type: ["bug", "poison"],
    weight: 285,
    height: 10,
    moves: ["tackle", "supersonic"],
    base_experience: 61
  },
  {
    number: 49,
    name: "Venomoth",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
    type: ["bug", "poison"],
    weight: 125,
    height: 15,
    moves: ["bug bite", "poison powder"],
    base_experience: 158
  },
  {
    number: 50,
    name: "Diglett",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
    type: ["ground"],
    weight: 8,
    height: 2,
    moves: ["scratch", "dig"],
    base_experience: 53
  },
  {
    number: 51,
    name: "Dugtrio",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
    type: ["ground"],
    weight: 333,
    height: 7,
    moves: ["dig", "mud sport"],
    base_experience: 149
  },
  {
    number: 52,
    name: "Meowth",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
    type: ["normal"],
    weight: 42,
    height: 4,
    moves: ["scratch", "bite"],
    base_experience: 58
  },
  {
    number: 53,
    name: "Persian",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
    type: ["normal"],
    weight: 320,
    height: 10,
    moves: ["scratch", "feint attack"],
    base_experience: 154
  },
  {
    number: 54,
    name: "Psyduck",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
    type: ["water"],
    weight: 196,
    height: 8,
    moves: ["water gun", "confusion"],
    base_experience: 64
  },
  {
    number: 55,
    name: "Golduck",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
    type: ["water"],
    weight: 766,
    height: 17,
    moves: ["water gun", "psychic"],
    base_experience: 175
  },
  {
    number: 56,
    name: "Mankey",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
    type: ["fighting"],
    weight: 280,
    height: 5,
    moves: ["scratch", "karate chop"],
    base_experience: 61
  },
  {
    number: 57,
    name: "Primeape",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
    type: ["fighting"],
    weight: 320,
    height: 10,
    moves: ["low kick", "cross chop"],
    base_experience: 159
  },
  {
    number: 58,
    name: "Growlithe",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
    type: ["fire"],
    weight: 190,
    height: 7,
    moves: ["bite", "roar"],
    base_experience: 70
  },
  {
    number: 59,
    name: "Arcanine",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
    type: ["fire"],
    weight: 1550,
    height: 19,
    moves: ["bite", "extreme speed"],
    base_experience: 194
  },
  {
    number: 60,
    name: "Poliwag",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
    type: ["water"],
    weight: 124,
    height: 6,
    moves: ["bubble", "water gun"],
    base_experience: 60
  },
  {
    number: 61,
    name: "Poliwhirl",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
    type: ["water"],
    weight: 200,
    height: 10,
    moves: ["bubble", "hypnosis"],
    base_experience: 135
  },
  {
    number: 62,
    name: "Poliwrath",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
    type: ["water", "fighting"],
    weight: 540,
    height: 13,
    moves: ["submission", "water gun"],
    base_experience: 230
  },
  {
    number: 63,
    name: "Abra",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
    type: ["psychic"],
    weight: 195,
    height: 9,
    moves: ["teleport", "confusion"],
    base_experience: 62
  },
  {
    number: 64,
    name: "Kadabra",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
    type: ["psychic"],
    weight: 565,
    height: 13,
    moves: ["confusion", "psybeam"],
    base_experience: 140
  },
  {
    number: 65,
    name: "Alakazam",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
    type: ["psychic"],
    weight: 480,
    height: 15,
    moves: ["confusion", "psychic"],
    base_experience: 225
  },
  {
    number: 66,
    name: "Machop",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
    type: ["fighting"],
    weight: 195,
    height: 8,
    moves: ["low kick", "karate chop"],
    base_experience: 61
  },
  {
    number: 67,
    name: "Machoke",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
    type: ["fighting"],
    weight: 705,
    height: 15,
    moves: ["low kick", "seismic toss"],
    base_experience: 142
  },
  {
    number: 68,
    name: "Machamp",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
    type: ["fighting"],
    weight: 1300,
    height: 16,
    moves: ["karate chop", "cross chop"],
    base_experience: 227
  },
  {
    number: 69,
    name: "Bellsprout",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
    type: ["grass", "poison"],
    weight: 40,
    height: 7,
    moves: ["vine whip", "growth"],
    base_experience: 60
  },
  {
    number: 70,
    name: "Weepinbell",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
    type: ["grass", "poison"],
    weight: 64,
    height: 10,
    moves: ["acid", "razor leaf"],
    base_experience: 137
  },
  {
    number: 71,
    name: "Victreebel",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
    type: ["grass", "poison"],
    weight: 155,
    height: 17,
    moves: ["acid", "solar beam"],
    base_experience: 221
  },
  {
    number: 72,
    name: "Tentacool",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
    type: ["water", "poison"],
    weight: 455,
    height: 9,
    moves: ["bubble", "acid"],
    base_experience: 67
  },
  {
    number: 73,
    name: "Tentacruel",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
    type: ["water", "poison"],
    weight: 550,
    height: 16,
    moves: ["bubble", "hydro pump"],
    base_experience: 180
  },
  {
    number: 74,
    name: "Geodude",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
    type: ["rock", "ground"],
    weight: 200,
    height: 4,
    moves: ["tackle", "rock throw"],
    base_experience: 60
  },
  {
    number: 75,
    name: "Graveler",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
    type: ["rock", "ground"],
    weight: 1050,
    height: 10,
    moves: ["rock throw", "rollout"],
    base_experience: 137
  },
  {
    number: 76,
    name: "Golem",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
    type: ["rock", "ground"],
    weight: 3000,
    height: 14,
    moves: ["rock throw", "earthquake"],
    base_experience: 223
  },
  {
    number: 77,
    name: "Ponyta",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
    type: ["fire"],
    weight: 300,
    height: 10,
    moves: ["ember", "tackle"],
    base_experience: 82
  },
  {
    number: 78,
    name: "Rapidash",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
    type: ["fire"],
    weight: 950,
    height: 17,
    moves: ["ember", "stomp"],
    base_experience: 175
  },
  {
    number: 79,
    name: "Slowpoke",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
    type: ["water", "psychic"],
    weight: 360,
    height: 12,
    moves: ["confusion", "amnesia"],
    base_experience: 66
  },
  {
    number: 80,
    name: "Slowbro",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
    type: ["water", "psychic"],
    weight: 785,
    height: 17,
    moves: ["water gun", "psychic"],
    base_experience: 172
  },
  {
    number: 81,
    name: "Magnemite",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
    type: ["electric", "steel"],
    weight: 60,
    height: 3,
    moves: ["thundershock", "spark"],
    base_experience: 65
  },
  {
    number: 82,
    name: "Magneton",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
    type: ["electric", "steel"],
    weight: 600,
    height: 10,
    moves: ["thundershock", "thunderbolt"],
    base_experience: 163
  },
  {
    number: 83,
    name: "Farfetch'd",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
    type: ["normal", "flying"],
    weight: 280,
    height: 8,
    moves: ["peck", "slash"],
    base_experience: 132
  },
  {
    number: 84,
    name: "Doduo",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
    type: ["normal", "flying"],
    weight: 392,
    height: 14,
    moves: ["peck", "fury attack"],
    base_experience: 70
  },
  {
    number: 85,
    name: "Dodrio",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
    type: ["normal", "flying"],
    weight: 852,
    height: 18,
    moves: ["peck", "quick attack"],
    base_experience: 175
  },
  {
    number: 86,
    name: "Seel",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
    type: ["water"],
    weight: 900,
    height: 11,
    moves: ["headbutt", "icy wind"],
    base_experience: 65
  },
  {
    number: 87,
    name: "Dewgong",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
    type: ["water", "ice"],
    weight: 1200,
    height: 17,
    moves: ["water gun", "ice beam"],
    base_experience: 166
  },
  {
    number: 88,
    name: "Grimer",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
    type: ["poison"],
    weight: 300,
    height: 9,
    moves: ["acid", "sludge"],
    base_experience: 65
  },
  {
    number: 89,
    name: "Muk",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
    type: ["poison"],
    weight: 300,
    height: 12,
    moves: ["acid", "sludge bomb"],
    base_experience: 175
  },
  {
    number: 90,
    name: "Shellder",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
    type: ["water"],
    weight: 40,
    height: 3,
    moves: ["tackle", "withdraw"],
    base_experience: 61
  },
  {
    number: 91,
    name: "Cloyster",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
    type: ["water", "ice"],
    weight: 1325,
    height: 15,
    moves: ["icicle spear", "spike cannon"],
    base_experience: 184
  },
  {
    number: 92,
    name: "Gastly",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
    type: ["ghost", "poison"],
    weight: 1,
    height: 13,
    moves: ["lick", "astonish"],
    base_experience: 62
  },
  {
    number: 93,
    name: "Haunter",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
    type: ["ghost", "poison"],
    weight: 1,
    height: 16,
    moves: ["lick", "confuse ray"],
    base_experience: 142
  },
  {
    number: 94,
    name: "Gengar",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    type: ["ghost", "poison"],
    weight: 405,
    height: 15,
    moves: ["shadow punch", "dark pulse"],
    base_experience: 225
  },
  {
    number: 95,
    name: "Onix",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
    type: ["rock", "ground"],
    weight: 2100,
    height: 88,
    moves: ["tackle", "rock throw"],
    base_experience: 77
  },
  {
    number: 96,
    name: "Drowzee",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
    type: ["psychic"],
    weight: 324,
    height: 10,
    moves: ["hypnosis", "psybeam"],
    base_experience: 66
  },
  {
    number: 97,
    name: "Hypno",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
    type: ["psychic"],
    weight: 756,
    height: 16,
    moves: ["confusion", "psychic"],
    base_experience: 169
  },
  {
    number: 98,
    name: "Krabby",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
    type: ["water"],
    weight: 65,
    height: 4,
    moves: ["bubble", "vice grip"],
    base_experience: 65
  },
  {
    number: 99,
    name: "Kingler",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
    type: ["water"],
    weight: 600,
    height: 13,
    moves: ["bubble", "crabhammer"],
    base_experience: 166
  },
  {
    number: 100,
    name: "Voltorb",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
    type: ["electric"],
    weight: 104,
    height: 5,
    moves: ["tackle", "charge"],
    base_experience: 66
  },
  {
    number: 101,
    name: "Electrode",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
    type: ["electric"],
    weight: 666,
    height: 12,
    moves: ["tackle", "swift"],
    base_experience: 168
  },
  {
    number: 102,
    name: "Exeggcute",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
    type: ["grass", "psychic"],
    weight: 25,
    height: 4,
    moves: ["confusion", "barrage"],
    base_experience: 65
  },
  {
    number: 103,
    name: "Exeggutor",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
    type: ["grass", "psychic"],
    weight: 1200,
    height: 20,
    moves: ["psychic", "solar beam"],
    base_experience: 186
  },
  {
    number: 104,
    name: "Cubone",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
    type: ["ground"],
    weight: 65,
    height: 4,
    moves: ["bone club", "headbutt"],
    base_experience: 65
  },
  {
    number: 105,
    name: "Marowak",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
    type: ["ground"],
    weight: 450,
    height: 10,
    moves: ["bone club", "earthquake"],
    base_experience: 149
  },
  {
    number: 106,
    name: "Hitmonlee",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
    type: ["fighting"],
    weight: 498,
    height: 15,
    moves: ["high jump kick", "blaze kick"],
    base_experience: 172
  },
  {
    number: 107,
    name: "Hitmonchan",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
    type: ["fighting"],
    weight: 502,
    height: 14,
    moves: ["punch", "fire punch"],
    base_experience: 159
  },
  {
    number: 108,
    name: "Lickitung",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
    type: ["normal"],
    weight: 655,
    height: 12,
    moves: ["lick", "stomp"],
    base_experience: 77
  },
  {
    number: 109,
    name: "Koffing",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
    type: ["poison"],
    weight: 10,
    height: 3,
    moves: ["smog", "tackle"],
    base_experience: 68
  },
  {
    number: 110,
    name: "Weezing",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
    type: ["poison"],
    weight: 95,
    height: 6,
    moves: ["smog", "tackle"],
    base_experience: 172
  },
  {
    number: 111,
    name: "Rhyhorn",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
    type: ["ground", "rock"],
    weight: 1150,
    height: 10,
    moves: ["horn attack", "stomp"],
    base_experience: 69
  },
  {
    number: 112,
    name: "Rhydon",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
    type: ["ground", "rock"],
    weight: 1200,
    height: 19,
    moves: ["horn attack", "earthquake"],
    base_experience: 170
  },
  {
    number: 113,
    name: "Chansey",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
    type: ["normal"],
    weight: 346,
    height: 11,
    moves: ["pound", "soft-boiled"],
    base_experience: 395
  },
  {
    number: 114,
    name: "Tangela",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
    type: ["grass"],
    weight: 350,
    height: 10,
    moves: ["absorb", "mega drain"],
    base_experience: 87
  },
  {
    number: 115,
    name: "Kangaskhan",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
    type: ["normal"],
    weight: 800,
    height: 22,
    moves: ["tackle", "bite"],
    base_experience: 172
  },
  {
    number: 116,
    name: "Horsea",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
    type: ["water"],
    weight: 80,
    height: 4,
    moves: ["bubble", "smokescreen"],
    base_experience: 59
  },
  {
    number: 117,
    name: "Seadra",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
    type: ["water"],
    weight: 250,
    height: 12,
    moves: ["water gun", "dragon breath"],
    base_experience: 154
  },
  {
    number: 118,
    name: "Goldeen",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
    type: ["water"],
    weight: 150,
    height: 6,
    moves: ["horn attack", "water gun"],
    base_experience: 64
  },
  {
    number: 119,
    name: "Seaking",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
    type: ["water"],
    weight: 390,
    height: 13,
    moves: ["horn attack", "aqua jet"],
    base_experience: 158
  },
  {
    number: 120,
    name: "Staryu",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
    type: ["water"],
    weight: 345,
    height: 8,
    moves: ["tackle", "swift"],
    base_experience: 68
  },
  {
    number: 121,
    name: "Starmie",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
    type: ["water", "psychic"],
    weight: 800,
    height: 11,
    moves: ["bubble beam", "psychic"],
    base_experience: 182
  },
  {
    number: 122,
    name: "Mr. Mime",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
    type: ["psychic", "fairy"],
    weight: 545,
    height: 13,
    moves: ["confusion", "mimic"],
    base_experience: 161
  },
  {
    number: 123,
    name: "Scyther",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
    type: ["bug", "flying"],
    weight: 560,
    height: 15,
    moves: ["quick attack", "wing attack"],
    base_experience: 100
  },
  {
    number: 124,
    name: "Jynx",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
    type: ["ice", "psychic"],
    weight: 406,
    height: 14,
    moves: ["lovely kiss", "psywave"],
    base_experience: 159
  },
  {
    number: 125,
    name: "Electabuzz",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
    type: ["electric"],
    weight: 300,
    height: 11,
    moves: ["thundershock", "thunder punch"],
    base_experience: 172
  },
  {
    number: 126,
    name: "Magmar",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
    type: ["fire"],
    weight: 445,
    height: 12,
    moves: ["ember", "fire punch"],
    base_experience: 173
  },
  {
    number: 127,
    name: "Pinsir",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
    type: ["bug"],
    weight: 550,
    height: 15,
    moves: ["vice grip", "x-scissor"],
    base_experience: 175
  },
  {
    number: 128,
    name: "Tauros",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
    type: ["normal"],
    weight: 884,
    height: 14,
    moves: ["tackle", "horn attack"],
    base_experience: 172
  },
  {
    number: 129,
    name: "Magikarp",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
    type: ["water"],
    weight: 100,
    height: 9,
    moves: ["splash", "tackle"],
    base_experience: 40
  },
  {
    number: 130,
    name: "Gyarados",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
    type: ["water", "flying"],
    weight: 2350,
    height: 65,
    moves: ["dragon rage", "hydro pump"],
    base_experience: 189
  },
  {
    number: 131,
    name: "Lapras",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
    type: ["water", "ice"],
    weight: 2200,
    height: 25,
    moves: ["water gun", "ice beam"],
    base_experience: 187
  },
  {
    number: 132,
    name: "Ditto",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    type: ["normal"],
    weight: 40,
    height: 3,
    moves: ["transform", "tackle"],
    base_experience: 101
  },
  {
    number: 133,
    name: "Eevee",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
    type: ["normal"],
    weight: 65,
    height: 3,
    moves: ["tackle", "quick attack"],
    base_experience: 65
  },
  {
    number: 134,
    name: "Vaporeon",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
    type: ["water"],
    weight: 290,
    height: 10,
    moves: ["water gun", "acid armor"],
    base_experience: 184
  },
  {
    number: 135,
    name: "Jolteon",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
    type: ["electric"],
    weight: 245,
    height: 8,
    moves: ["thundershock", "thunderbolt"],
    base_experience: 184
  },
  {
    number: 136,
    name: "Flareon",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
    type: ["fire"],
    weight: 250,
    height: 9,
    moves: ["ember", "fire fang"],
    base_experience: 184
  },
  {
    number: 137,
    name: "Porygon",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
    type: ["normal"],
    weight: 365,
    height: 8,
    moves: ["tackle", "conversion"],
    base_experience: 79
  },
  {
    number: 138,
    name: "Omanyte",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
    type: ["rock", "water"],
    weight: 75,
    height: 4,
    moves: ["constrict", "water gun"],
    base_experience: 71
  },
  {
    number: 139,
    name: "Omastar",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
    type: ["rock", "water"],
    weight: 350,
    height: 10,
    moves: ["rock throw", "hydro pump"],
    base_experience: 173
  },
  {
    number: 140,
    name: "Kabuto",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
    type: ["rock", "water"],
    weight: 115,
    height: 5,
    moves: ["scratch", "mud shot"],
    base_experience: 71
  },
  {
    number: 141,
    name: "Kabutops",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
    type: ["rock", "water"],
    weight: 405,
    height: 13,
    moves: ["slash", "swords dance"],
    base_experience: 173
  },
  {
    number: 142,
    name: "Aerodactyl",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
    type: ["rock", "flying"],
    weight: 590,
    height: 18,
    moves: ["bite", "wing attack"],
    base_experience: 180
  },
  {
    number: 143,
    name: "Snorlax",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
    type: ["normal"],
    weight: 4600,
    height: 21,
    moves: ["tackle", "body slam"],
    base_experience: 189
  },
  {
    number: 144,
    name: "Articuno",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
    type: ["ice", "flying"],
    weight: 554,
    height: 17,
    moves: ["ice beam", "blizzard"],
    base_experience: 261
  },
  {
    number: 145,
    name: "Zapdos",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
    type: ["electric", "flying"],
    weight: 526,
    height: 16,
    moves: ["thunderbolt", "drill peck"],
    base_experience: 261
  },
  {
    number: 146,
    name: "Moltres",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
    type: ["fire", "flying"],
    weight: 600,
    height: 20,
    moves: ["fire blast", "wing attack"],
    base_experience: 261
  },
  {
    number: 147,
    name: "Dratini",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
    type: ["dragon"],
    weight: 33,
    height: 18,
    moves: ["wrap", "dragon rage"],
    base_experience: 60
  },
  {
    number: 148,
    name: "Dragonair",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
    type: ["dragon"],
    weight: 165,
    height: 40,
    moves: ["wrap", "dragon breath"],
    base_experience: 147
  },
  {
    number: 149,
    name: "Dragonite",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
    type: ["dragon", "flying"],
    weight: 2100,
    height: 22,
    moves: ["dragon rush", "wing attack"],
    base_experience: 270
  },
  {
    number: 150,
    name: "Mewtwo",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    type: ["psychic"],
    weight: 1220,
    height: 20,
    moves: ["psystrike", "confusion"],
    base_experience: 306
  }
];

const typeIcons = {
  normal: "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/normal.svg",
  fire: "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/fire.svg",
  water: "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/water.svg",
  electric: "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/electric.svg",
  grass: "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/grass.svg",
  ice: "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/ice.svg",
  fighting: "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/fighting.svg",
  poison: "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/poison.svg",
  ground: "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/ground.svg",
  flying: "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/flying.svg",
  psychic: "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/psychic.svg",
  bug: "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/bug.svg",
  rock: "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/rock.svg",
  ghost: "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/ghost.svg",
  dragon: "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/dragon.svg",
  dark: "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/dark.svg",
  steel: "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/steel.svg",
  fairy: "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/fairy.svg"
};

export {pokemons, typeIcons}
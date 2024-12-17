/* Dada una lista de artistas con sus influencias, utiliza bucles anidados para listar todos los artistas y sus influencias directas e imprime cada par por consola. */

const artists = [
  { name: "Kurt Cobain", influences: ["The Beatles", "Pixies", "Lead Belly"] },
  {
    name: "David Bowie",
    influences: ["Little Richard", "Chuck Berry", "The Velvet Underground"],
  },
  {
    name: "Eddie Vedder",
    influences: ["The Who", "Neil Young", "Jim Morrison"],
  },
  {
    name: "Freddie Mercury",
    influences: ["Liza Minnelli", "Jimi Hendrix", "Aretha Franklin"],
  },
  {
    name: "John Lennon",
    influences: ["Elvis Presley", "Chuck Berry", "Buddy Holly"],
  },
];

// Añade tu código de bucle aquí
for (const artist of artists) {
  const name = artist.name;
  console.log(name);
  for (const influence of artist.influences) {
    console.log(influence);
  }
}

for (let i = 0; i < artists.length; i++) {
  const artist = artists[i];
  const name = artist.name;
  console.log(name);
  for (let j = 0; j < artist.influences.length; j++) {
    const influence = artist.influences[j];
    console.log(influence);
  }
}

const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmExZDQ2YzM0YjA5NWY3ZDRmOTMwNzYzMGQ4YzM1NSIsIm5iZiI6MTczMDg4NzMwNC41OTEsInN1YiI6IjY3MmIzZTg4ZDBjMDcyYWQ0OGY1NDkxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._oahzh8ccEYb4Uy1n7y7R4hStiEMWpbFV1JwwbyhA9U",
  },
};

const getMovies = async () => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data.results;
};

export default getMovies;

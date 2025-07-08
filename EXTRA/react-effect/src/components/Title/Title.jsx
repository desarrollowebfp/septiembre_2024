import { useEffect, useState } from "react";
import "./Title.css";

const Title = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((res) => res.json())
      .then((res) => {
        setCharacters(res.results);
        setLoaded(true);
      });
  }, [page]);

  return (
    <div>
      {loaded ? (
        <>
          <button onClick={() => setPage(page + 1)}>Next</button>
          <button onClick={() => setPage(page - 1)}>Back</button>
          <ul>
            {characters.map((char) => (
              <li key={char.id}>
                <h3>{char.name}</h3>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Title;

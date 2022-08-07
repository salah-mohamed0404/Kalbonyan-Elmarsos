import { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMoviesHandler = async function () {
    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json();

    const transformedMovies = data.results.map(MovieData => {
      return {
        id: MovieData.episode_id,
        title: MovieData.title,
        openingText: MovieData.opening_crawl,
        releaseDate: MovieData.release_date,
      };
    });

    setMovies(transformedMovies);
  };
}

return (
  <>
    <section>
      <button onClick={fetchMoviesHandler}>Fetch Movies</button>
    </section>
    <section>
      <MoviesList movies={movies} />
    </section>
  </>
);

export default App;

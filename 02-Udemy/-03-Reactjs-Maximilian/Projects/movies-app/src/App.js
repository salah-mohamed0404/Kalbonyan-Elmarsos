import { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async function () {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) throw new Error("Something went wrong");
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
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(
    function () {
      fetchMoviesHandler();
    },
    [fetchMoviesHandler]
  );

  const addMovieHandler = function (movie) {
    console.log(movie);
  };

  let content = <p>Found no movies.</p>;
  if (movies.length > 0) content = <MoviesList movies={movies} />;
  if (error) content = <p>{error}</p>;
  if (isLoading) content = <p>Loading...</p>;

  return (
    <>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </>
  );
}

export default App;

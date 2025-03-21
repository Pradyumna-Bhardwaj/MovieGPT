import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import { addTopIndianMovies } from "../utils/movieSlice";

const SecondaryContainer = () => {
  const mostPopularMovies = useSelector(
    (store) => store.movies?.mostPopularMovies
  );
  const top250Movies = useSelector(
    (store) => store.movies?.top250Movies
  );
  const topIndianMovies = useSelector(
    (store) => store.movies?.topIndianMovies
  );
  if (!mostPopularMovies) return;
  return (
    <div className="py-2 bg-gradient-to-r from-gray-900 to-gray-500 p-4">
      <MovieList title="Most Popular Movies" movies={mostPopularMovies} />
      <MovieList title="All Time Top Rated Movies" movies={top250Movies} />
      <MovieList title="Top Rated Indian Movies" movies={topIndianMovies} />
    </div>
  );
};

export default SecondaryContainer;

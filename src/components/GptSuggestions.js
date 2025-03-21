import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const GptSuggestions = () => {
  const gptMovies = useSelector((store) => store.gpt?.gptMovies);
  const imdbMovies = useSelector((store) => store.gpt?.imdbMovies);
  if (!gptMovies) return;
  if (!imdbMovies) return;
  return (
    <div className="bg-black/70 text-white isolate p-4 -mt-40">
      {gptMovies.map((movie, index) => {
        return <MovieList
          title={movie}
          movies={imdbMovies[index].results}
        />;
      })}
    </div>
  );
};

export default GptSuggestions;

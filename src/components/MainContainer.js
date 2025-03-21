import React from "react";
import VideoBG from "./VideoBG";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.mostPopularMovies)
    if(!movies) return;
    const mainMovie = movies[0];
    console.log(mainMovie);

  return (
    <div className="flex w-full bg-gradient-to-r from-gray-900 to-gray-500 p-4">
  <div className="w-3/4">
    <VideoTitle mainMovie={mainMovie} />
  </div>
  <div className="w-1/4">
    <VideoBG bg_img={mainMovie?.primaryImage} />
  </div>
</div>
  );
};

export default MainContainer;

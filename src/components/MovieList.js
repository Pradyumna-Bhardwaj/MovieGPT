import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import MovieCard from "./MovieCard";

const MovieList = (props) => {
  return (
    // <div className="pt-4">
    //   <h2 className="text-white text-2xl font-bold bg-black/50 p-4 border-b-2 border-red-600">{props.title}</h2>
    //   <div className="flex overflow-x-scroll overflow-ellipsis">
    //     {props.movies.map((movie) => (
    //       <MovieCard
    //         key={movie.id}
    //         title={movie.primaryTitle}
    //         img={movie.primaryImage}
    //       />
    //     ))}
    //   </div>
    // </div>
    <div className="pt-4">
      <h2 className="text-white text-2xl font-bold bg-black/50 p-4 border-b-2 border-red-600">
        {props.title}
      </h2>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        autoPlay={true}
        interval={3000}
        transitionTime={500}
        showStatus={false}
        showIndicators={false}
        centerMode={true} // Enables multiple items to be visible
        centerSlidePercentage={14.28} // 7 items at a time (100% / 7 = 14.28%)
        useTransform={false}
        renderArrowPrev={(onClickHandler, hasPrev) => (
          <button
            onClick={onClickHandler}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 py-30 text-5xl text-white z-10 hover:bg-gray-950/70"
          >
            ‹
          </button>
           )}
           renderArrowNext={(onClickHandler, hasNext) => (
             <button
               onClick={onClickHandler}
               className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 py-30 text-5xl text-white z-10 hover:bg-gray-950/70"
             >
               ›
             </button>
           )}
      >
        {props.movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie?.primaryTitle}
            img={movie?.primaryImage}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieList;

import React from "react";

const MovieCard = (props) => {
  if(!props.img) return null;
  return (
    <div className="p-2 pt-3">
      <img className="w-40 h-60" src={props.img} />
      <h3 className="w-40 text-white text-m font-bold">{props.title}</h3>
    </div>
  );
};

export default MovieCard;

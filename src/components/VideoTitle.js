import React from "react";

const VideoTitle = (props) => {
  return (
    <div className="absolute top-1/4 left-10 max-w-2xl">
      <h1 className="text-5xl font-extrabold text-white drop-shadow-md">
        {props.mainMovie?.primaryTitle}
      </h1>
      <p className="mt-4 text-lg text-white opacity-80 drop-shadow">
        {props.mainMovie?.description}
      </p>
      <button className="bg-gray-100 p-2 mt-8 rounded-lg cursor-pointer hover:opacity-80 text-black">ℹ️ More Info</button>
    </div>
  );
};

export default VideoTitle;

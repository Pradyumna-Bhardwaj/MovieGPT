import React, { useRef } from "react";
import openai from "../utils/openai";
import { useDispatch } from "react-redux";
import { addGptMovies } from "../utils/gptSlice";
import { API_OPTIONS } from "../utils/constants";
import GptSuggestions from "./GptSuggestions";

const GptSearchPage = () => {
  const userQuery = useRef();
  dispatch = useDispatch()
  const searchImdbMovies = async (movie) => {
    const url =
      "https://imdb236.p.rapidapi.com/imdb/search?originalTitle="+movie+"&type=movie&rows=25&sortOrder=ASC&sortField=id";
    const response = await fetch(url, API_OPTIONS);
    const json = await response.json();
    // console.log(result);
    return json;
  };

  const handleGptQuery = async () => {
    const gptResponse = await openai.responses.create({
      model: "gpt-4o",
      instructions:
        "You are a movie recommender that that recommends 5 movies based on input serperated by commas. The Output must be only the names of 5 movies seperated by commas. Example Output: Golmaal, Sholay, Lagaan, RRR, Gully Boy",
      input: userQuery.current.value,
    });
    // gptResponseExample = "Gol maal, Sholay, Hera Pheri, Satte Pe Satta, Padosan"
    console.log(gptResponse.output_text);
    const gptOutputArray = gptResponse.output_text.split(",").map(movie => movie.trim());;
    console.log(gptOutputArray);
    const imdbMoviesPromiseArray = gptOutputArray.map(movie => searchImdbMovies(movie));
    const imdbResults = await Promise.all(imdbMoviesPromiseArray);
    console.log(imdbResults);
    
    dispatch(addGptMovies({imdbMovies: imdbResults, gptMovies: gptOutputArray}));
  };
  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <img
          className="w-full h-screen object-cover fixed top-0 left-0"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/50fcc930-ba3f-4cae-9257-9f920e30a998/web/IN-en-20250310-TRIFECTA-perspective_739387a0-ff14-44ed-a5af-36e5aa4d236e_medium.jpg"
          alt="background"
        />
      </div>
      <div className="flex justify-center items-center h-120">
        <div className="bg-black p-4">
          <div className="flex border-2 border-gray-500 rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="What are you in the mood to watch today?"
              className="px-4 py-2 w-150 outline-none text-white placeholder-gray-400"
              ref={userQuery}
            />
            <button
              className="bg-red-500 opacity-90 text-white px-6 py-2 hover:bg-gray-700"
              onClick={handleGptQuery}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="-mt-10">
      <GptSuggestions/>
      </div>
    </div>
  );
};

export default GptSearchPage;

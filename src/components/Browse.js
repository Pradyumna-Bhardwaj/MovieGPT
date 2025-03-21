import React, { useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useMostPopularMovies from "../hooks/useMostPopularMovies";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";
import useTop250Movies from "../hooks/useTop250Movies";
import useTopIndianMovies from "../hooks/useTopIndianMovies";

const Browse = () => {
  useMostPopularMovies();
  useTop250Movies();
  useTopIndianMovies();
  const showGptSearchView = useSelector(
    (store) => store.gpt?.showGptSearchView
  );
  return (
    <div>
      <Header />
      {showGptSearchView ? (
        <GptSearchPage />
      ) : (
        <>
          {/*more than 1 components can only be shown in an itenary operator by enclosing them in React Fragments = <></>*/}
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;

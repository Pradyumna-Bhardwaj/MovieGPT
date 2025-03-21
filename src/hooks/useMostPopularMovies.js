import { useEffect } from "react";
import { API_OPTIONS, getMostPopularMovies_API_URL} from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMostPopularMovies } from "../utils/movieSlice";

const useMostPopularMovies = () => {

    dispatch = useDispatch()

    const getMostPopularMovies = async () => {
        try {
          const response = await fetch(getMostPopularMovies_API_URL, API_OPTIONS);
          const result = await response.json();
        //   console.log(result);
          dispatch(addMostPopularMovies(result))
        } catch (error) {
          console.error(error);
        }
      };
      useEffect(() => {
        getMostPopularMovies();
      }, []);
}

export default useMostPopularMovies;
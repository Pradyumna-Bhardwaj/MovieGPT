import { useEffect } from "react";
import { API_OPTIONS, getTopIndianMovies_API_URL} from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopIndianMovies } from "../utils/movieSlice";

const useTopIndianMovies = () => {

    dispatch = useDispatch()

    const getTopIndianMovies = async () => {
        try {
          const response = await fetch(getTopIndianMovies_API_URL, API_OPTIONS);
          const result = await response.json();
        //   console.log(result);
          dispatch(addTopIndianMovies(result))
        } catch (error) {
          console.error(error);
        }
      };
      useEffect(() => {
        getTopIndianMovies();
      }, []);
}

export default useTopIndianMovies;
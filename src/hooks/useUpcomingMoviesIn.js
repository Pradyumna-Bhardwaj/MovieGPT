import { useEffect } from "react";
import { API_OPTIONS, getUpcomingMoviesIn_API_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMoviesIN } from "../utils/movieSlice";

const useUpcomingMoviesIn = () => {

    dispatch = useDispatch()

    const getUpcomingMoviesIn = async () => {
        try {
          const response = await fetch(getUpcomingMoviesIn_API_URL, API_OPTIONS);
          const result = await response.json();
        //   console.log(result);
          dispatch(addUpcomingMoviesIN(result))
        } catch (error) {
          console.error(error);
        }
      };
      useEffect(() => {
        getUpcomingMoviesIn();
      }, []);
}

export default useUpcomingMoviesIn;
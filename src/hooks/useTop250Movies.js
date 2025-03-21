import { useEffect } from "react";
import { API_OPTIONS, getTop250Movies_API_URL} from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTop250Movies } from "../utils/movieSlice";

const useTop250Movies = () => {

    dispatch = useDispatch()

    const getTop250Movies = async () => {
        try {
          const response = await fetch(getTop250Movies_API_URL, API_OPTIONS);
          const result = await response.json();
        //   console.log(result);
          dispatch(addTop250Movies(result))
        } catch (error) {
          console.error(error);
        }
      };
      useEffect(() => {
        getTop250Movies();
      }, []);
}

export default useTop250Movies;
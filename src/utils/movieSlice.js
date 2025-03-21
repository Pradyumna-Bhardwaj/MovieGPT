import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    upcomingMoviesIN: null,
    mostPopularMovies: null,
    top250Movies: null,
    topIndianMovies: null,
  },
  reducers: {
    addUpcomingMoviesIN: (state, action) => {
      state.upcomingMoviesIN = action.payload;
    },
    addMostPopularMovies: (state, action) => {
      state.mostPopularMovies = action.payload;
    },
    addTop250Movies: (state, action) => {
      state.top250Movies = action.payload;
    },
    addTopIndianMovies: (state, action) => {
      state.topIndianMovies = action.payload;
    },
  },
});

export const { addUpcomingMoviesIN, addMostPopularMovies, addTop250Movies, addTopIndianMovies } = movieSlice.actions;
export default movieSlice.reducer;

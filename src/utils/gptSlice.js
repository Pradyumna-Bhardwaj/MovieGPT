import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearchView: false,
        gptMovies: null,
        imdbMovies: null,
    },
    reducers:{
        toggleGptSearchView: (state) =>{
            state.showGptSearchView = !state.showGptSearchView;
        },
        addGptMovies: (state, action)=>{
            state.gptMovies = action.payload.gptMovies;
            state.imdbMovies = action.payload.imdbMovies;
        },
    },
});


export const {toggleGptSearchView, addGptMovies} = gptSlice.actions;
export default gptSlice.reducer;
import { configureStore, createSlice, createAction } from "@reduxjs/toolkit";
import { songReducer, addSong, removeSong } from "./slices/songsSlice";
import { movieReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";



const store = configureStore({
  reducer: {
    songs: songReducer,
    movies: movieReducer
  }
})

export { store, reset, addSong, removeSong, addMovie, removeMovie };
export const reset = createAction("reset");
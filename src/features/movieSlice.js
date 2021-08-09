import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movie: null,
  },
  reducers: {
    select: (state, action) => {
      state.movie = action.payload;
    },
    unSelect: (state) => {
      state.movie = null;
    },
  },
});

export const { select, unSelect } = movieSlice.actions;

export const selectMovie = (state) => state.movie.movie;

export default movieSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommend: null,
  games: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend;
      state.games = action.payload.games;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectRecommend = (state) => state.movie.recommend;
export const selectGames = (state) => state.movie.games;

export default movieSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  Base_url,
  Api_key,
  End_point,
  Type,
  Short_by,
} from "../../components/moviedb/Variable";

const initialState = {
  loading: false,
  movies: [],
  disable: false,
  page: 1,
};

export const fetchMovies = createAsyncThunk("fetchMovies", async (payload) => {
  const responce = await fetch(
    `${Base_url}${Type}${End_point}?sort_by=${Short_by}&api_key=${Api_key}&page=${payload.page}`
  );
  return responce.json();
});

export const MovieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setDisable: (state, action) => {
      state.disable = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state, action) => {
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = [...state.movies, ...action.payload.results];
      })
      .addCase(fetchMovies.rejected, (state, action) => {
      });
  },
});

export const { setDisable, setPage, movies, loading } = MovieSlice.actions;

export default MovieSlice.reducer;

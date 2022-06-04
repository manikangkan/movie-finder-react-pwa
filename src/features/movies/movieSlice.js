import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await axios.get(
    `http://www.omdbapi.com?apikey=53c800d&s=avengers&type=movie`
  )
  return response.data
})

export const fetchMoviesDetails = createAsyncThunk(
  'movies/fetchMoviesDetails',
  async (imdbID) => {
    const response = await axios.get(
      `http://www.omdbapi.com?apikey=53c800d&i=${imdbID}&Plot=full`
    )
    return response.data
  }
)

const initialState = {
  movies: {},
  movieDetails: {},
}

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    removeMovieDetails: (state) => {
      state.moviesDetails = {}
    },
  },
  extraReducers: {
    [fetchMovies.pending]: () => console.log('movies pending'),
    [fetchMovies.fulfilled]: (state, { payload }) => {
      state.movies = payload
      console.log('movies fetched')
    },
    [fetchMovies.rejected]: () => console.log('movies rejected'),

    [fetchMoviesDetails.pending]: () => console.log('movies details pending'),
    [fetchMoviesDetails.fulfilled]: (state, { payload }) => {
      state.movieDetails = payload
      console.log('movies details fetched')
    },
    [fetchMoviesDetails.rejected]: () =>
      console.log('movies details rejected'),
  },
})

export const { removeMovieDetails } = movieSlice.actions
export default movieSlice.reducer

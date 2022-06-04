import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchShows = createAsyncThunk('shows/fetchShows', async () => {
  const response = await axios.get(
    `http://www.omdbapi.com?apikey=53c800d&s=superman&type=series`
  )
  return response.data
})

const initialState = {
  shows: {},
}

const showSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    addShows: (state, { payload }) => {
      state.shows = payload
    },
  },
  extraReducers: {
    [fetchShows.pending]: () => console.log('shows pending'),
    [fetchShows.fulfilled]: (state, { payload }) => {
      state.shows = payload
      console.log('shows fetched')
    },
    [fetchShows.rejected]: () => console.log('shows rejected'),
  },
})

export const { addShows } = showSlice.actions
export default showSlice.reducer

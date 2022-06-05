import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  fetchMoviesDetails,
  removeMovieDetails,
} from '../features/movies/movieSlice'

const Detail = () => {
  const { imdbID } = useParams()
  const dispatch = useDispatch()
  const movieDetails = useSelector((state) => state.movies.movieDetails)

  useEffect(() => {
    dispatch(fetchMoviesDetails(imdbID))
    return () => {
      dispatch(removeMovieDetails())
    }
  }, [imdbID])

  return (
    <div className='p-4'>
      <div className='flex justify-between'>
        <div>
          <h1 className='text-xl text-slate-100 font-semibold'>
            {movieDetails.Title}
          </h1>
          <p>{movieDetails.Plot}</p>

          <div className='flex'>
            <p>{movieDetails.imdbRating}</p>
            <p>{movieDetails.imdbVotes}</p>
            <p>{movieDetails.Runtime}</p>
            <p>{movieDetails.Year}</p>
          </div>
          <div>
            <p>Director</p>
            <h2>{movieDetails.Director}</h2>
          </div>
          <div>
            <p>Cast</p>
            <h2>{movieDetails.Actors}</h2>
          </div>
          <div>
            <p>Genre</p>
            <h2>{movieDetails.Genre}</h2>
          </div>
          <div>
            <p>Languages</p>
            <h2>{movieDetails.Language}</h2>
          </div>
          <div>
            <p>Awards</p>
            <h2>{movieDetails.Awards}</h2>
          </div>
        </div>
        <img src={movieDetails.Poster} alt='poster' className='rounded-md' />
      </div>
    </div>
  )
}

export default Detail

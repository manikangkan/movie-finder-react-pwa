import { useDispatch, useSelector } from 'react-redux'
import Section from '../components/Section'
import { useEffect } from 'react'
import { fetchMovies } from '../features/movies/movieSlice'
import { fetchShows } from '../features/shows/showSlice'
import Header from '../components/Header'

const Master = () => {
  const movies = useSelector((state) => state.movies.movies)
  const shows = useSelector((state) => state.shows.shows)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchMovies())
    dispatch(fetchShows())
  }, [])

  return (
    <div className='p-4 space-y-4'>
      <Header contents={movies} />
      <Section sectionHeader='Movies' contents={movies} />
      <Section sectionHeader='Shows' contents={shows} />
    </div>
  )
}

export default Master

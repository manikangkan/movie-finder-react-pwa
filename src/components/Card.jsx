import { Link } from 'react-router-dom'

const Card = ({ content }) => {
  return (
    <Link to={`/content/${content.imdbID}`}>
      <img
        src={content.Poster}
        alt='poster'
        className='rounded-md h-96 object-cover'
      />
    </Link>
  )
}

export default Card

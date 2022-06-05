import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { EffectCards } from 'swiper'

import Card from './Card'

const listData = [
  'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
  'Save your favourites easily and always have something to watch.',
  'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
]

const Header = ({ contents }) => {
  return (
    <header className='flex flex-col-reverse xl:flex-row xl:items-center'>
      <section className='space-y-8 xl:w-2/3 p-8'>
        <h1>
          Unlimited movies, TV shows & more only at{' '}
          <span className='text-pink-500'>Moviesity</span>
        </h1>
        <ul className='space-y-2'>
          {listData.map((item, index) => (
            <li
              key={index}
              className='text-slate-100 flex items-center space-x-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='fill-pink-500'
                viewBox='0 0 16 16'>
                <path d='M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z' />
              </svg>{' '}
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <button className='flex items-center space-x-8 py-4 px-6 rounded-full bg-pink-500 text-white font-semibold hover:scale-95 transition-all'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='fill-slate-100'
            viewBox='0 0 16 16'>
            <path d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z' />
          </svg>{' '}
          WATCH NOW
        </button>
      </section>
      <section className='xl:w-1/3 max-w-xs p-8 mx-auto'>
        {contents.Response === 'True' && (
          <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]}>
            {contents.Search.map((content) => (
              <SwiperSlide>
                <Card content={content} key={content.imdbID} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </section>
    </header>
  )
}

export default Header

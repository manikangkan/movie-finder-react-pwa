import Card from './Card'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

const Section = ({ sectionHeader, contents }) => {
  return (
    <section className='space-y-4'>
      <header className='flex justify-between items-center'>
        <h2 className='text-slate-100 font-semibold'>{sectionHeader}</h2>
        <div className='w-10 h-10 grid place-content-center hover:bg-gray-800 rounded-full cursor-pointer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='fill-gray-100'
            viewBox='0 0 16 16'>
            <path d='M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z' />
          </svg>
        </div>
      </header>
      {contents.Response === 'True' ? (
        <Swiper spaceBetween={10} slidesPerView={6}>
          {contents.Search.map((content) => (
            <SwiperSlide>
              <div className='rounded-md overflow-hidden'>
                <Card content={content} key={content.imdbID} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <h2>loading...</h2>
      )}
    </section>
  )
}

export default Section

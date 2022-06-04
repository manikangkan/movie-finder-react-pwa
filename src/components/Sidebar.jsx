import { Link, NavLink } from 'react-router-dom'

const links = ['Home', 'Movies', 'Shows', 'Setting', 'About', 'Contact']

const Sidebar = () => {
  return (
    <nav className='col-span-1 bg-gray-800 flex flex-col justify-between'>
      <div className='space-y-8'>
        <Link to='/'>
          <h3 className='p-4'>Moviesity</h3>
        </Link>
        <div className='flex flex-col'>
          {links.map((link) => (
            <NavLink
              to={`/${link === 'Home' ? '' : link.toLowerCase()}`}
              className={({ isActive }) =>
                isActive
                  ? 'text-slate-100 font-semibold p-4 border-l-2 border-pink-500 hover:bg-gray-700'
                  : 'text-slate-400 p-4 border-l-2 border-transparent hover:bg-gray-700'
              }>
              {link}
            </NavLink>
          ))}
        </div>
      </div>

      <div className='flex items-center justify-between p-4 hover:bg-gray-700'>
        <div className='flex items-center space-x-4 cursor-pointer'>
          <img
            src='https://avatars.githubusercontent.com/u/75943412?v=4'
            alt='logged in user'
            className='w-10 h-10 rounded-full'
          />
          <div>
            <h3>Manikangkan Das</h3>
            <p className='text-slate-400 text-xs'>manikangkandas</p>
          </div>
        </div>
        <div className='w-10 h-10 grid place-content-center hover:bg-gray-800 rounded-full cursor-pointer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='fill-gray-100'
            viewBox='0 0 16 16'>
            <path
              fill-rule='evenodd'
              d='M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z'
            />
          </svg>
        </div>
      </div>
    </nav>
  )
}

export default Sidebar

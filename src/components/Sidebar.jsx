import { Link, NavLink } from 'react-router-dom'

const links = [
  {
    name: 'Home',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill='currentColor'
        className='fill-slate-100'
        viewBox='0 0 16 16'>
        <path
          fill-rule='evenodd'
          d='M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z'
        />
        <path
          fill-rule='evenodd'
          d='M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z'
        />
      </svg>
    ),
  },
  {
    name: 'Movies',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill='currentColor'
        className='fill-slate-100'
        viewBox='0 0 16 16'>
        <path d='M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z' />
      </svg>
    ),
  },
  {
    name: 'Shows',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill='currentColor'
        className='fill-slate-100'
        viewBox='0 0 16 16'>
        <path d='M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z' />
      </svg>
    ),
  },
  {
    name: 'Setting',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill='currentColor'
        className='fill-slate-100'
        viewBox='0 0 16 16'>
        <path d='M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434L8.932.727zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z' />
      </svg>
    ),
  },
  {
    name: 'About',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill='currentColor'
        className='fill-slate-100'
        viewBox='0 0 16 16'>
        <path d='M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z' />
        <path d='M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' />
      </svg>
    ),
  },
  {
    name: 'Contact',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill='currentColor'
        className='fill-slate-100'
        viewBox='0 0 16 16'>
        <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z' />
      </svg>
    ),
  },
]

const Sidebar = () => {
  return (
    <nav className='hidden md:flex flex-col justify-between bg-gray-800'>
      <div className='space-y-8'>
        <Link to='/'>
          <h3 className='p-4 text-center xl:text-left'>
            M<span className='hidden xl:inline-block'>oviesity</span>
          </h3>
        </Link>
        <div className=''>
          {links.map((link) => (
            <NavLink
              to={`/${link.name === 'Home' ? '' : link.name.toLowerCase()}`}
              className={({ isActive }) =>
                isActive
                  ? 'text-slate-100 font-semibold p-4 border-l-2 border-pink-500 bg-gray-700 flex items-center justify-center xl:justify-start space-x-4'
                  : 'text-slate-400 p-4 border-l-2 border-transparent hover:bg-gray-700 flex items-center justify-center xl:justify-start space-x-4'
              }>
              {link.icon}
              <span className='hidden xl:block'>{link.name}</span>
            </NavLink>
          ))}
        </div>
      </div>

      <div className='flex flex-col xl:flex-row  items-center justify-between p-4 hover:bg-gray-700 space-y-4 xl:space-x-4 xl:space-y-0'>
        <img
          src='https://avatars.githubusercontent.com/u/75943412?v=4'
          alt='logged in user'
          className='w-10 h-10 rounded-full'
        />
        <div className='hidden xl:block truncate'>
          <h3>Manikangkan Das</h3>
          <p className='text-slate-400 text-xs'>manikangkandas</p>
        </div>
        <div className='w-10 h-10 hover:bg-gray-800 rounded-full cursor-pointer grid place-content-center'>
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

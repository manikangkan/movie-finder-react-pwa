const Footer = () => {
  return (
    <footer className='flex justify-between items-center p-4 bg-gray-800'>
      <h1 className='text-slate-100 font-semibold cursor-pointer'>
        Copyright {new Date().getFullYear()} by Moviesity
      </h1>
      <p className="text-slate-400">
        Designed & Developed by{' '}
        <a href='github.com/manikangkandas' className="font-semibold text-slate-100">manikangkandas</a>
      </p>
    </footer>
  )
}

export default Footer

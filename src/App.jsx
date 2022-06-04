import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import Master from './pages/Master'
import Detail from './pages/Detail'
import Error from './components/Error'

const App = () => {
  return (
    <BrowserRouter>
      <div className='h-screen bg-gray-900 overflow-hidden text-sm grid grid-cols-6'>
        <Sidebar />
        <main className='col-span-5 overflow-y-auto'>
          <Routes>
            <Route path='/' element={<Master />} />
            <Route path='/content/:imdbID' element={<Detail />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App

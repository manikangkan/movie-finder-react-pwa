import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import Master from './pages/Master'
import Detail from './pages/Detail'
import Error from './components/Error'

const App = () => {
  return (
    <BrowserRouter>
      <div className='h-screen bg-gray-900 overflow-hidden text-sm flex'>
        <Sidebar />
        <main className='flex-1 overflow-y-auto'>
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

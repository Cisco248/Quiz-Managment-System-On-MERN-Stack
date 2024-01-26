import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import axios from 'axios'

import Navibar from '../src/component/Navibar'
import Home from './pages/Home'
import Welcome from './pages/Welcome'
import Register from './pages/Register'
import Login from '../src/pages/Login'

axios.defaults.baseURL = 'http://localhost:8000'

function App() {
  return (
    <>
      <Routes>
        <Route path='/navibar' element={<Navibar />} />
        <Route path='/home' element={<Home />} />
      </Routes>
      <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        
      </Routes>
    </>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import axios from 'axios'

import Navibar from '../src/component/Navibar'
import Navibar2 from './component/Navibar2'
import Welcome from './pages/Welcome'
import Register from './pages/Register'
import Login from '../src/pages/Login'
import Profile from './pages/Profile'

axios.defaults.baseURL = 'http://localhost:8000'

function App() {
  return (
    <>
      <Routes>
        <Route path='/navibar' element={<Navibar />} />
      </Routes>
      <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/navibar2' element={<Navibar2 />} />
        
      </Routes>
    </>
  )
}

export default App
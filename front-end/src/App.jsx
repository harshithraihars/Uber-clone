import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import USerSignUp from './pages/USerSignUp'
import CaptianLogin from './pages/CaptianLogin'
import CaptianSignUp from './pages/CaptianSignUp'

const App = () => {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/signup' element={<USerSignUp/>}/>
        <Route path='/captian-login' element={<CaptianLogin/>}/>
        <Route path='/captian-signup' element={<CaptianSignUp/>}/>
      </Routes>
    </div>
  )
}

export default App
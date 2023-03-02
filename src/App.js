import React from 'react'
import { Route, Routes } from 'react-router';
import { toast } from 'react-toastify';
import Home from './components/Home';
import Signup from './components/Signup';
import Signin from './components/Signin';
const App = () => {
  const notify = () => toast("Wow so easy!");
  return (
    <div className='container mt-5'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
      </Routes>
      </div>
  )
}

export default App
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Link to="/signup">Signup</Link><br />
        <Link to="/signin">Signin</Link>
    </div>
  )
}

export default Home
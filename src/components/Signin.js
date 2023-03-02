import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/config'

const Signin = () => {
  const auth = getAuth(app);

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const signinHandler = (e) =>{
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
  });
  }


  return (
   <>
    <form onSubmit={signinHandler} className='w-50 m-auto'>
        <h3 className='mb-3  fw-lighter'>SignIn User</h3>
        <input className='form-control mb-3 w-100' type="email" placeholder='email' onChange={(e) =>setEmail(e.target.value)} value={email}/>
        <input className='form-control mb-3 w-100' type="password" placeholder='*****' onChange={(e) =>setPassword(e.target.value)} value={password}/>
        <button className='btn btn-dark mb-3'>SignIn User</button> <br />
        <Link to="/signUp"><button className='btn btn-success mb-3'>SignUp</button></Link>
    </form>
   </>
  )


}

export default Signin
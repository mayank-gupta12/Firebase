import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/config'
import { getFirestore, collection, addDoc  } from "firebase/firestore";

const Signup = () => {
  const auth = getAuth(app);
  const db = getFirestore(app);
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const signupHandler = (e) =>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
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
    <form onSubmit={signupHandler} className='w-50 m-auto'>
        <h3 className='mb-3  fw-lighter'>SignUp User</h3>
        <input className='form-control mb-3 w-100' type="text" placeholder='username' onChange={(e) =>setUsername(e.target.value)} value={username}/>
        <input className='form-control mb-3 w-100' type="email" placeholder='email' onChange={(e) =>setEmail(e.target.value)} value={email}/>
        <input className='form-control mb-3 w-100' type="password" placeholder='*****' onChange={(e) =>setPassword(e.target.value)} value={password}/>
        <button className='btn btn-dark mb-3'>SignUp User</button> <br />
         <Link to="/signin"><button className='btn btn-success mb-3'>SignIn</button></Link>
    </form>
   </>
  )
}

export default Signup
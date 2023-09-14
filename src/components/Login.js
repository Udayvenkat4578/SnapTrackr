import React from 'react'
import img4 from '../Assets/img6.avif'
import {useState} from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from './firebase'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import Nav1 from './Nav1';


const Login = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();

const signin =()=>{
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
     
    console.log(user);
    navigate('/')
    axios.post('https://snaptrackr-55953-default-rtdb.firebaseio.com/login.json',data)
    //firebase database name is snaptrackr


    // alert("logged in successfully")


    console.log(data.length)
    // ...
  })
  .catch((error) => {
    console.log(error)
    alert(error);
  });
}
  const[data,setData]=useState(
    {
      
      email:'',
      password:'',
    
      

    }
  )
  const {email,password}=data;
 
 const changeHandler = e=>{
  setData({ ...data,[e.target.name]:e.target.value})
 }

const submitme = e=>{
  e.preventDefault();
  
}
 

  return (
    <div>
      <Nav1/>
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        <div className=' hidden sm:grid'><img className='scale-75' alt="h" src={img4}/></div>
        <div  className=''>
          <div className='grid grid-cols-1 bg-white  mt-11 '>
         

 

  
    <div>
    <div class="max-w-sm rounded-2xl overflow-hidden shadow-xl  pl-10 sm:pl-1  border-3 border-gray-800 ml-11 sm:ml-0 mt-11 ">
    <div class="">
      <center>
      <h1 className='text-[#1a1c31c6] font-bold  mt-6 text-center text-3xl'>Welcome Back!</h1> 
        <h1 className='text-red-500 font-bold text-2xl mt-6 mb-7'>Login</h1> 
        <form onSubmit={submitme} autoComplete='off'>

         <div> <h3  className='text-[#0a0a0f] font-bold text-md text-left mt-2 ml-11 '>Email</h3></div>
        <input className='border-2 border-gray-300 h-10 w-60 rounded-lg mt-2' type="text" name='email' placeholder='    Enter Email' value={email} onChange={changeHandler}  required /><br></br>
        <div> <h3  className='text-[#0a0a0f] font-bold text-md text-left mt-2 ml-11 '>Password</h3></div>
        <input className='border-2 border-gray-300 h-10 w-60 rounded-lg mt-2'  type="password" name='password'placeholder='    Enter password'value={password} onChange={changeHandler}  required /><br></br>
        <br></br>
        <button onClick={signin} className='border-2 border-text-[#2533fb] font-extrabold text-white bg-red-500 px-4 py-2 rounded-lg mb-11' >Login</button>
        <br></br>
        </form>
      </center>
      </div>
      </div>
    </div>
  



</div>
        </div>
      </div>
    </div>
  )
}

export default Login
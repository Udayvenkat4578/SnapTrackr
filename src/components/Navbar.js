import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <div className='flex flex-row justify-between bg-slate-600 backdrop-blur-sm'>
            <div>
                <ul className='md:mt-3 mt-2 ml-3 font-extrabold text-lg'>
                    <li className=' text-sm sm:text-xl text-white absolute  mb-11 pb-1'><a href='/'>SnapTrackr</a></li>
                    
                </ul>
            </div>
            <div className='opacity-80   md:flex'>
                <ul className='flex flex-row p-3  '>
                <li className='md:mr-5 mr-2 font-mono md:text-xl text-xs text-white'><Link to='/'>HOME </Link></li> 
                <li className='md:mr-5 mr-2 font-mono md:text-xl text-xs text-white'><Link to='/images'>IMAGES</Link> </li> 
               
                <li className='md:mr-5 mr-2 font-mono md:text-xl text-xs text-white'><Link to='/About'>ABOUT </Link> </li> 
                <li className='md:mr-5 mr-2 font-mono md:text-xl text-xs text-white'><Link to='/Login'>LOGIN </Link></li>     

                <li className='md:mr-5 mr-2 font-bold md:text-lg text-xs  bg-white  text-slate-600 px-3 rounded-sm'><Link to='/Signup'>SIGN UP</Link> </li> 
             </ul>
            </div> 


        </div>
    </div>
  )
}

export default Navbar
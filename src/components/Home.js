import React from 'react'
import img7 from '../Assets/img7.avif'
import img8 from '../Assets/img8.avif'
import img9 from '../Assets/img9.avif'
import Navbar from './Navbar'
import Some from './Some'
import Footer from './Footer'
const Home = () => {
  return (
    <div className=' mb-11 pb-11'>
      <Navbar/>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-7 p-2 align-middle bg-slate-600'>
            <div className=' flex-flex-rows p-11 pt-11  mt-11  '>
              <p className='mt-5 pt-8'></p>
             <p className=' text-xl md:text-3xl font-bold text-center text-white'>
            UNLOCK AN ENDLESS GALLERY</p>
             <p  className='text-xl md:text-3xl font-bold  text-center  text-white'>
             OF STUNNING IMAGES             </p>
             <p  className=' text-sm md:text-md font-bold text-white text-center mt-2'>
                Get Access to 1M+ captivating images
             </p>
             <p className='text-center font-bold text-xs text-white mt-3'>
             "Empower your senses with global visuals, crafted by a diverse community of creators. Imagination knows no bounds!"</p>            
            </div>
            <div  className=' place-items-center'>
              <div className='grid grid-cols-2 '>
              
               <div>
               <img className='scale-75 sm:mt-11 mt-0 shadow-sm shadow-white rounded-md mb-11' src={img7} alt='2'/>

               
               </div>
        
              

              
              <div className='grid grid-rows-2'>
                <div>
                <img className='w-60 shadow-md rounded-md mr-11 mt-8 mb-3' src={img8} alt='2'/>

                </div>
                <div>
                <img className='w-60 rounded-md shadow-xl mb-11' src={img9} alt='1'/>
                </div>
              </div>
              </div>
            </div>
        </div>
    
        <hr></hr>
        <Some/>
        <div>
          <Footer/>
        </div>
        
    </div>
  )
}

export default Home

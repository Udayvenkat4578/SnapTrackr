import React from 'react'
import Nav1 from './Nav1'
import img1 from '../Assets/img1.avif'
const About = () => {
  return (
    <div>
        <Nav1/>
        <div className='grid grid-cols-1 md:grid-cols-2 place-items-center '>
            <div>
                <p className=' text-sm md:text-lg font-sm md:font-xl  pt-11 pl-9'>At SnapTrackr, our passion for imagery fuels every aspect of our platform. We are a team of dedicated individuals who share a common love for the power of visual expression. Through our collective enthusiasm, we have created a captivating image searching website that goes beyond mere functionality. Our commitment to curating a vast and diverse collection of images stems from a genuine desire to inspire and empower our users. Whether you're a seasoned professional or an aspiring creative, we strive to ignite your imagination, fuel your projects, and be your ultimate companion on your quest for visual inspiration. At PicQuest, passion is the driving force that fuels our pursuit of excellence.</p>
                 </div>
            <div> <img className='scale-50' src={img1} alt='hii'/></div>

        </div>
        <div><p  className='text-center text-slate-600 font-bold text-md md:text-xl mt-4 mb-4'>Collaborate with Us!</p></div>
        <div className='grid grid-flow-rows-2 border-2 border-gray-400 p-5 ml-11 mr-11'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div >
                <label  className='text-lg font-bold ml-8'>Enter Name:</label><br></br>
                <input className='p-2 ml-8 border-2 border-gray-300 ' type="text" placeholder='Enter Name ' required/>
                </div>
                <div>
                <label  className='text-lg font-bold ml-8'>Enter Email:</label><br></br>
                <input className='p-2 ml-8 border-2 border-gray-300 ' type="text" placeholder='Enter Email' required/>

                </div>
            </div>
            <div className=''>
            <div className=' grid md:grid-cols-2 grid-cols-1 '>
                <div className='flex flex-col'>
            <label  className='text-lg font-bold ml-8 '> Message:</label>
            <textarea className='p-2 ml-8 border-2 border-gray-300 ' rows="3" cols="40" required>Write Here..</textarea></div>
            </div>
            <div> <button className='bg-slate-600 text-white px-3 py-1 mt-2 ml-8' onClick={()=>{alert("we will contact you soon")}}>Send</button></div>
            </div>
        </div>
    </div>
  )
}

export default About
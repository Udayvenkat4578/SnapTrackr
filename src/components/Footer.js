import React from 'react'

const Footer = () => {
  return (
    <div className=' '>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 rounded-md '>
            <div className=' bg-slate-600'>                    <p className=' text-sm sm:text-xl font-bold ml-11 pl-11 mt-9 text-white absolute  mb-11 pb-1 '><a href='/'>SnapTrackr</a></p><br></br>
            <p className=' text-sm sm:text-md font-md  ml-11 pl-11 mt-11 text-white   mb-11 pb-1 '><a href='/'>                Get Access to 1M+ captivating images
</a></p>
<p  className=' text-sm md:text-md font-bold text-white text-center mt-0 mb-2'>Copyright@SnapTrackr Inc2023             </p>



</div>
            <div className='border-2 border-slate-600 p-3 '>
                <p className='text-slate-600 text-lg font-bold text-center '>Subscribe to Our Newsletter</p>
                <div className='pl-11 ml-11'>
                <input className='border border-gray-400 mt-3 pl-2 mb-3 p-1' type="text" placeholder='Enter your Email'/>
                <button className='text-white bg-red-500 ml-2 py-1 px-2' onClick={()=>{alert("Thank You for subscribing")}}>Subscribe</button>
                <p className='text-sm font-lg '>             "Empower your senses with global visuals, crafted by a diverse community of creators. Imagination knows no bounds!"          
</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer
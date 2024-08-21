import React from 'react'
import Rating from './Rating'

function Testimonial({src,ratingValue,h1,p}) {
  return (
    <div className='w-[30%] h-[16rem] border-2 border-gray-300 bg-white p-7 rounded-xl'>
       <div className='flex justify-between'>
        <img src={src} className='h-16 w-16'></img>
           <Rating ratingValue={ratingValue}/>
       </div>
       <h1 className='text-lg font-bold pt-2'>{h1}</h1>
       <p className='text-gray-600 leading-5 '>
{p}
        </p>
    </div>
  )
}


export default Testimonial
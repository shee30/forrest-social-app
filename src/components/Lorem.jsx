import React from 'react'

function Lorem({title,h1,p}) {
  return (
    <div className="text-white flex flex-col justify-center items-center mx-10 w-[27%] ">
    <h1 className="text-2xl m-3">#<span className="text-4xl font-bold">{title}</span></h1>
    <h2 className='text-xl m-2 font-semibold'>{h1}</h2>
    <p className='text-sm text-center text-gray-300'>
{p}        </p>
  </div>
  )
}

export default Lorem
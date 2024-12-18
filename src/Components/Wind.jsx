import React from 'react'

function Wind(props) {
  return (
    <div className='flex flex-wrap justify-around gap-6'>
      <div className='text-center border-2 h-52 w-52 sm:h-44 sm:w-44 md:h-52 md:w-52 pt-8 rounded-lg'>
        <h1 className='font-bold text-2xl py-5 text-white'>HUMIDITY</h1>
        <h1 className='font-bold text-4xl text-white'>{props.humidity}%</h1>
      </div>

      <div className='text-center border-2 h-52 w-52 sm:h-44 sm:w-44 md:h-52 md:w-52 pt-8 rounded-lg'>
        <h1 className='font-bold text-2xl py-5 text-white'>WIND SPEED</h1>
        <h1 className='font-bold text-4xl text-white'>{props.wind} km/h</h1>
      </div>

      <div className='text-center border-2 h-52 w-52 sm:h-44 sm:w-44 md:h-52 md:w-52 pt-8 rounded-lg'>
        <h1 className='font-bold text-2xl py-5 text-white'>PRESSURE</h1>
        <h1 className='font-bold text-4xl text-white'>{props.pressure} Pa</h1>
      </div>

      <div className='text-center border-2 h-52 w-52 sm:h-44 sm:w-44 md:h-52 md:w-52 pt-8 rounded-lg'>
        <h1 className='font-bold text-2xl py-5 text-white'>SEA LEVEL</h1>
        <h1 className='font-bold text-4xl text-white'>{props.sea_level} m</h1>
      </div>
    </div>
  )
}

export default Wind;

import React from 'react'

function Temp(props) {
  return (
    <div className="text-center px-4 sm:px-8">
      <div className="flex justify-center">
        <h1 className="text-7xl sm:text-9xl font-bold text-white">
          {props.temp}
        </h1>
        <h3 className="text-3xl sm:text-5xl font-bold text-white">°C</h3>
      </div>
      <h1 className="text-2xl sm:text-4xl text-white">{props.city}, {props.country}</h1>
      <h1 className="text-2xl sm:text-4xl text-white">{props.description}</h1>
    </div>
  );
}

export default Temp
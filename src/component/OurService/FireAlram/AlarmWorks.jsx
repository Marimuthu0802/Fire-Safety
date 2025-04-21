import React from 'react'
import alarmwork from '../../../assets/alarmwork.jpeg';

const AlarmWorks = () => {
  return (
    <div className=' flex flex-col items-center text-center gap-8 px-4 py-10'>
    <h1 className='text-3xl  md:text-4xl font-bold w-72 md:w-2xl lgw-7xl bg-red-500 text-white px-6 py-2 rounded-lg shadow-md'>
      FIRE ALARM WORKS
      </h1>
    <div className='flex justify-center items-center '>
    <img
  src={alarmwork}
  alt="Hydrant"
  className="object-cover rounded-md shadow-lg"
/>

    </div>
    </div>
  )
}

export default AlarmWorks

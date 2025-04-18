import React from 'react'

const WayToContact = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-evenly items-center gap-6 px-4 py-10 text-white'>
      
      <div className="w-full max-w-xs h-72 flex flex-col items-center justify-center shadow-lg bg-black p-4 rounded-lg text-center">
        <img src="src/assets/contact1.png" alt="Company Details" width={90} className="mb-4" />
        <h1 className='text-lg font-semibold'>Company Details</h1>
        <p>Bytone Global</p>
      </div>

      <div className="w-full max-w-xs h-72 flex flex-col items-center justify-center shadow-lg bg-black p-4 rounded-lg text-center">
        <img src="src/assets/contact2.png" alt="Email Us" width={90} className="mb-4" />
        <h1 className='text-lg font-semibold'>Email us</h1>
        <p>support@bytone.in</p>
      </div>

      <div className="w-full max-w-xs h-72 flex flex-col items-center justify-center shadow-lg bg-black p-4 rounded-lg text-center">
        <img src="src/assets/contact3.png" alt="Call Us" width={90} className="mb-4" />
        <h1 className='text-lg font-semibold'>Call us</h1>
        <p>+91 70106 77045 / +91 96002 51611</p>
      </div>

    </div>
  )
}

export default WayToContact



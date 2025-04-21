import React from 'react'
import contact1 from '../../assets/contact1.png';
import contact2 from '../../assets/contact2.png';
import contact3 from '../../assets/contact3.png';


const UpcomingProject = () => {
  return (
    <div className="  px-4 py-12">
      
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className='text-2xl sm:text-3xl'>Let's Talk</h1>
        <h2 className='text-3xl sm:text-4xl font-semibold mt-2'>Have an upcoming project?</h2>
        <button className='mt-6  bg-yellow-400 hover:bg-yellow-500 transition text-black px-6 py-2 rounded-lg font-medium'>
          Contact Us
        </button>
      </div>

      {/* Contact Info Cards */}
      <div className='flex flex-col lg:flex-row justify-center items-center gap-6 text-white '>
        
        <div className="w-full max-w-xs h-72 flex flex-col items-center justify-center shadow-lg bg-black p-4 rounded-lg text-center">
          <img src={contact1} alt="Company Details" width={90} className="mb-4" />
          <h1 className='text-lg font-semibold'>Company Details</h1>
          <p>Bytone Global</p>
        </div>

        <div className="w-full max-w-xs h-72 flex flex-col items-center justify-center shadow-lg bg-black p-4 rounded-lg text-center">
          <img src={contact2} alt="Email Us" width={90} className="mb-4" />
          <h1 className='text-lg font-semibold'>Email us</h1>
          <p>support@bytone.in</p>
        </div>

        <div className="w-full max-w-xs h-72 flex flex-col items-center justify-center shadow-lg bg-black p-4 rounded-lg text-center">
          <img src={contact3} alt="Call Us" width={90} className="mb-4" />
          <h1 className='text-lg font-semibold'>Call us</h1>
          <p>+91 70106 77045 / +91 96002 51611</p>
        </div>

      </div>
    </div>
  )
}

export default UpcomingProject


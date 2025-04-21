import React from 'react'
import footerBG from '../../assets/footer.png';

const Contactnav = () => {
  return (
      <div className="grid grid-cols-1 justify-center items-center text-center text-white pt-10 pb-10 bg-cover bg-center bg-no-repeat"  style={{ backgroundImage: `url(${footerBG})` }}
         >
    <hr className='w-[50px] h-[10px] bg-red-950 mx-auto mb-4'/>
    <h1 className="text-4xl font-semibold mb-4">Talk to an Expert!</h1>
    <p className='mb-6'>Whether you have queries about our Fire Protection Services or need expert help for your enterprise,<br/>
    consult with our business experts by telephone orE-Mail, and we will be sure to back to you as soon as possible.</p>
    <p className='bg-gray-700 inline-block lg:w-92 px-8 py-4 mx-auto'>BT Safe - Fire Fighting Training</p>
  </div>
  )
}

export default Contactnav ;

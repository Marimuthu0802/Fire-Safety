import React from 'react'
import client1 from '../../assets/client1.jpg';
import client2 from '../../assets/clitent2.jpg';

const ClientImage = () => {
  return (
    <div className='grid-cols-1 md:flex justify-center items-center mt-10 mb-10  ml-2 space-y-5 gap-5'>
    <img src={client1} alt="client1" />
    <img src={client2} alt="client2" className="mb-5" />

    </div>
  )
}

export default ClientImage

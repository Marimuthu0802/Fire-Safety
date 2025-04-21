import React from 'react'
import footerBG from '../../assets/footer.png';

const Clientnav = () => {
  return (
      <div className="grid grid-cols-1 justify-center items-center text-center text-white pt-10 pb-10 bg-cover bg-center bg-no-repeat"  style={{ backgroundImage: `url(${footerBG})` }}
         >
      <hr className='w-[50px] h-[10px] bg-red-950 mx-auto mb-4'/>
      <h1 className="text-4xl font-semibold mb-6">OUR CLIENT</h1>
      <p className='bg-gray-700 inline-block lg:w-92 px-8 py-4 mx-auto'>BT Safe - Our Clients</p>
    </div>
  )
}

export default Clientnav


// import React from 'react';

// const Clientnav = () => {
//   return (
    // <div className="text-center py-10 text-white relative bg-[url('../../assets/footer.png')]">
//       {/* Red line above heading */}
//       <div className="w-[50px] h-[10px] bg-red-700 mx-auto mb-4 "></div>

//       {/* Heading */}
//       <h1 className="text-4xl font-semibold mb-6">Our Client</h1>

//       {/* Description box */}
//       <div className="bg-gray-700 inline-block px-8 py-4 rounded-md">
//         <p className="text-white text-lg">BT Safe - Our Clients</p>
//       </div>
//     </div>
//   );
// };

// export default Clientnav;
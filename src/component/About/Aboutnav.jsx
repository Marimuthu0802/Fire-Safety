import React from "react";


const AboutImage = () => {
  return (
    <div className='grid-cols-1 justify-center items-center text-center text-white pt-10 pb-10 bg-[url("src/assets/footer.png")]'>
    <hr className='w-[50px] h-[10px] bg-red-950 mx-auto mb-4'/>
    <h1 className="text-4xl font-semibold mb-6">ABOUT</h1>
    <p className='bg-gray-700 inline-block lg:w-92 px-8 py-4'>BT Safe - About</p>
  </div>
  );
};

export default AboutImage;
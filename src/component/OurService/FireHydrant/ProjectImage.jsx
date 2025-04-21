import React from 'react';


import hydrant from '../../../assets/hydrant.jpg';
import hydrant1 from '../../../assets/hydrant1.jpeg';
import hydrant2 from '../../../assets/hydrant2.jpeg';
import hydrant3 from '../../../assets/hydrant3.jpeg';
import hydrant5 from '../../../assets/hydrant5.jpeg';
import hydrant6 from '../../../assets/hydrant6.jpeg';
import hydrant7 from '../../../assets/hydrant7.jpeg';
import hydrant8 from '../../../assets/hydrant8.jpeg';
import hydrant9 from '../../../assets/hydrant9.jpeg';
import hydrant10 from '../../../assets/hydrant10.jpeg';
import hydrant11 from '../../../assets/hydrant11.jpeg';
import hydrant12 from '../../../assets/hydrant12.jpeg';
import hydrant13 from '../../../assets/hydrant13.jpeg';
import hydrant14 from '../../../assets/hydrant14.jpeg';
import hydrant15 from '../../../assets/hydrant15.jpeg';
import hydrant16 from '../../../assets/hydrant16.jpeg';
import hydrant17 from '../../../assets/hydrant17.jpeg';
import hydrant18 from '../../../assets/hydrant18.jpeg';
import hydrant19 from '../../../assets/hydrant19.jpeg';
import hydrant20 from '../../../assets/hydrant20.jpeg';


const images = [
  hydrant, hydrant1, hydrant2, hydrant3, hydrant5,
  hydrant6, hydrant7, hydrant8, hydrant9, hydrant10,
  hydrant11, hydrant12, hydrant13, hydrant14, hydrant15,
  hydrant16, hydrant17, hydrant18, hydrant19, hydrant20,
];

const ProjectImage = () => {
  return (
    <div className='flex flex-col items-center text-center gap-8 px-4 py-10'>
      <h1 className='text-3xl md:text-4xl font-bold w-72 md:w-2xl bg-red-500 text-white px-6 py-2 rounded-lg shadow-md'>
        PROJECT WORKS
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {images.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`Hydrant ${index + 1}`}
            loading="lazy"
            className="w-[300px] h-[300px] object-cover rounded-md shadow-lg"
          />
        ))}
      </div>
  
    </div>
  );
};

export default ProjectImage;

import React from 'react';

// Import images
import fight1 from '../../../assets/fight1.jpeg';
import fight2 from '../../../assets/fight2.jpeg';
import fight3 from '../../../assets/fight3.jpeg';
import fight4 from '../../../assets/fight4.jpeg';
import fight5 from '../../../assets/fight5.jpeg';
import fight6 from '../../../assets/fight6.jpeg';
import fight7 from '../../../assets/fight7.jpeg';
import fight8 from '../../../assets/fight8.jpeg';
import fight9 from '../../../assets/fight9.jpeg';
import fight10 from '../../../assets/fight10.jpeg';
import fight11 from '../../../assets/fight11.jpeg';
import fight12 from '../../../assets/fight12.jpeg';
import fight13 from '../../../assets/fight13.jpeg';
import fight14 from '../../../assets/fight14.jpeg';
import fight15 from '../../../assets/fight15.jpg';
import fight16 from '../../../assets/fight16.jpeg';
import fight17 from '../../../assets/fight17.jpeg';
import fight18 from '../../../assets/fight18.jpeg';
import fight19 from '../../../assets/fight19.jpeg';
import fight20 from '../../../assets/fight20.jpeg';

const images = [
  fight1, fight2, fight3, fight4, fight5,
  fight6, fight7, fight8, fight9, fight10,
  fight11, fight12, fight13, fight14, fight15,
  fight16, fight17, fight18, fight19, fight20,
];

const Fighting = () => {
  return (
    <div className='flex flex-col items-center text-center gap-8 px-4 py-10'>
      <h1 className='text-3xl md:text-4xl font-bold w-72 md:w-2xl bg-red-500 text-white px-6 py-2 rounded-lg shadow-md'>
        Our Training Sessions
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {images.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`fight${index + 1}`}
            loading="lazy"
            className="w-[300px] h-[300px] object-cover rounded-md shadow-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default Fighting;

import React from 'react';


import aid1 from '../../../assets/aid1.jpeg';
import aid2 from '../../../assets/aid2.jpeg';
import aid3 from '../../../assets/aid3.jpeg';
import aid4 from '../../../assets/aid4.jpeg';
import aid5 from '../../../assets/aid5.jpeg';
import aid6 from '../../../assets/aid6.jpeg';
import fight14 from '../../../assets/fight14.jpeg';
import fight20 from '../../../assets/fight20.jpeg';

const TrainingSession = () => {
  return (
    <div className="flex flex-col items-center text-center gap-8 px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold w-72 md:w-2xl2xl lg:w-7xl bg-red-500 text-white px-6 py-2 rounded-lg shadow-md">
        TRAINING SESSION
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <img src={aid1} alt="first Aid image1" className="w-[300px] h-[300px] object-cover rounded-md shadow-lg" />
        <img src={aid2} alt="first Aid image2" className="w-[300px] h-[300px] object-cover rounded-md shadow-lg" />
        <img src={aid3} alt="first Aid image3" className="w-[300px] h-[300px] object-cover rounded-md shadow-lg" />
        <img src={aid4} alt="first Aid image4" className="w-[300px] h-[300px] object-cover rounded-md shadow-lg" />
        <img src={aid5} alt="first Aid image5" className="w-[300px] h-[300px] object-cover rounded-md shadow-lg" />
        <img src={aid6} alt="first Aid image6" className="w-[300px] h-[300px] object-cover rounded-md shadow-lg" />
        <img src={fight14} alt="first Aid image7" className="w-[300px] h-[300px] object-cover rounded-md shadow-lg" />
        <img src={fight20} alt="first Aid image8" className="w-[300px] h-[300px] object-cover rounded-md shadow-lg" />
      </div>
    </div>
  );
};

export default TrainingSession;

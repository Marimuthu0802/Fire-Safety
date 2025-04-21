// import React from 'react';

// const AboutContent2 = () => {
//   const skillData = [
//     { name: "Planning", level: "95%" },
//     { name: "Design", level: "90%" },
//     { name: "Development", level: "85%" },
//     { name: "Delivery", level: "70%" },
//   ];

//   return (
//     <div className='flex flex-col lg:flex-row justify-center items-center bg-[url("../../assets/aboutbg.jpg")] bg-center bg-cover bg-no-repeat text-white px-4 py-10 space-x-3'>
      
    
//       <div id="skills" className="lg:w-1/2 w-full mb-10 lg:mb-0">
//         <div className="max-w-2xl mx-auto space-y-4">
//           <h1 className='text-2xl md:text-3xl font-semibold text-center lg:text-left'>
//             Our Fire Safety skills and work
//           </h1>
//           <h1 className='text-2xl md:text-3xl font-semibold text-center lg:text-left'>
//             experience in Safety Projects
//           </h1>
//           <p className='text-sm md:text-base text-justify'>
//             Determined to stay ahead in the combative market, we provide free demos for the safety product and equipment.
//             Our pillars for the business's success and growth are our infrastructures and motivated employees.
//           </p>

//           {skillData.map((skill, index) => (
//             <div key={index}>
//               <h3 className="font-bold text-base md:text-lg">{skill.name}</h3>
//               <div className="w-60 bg-gray-300 h-4 mt-1 rounded-sm "style={{}}>
                
//                 <div
//                   className="bg-yellow-500  h-4 rounded-md text-xs md:text-sm pl-2 flex items-center"
//                   style={{ width: skill.level}}
//                 >
//                   {skill.level}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="lg:w-1/2 w-full flex justify-center">
//         <img
//           src="../../assets/fireprotectionBG.jpg"
//           alt="aboutcon2"
//           className="max-w-full h-auto rounded-md shadow-lg object-cover"
//         />
//       </div>

//     </div>
//   );
// };

// export default AboutContent2;



import React, { useEffect, useState } from 'react';
import aboutbg from '../../assets/aboutbg.jpg';
import fireprotectionBG from '../../assets/fireprotectionBG.jpg';


const AboutContent2 = () => {
  const skillData = [
    { name: "Planning", level: "95%" },
    { name: "Design", level: "90%" },
    { name: "Development", level: "85%" },
    { name: "Delivery", level: "70%" },
  ];

  const [animatedLevels, setAnimatedLevels] = useState(
    skillData.map(() => "0%")
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedLevels(skillData.map(skill => skill.level));
    }, 1000); // delay to allow animation on mount
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
    className="flex flex-col lg:flex-row justify-center items-center bg-center bg-cover bg-no-repeat text-white px-4 py-10 gap-10"
    style={{ backgroundImage: `url(${aboutbg})` }}
  >
  
      
      {/* Text & Skills */}
      <div id="skills" className="lg:w-1/2 w-full">
        <div className="max-w-2xl mx-auto space-y-4">
          <h1 className='text-2xl md:text-3xl font-semibold text-center lg:text-left'>
            Our Fire Safety skills and work
          </h1>
          <h1 className='text-2xl md:text-3xl font-semibold text-center lg:text-left'>
            experience in Safety Projects
          </h1>
          <p className='text-sm md:text-base text-justify'>
            Determined to stay ahead in the combative market, we provide free demos for the safety product and equipment.
            Our pillars for the business's success and growth are our infrastructures and motivated employees.
          </p>

          {skillData.map((skill, index) => (
            <div key={index}>
              <h3 className="font-bold text-base md:text-lg text-left md:text-center lg:text-left">{skill.name}</h3>
              <div className="w-full md:w-60 lg:w-60 bg-gray-300 h-4 mt-1 rounded-sm mx-auto lg:mx-0">
                <div
                    className="bg-yellow-500 h-4 rounded-md text-xs md:text-sm pl-2 flex items-center transition-all duration-[3000ms] ease-in-out"
                     style={{ width: animatedLevels[index] }}
                  >
                  {animatedLevels[index]}
                </div> 
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Image */}
      <div className="lg:w-1/2 w-full flex justify-center">
      <img
      src={fireprotectionBG}
      alt="aboutcon2"
      className="w-full max-w-md lg:max-w-full h-auto rounded-md shadow-lg object-cover"
      />

      </div>
    </div>
  );
};

export default AboutContent2;

import React from 'react';
import hydrantProjectImg from '../../../assets/hydrantproject.jpg';

const HydrantProject = () => {
  return (
    <div className="px-4 py-10 max-w-6xl mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8  ">
        FIRE HYDRANT PROJECTS
      </h1>

      <div className="flex flex-col items-center">
      <img
        src={hydrantProjectImg}
        alt="FIRE HYDRANT PROJECTS"
        loading="lazy"
        className="w-full rounded-lg shadow-lg mb-8"
      />


        <div className="text-base sm:text-md text-justify space-y-6">
          <p>
            Fire Hydrant projects are related to fire protection services, in which water has to be
            supplied at sufficient pressure through the pipeline to prevent the spreading of fire in
            buildings and to save human life. It's an emergency equipment and safety measure needed
            in buildings to provide a water source for fire authorities during a fire.
          </p>
          <p>
            Fire hydrant systems are designed to operate even if the structure collapses.
            Connections to the pipes are accessed with hydrant wrenches and standpipes, which are
            then linked to fire trucks. The pressure of the hydrant pipework is maintained at 6
            Kg/cm² constantly. In the event of a fire, water is pumped through the AC motor, and the
            system is automatically shut off once the required pressure is reached.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HydrantProject;


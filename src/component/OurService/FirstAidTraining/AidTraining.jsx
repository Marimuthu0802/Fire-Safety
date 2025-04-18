import React from 'react'

const AidTraining = () => {
  return (
    <div className="px-4 py-10 max-w-6xl mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8  ">
      Best First Aid Training by BTSafe 
      </h1>

      <div className="flex flex-col items-center">
        <img
          src="src\assets\firstaid.jpeg"
          alt="FIRE HYDRANT PROJECTS"
          className="w-full rounded-lg shadow-lg mb-8"
        />

        <div className="text-base sm:text-md text-justify space-y-6">
          <p>
          First aid training is a course that teaches individuals how to provide basic medical care in the event of an injury or illness. This training can be especially important in situations where professional medical help is not immediately available.
          </p>
          <p>
          First aid training typically covers a wide range of topics, including how to assess and respond to emergencies, how to provide basic life support, and how to treat common injuries and illnesses. Some common topics that may be covered in first aid training include:
          </p>
          <ol className="list-decimal ml-6">
            <li>Cardiopulmonary resuscitation (CPR)</li>
            <li>Bleeding control</li>
            <li>Shock management</li>
            <li>Choking first aid</li>
            <li>Burns treatment</li>
            <li>Fracture and sprain management</li>
            <li>Heat stroke and heat exhaustion</li>
            <li>Hypothermia</li>
            <li>Poisoning</li>
           </ol>
          <p>
          First aid training is typically provided by certified instructors who have a background in emergency medical care. These instructors will provide both theoretical and practical training, allowing participants to learn the necessary skills and knowledge, as well as practice applying them in simulated emergency situations.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AidTraining

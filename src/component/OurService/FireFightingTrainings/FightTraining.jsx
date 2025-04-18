import React from 'react'

const FightTraining = () => {
  return (
    <div className="px-4 py-10 max-w-6xl mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8  ">
      Best Fire Fighting Trainings by BTSafe
      </h1>

      <div className="flex flex-col items-center">
        <img
          src="src\assets\firefighting.jpg"
          alt=" Fire Fighting Trainings"
          className="w-full rounded-lg shadow-lg mb-8"
        />

        <div className="text-base sm:text-md text-justify space-y-6">
          <p>
          Fire fighting training is an important part of ensuring the safety and well-being of individuals and communities. Our company is proud to offer comprehensive fire fighting training programs to help individuals learn the skills and knowledge necessary to effectively respond to and manage fire emergencies.
          </p>
          <p>
          Our fire fighting training programs are designed to provide participants with the necessary knowledge and hands-on experience to safely and effectively respond to and manage fire emergencies. Our programs cover a wide range of topics, including fire prevention, fire behavior, fire suppression techniques, and emergency response procedures
          </p>
          <p>
          Our training programs are led by experienced and certified fire fighting professionals who have a wealth of knowledge and expertise in this field. They will provide participants with the necessary knowledge and hands-on training to effectively respond to and manage fire emergencies.
          </p>
          <p>
          In addition to traditional classroom training, our fire fighting training programs also include hands-on practice sessions, where participants can apply the skills and techniques they have learned in a simulated fire environment. This allows participants to gain valuable experience in a controlled setting, helping them to feel more confident and prepared to respond to real-life fire emergencies.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FightTraining

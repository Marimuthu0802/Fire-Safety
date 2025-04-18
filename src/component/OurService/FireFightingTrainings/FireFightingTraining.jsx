import React from 'react'
import AboveNav from '../../home/AboveNav'
import Navbar from '../../home/FireNav'
import MainFooter from '../../home/MainFooter'
import SubFooter from '../../home/SubFooter'
import FightingNav from './FightingNav'
import FightTraining from './FightTraining'
import FightTrainingWork from './FightTrainingWork'

const FireFightingTraining = () => {
  return (
    <div>
      <AboveNav/>
      <Navbar/>
      <FightingNav/>
      <FightTraining/>
     <FightTrainingWork/>
      <MainFooter/>
      <SubFooter/>
    </div>
  )
}

export default FireFightingTraining ;

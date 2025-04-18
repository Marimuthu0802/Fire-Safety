import React from 'react'
import AboveNav from '../../home/AboveNav'
import Navbar from '../../home/FireNav'
import MainFooter from '../../home/MainFooter'
import SubFooter from '../../home/SubFooter'
import FirstAidNav from './FirstAidNav'
import TrainingSession from './TrainingSession'
import AidTraining from './AidTraining'

const FirstAid = () => {
  return (
    <div>
      <AboveNav/>
      <Navbar/>
      <FirstAidNav/>
      <AidTraining/>
      <TrainingSession/>
      <MainFooter/>
      <SubFooter/>
    </div>
  )
}

export default FirstAid

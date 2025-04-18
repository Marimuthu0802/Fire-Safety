import React from 'react'
import AboveNav from '../../home/AboveNav'
import Navbar from '../../home/FireNav'
import MainFooter from '../../home/MainFooter'
import AlarmNav from './AlarmNav'
import SubFooter from '../../home/SubFooter'
import AlarmProject from './AlarmProject'
import AlarmWorks from './AlarmWorks'
const FireAlarm = () => {
  return (
    <div>
      <AboveNav/>
      <Navbar/>
      <AlarmNav/>
      <AlarmProject/>
      <AlarmWorks/>
      <MainFooter/>
      <SubFooter/>

    </div>
  )
}

export default FireAlarm

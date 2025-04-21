import React from 'react'
import AboveNav from '../../home/AboveNav'
import Navbar from '../../home/FireNav'
import MainFooter from '../../home/MainFooter'
import SubFooter from '../../home/SubFooter'
import FireHydrantNav from './FireHydrantNav'
import Hydrant1 from './hydrant1'
import Hydrant2 from './Hydrant2'


const FireHydrants = () => {
  return (
    <div>
      <AboveNav/>
      <Navbar/>
      <FireHydrantNav/>
      <Hydrant1/>
      <Hydrant2/>
      <MainFooter/>
      <SubFooter/>
    </div>
  )
}

export default FireHydrants

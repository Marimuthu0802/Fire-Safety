import React from 'react'
import AboveNav from '../../home/AboveNav'
import Navbar from '../../home/FireNav'
import FireHydrantNav from './FireHydrantNav'

import Hydrant2 from './Hydrant2'
import MainFooter from '../../home/MainFooter'
import SubFooter from '../../home/SubFooter'
import Hydra from './Hydra'

const HydrantFire = () => {
  return (
    <div>
      <AboveNav/>
      <Navbar/>
      <FireHydrantNav/>
     <Hydra />
      <Hydrant2/>
      <MainFooter/>
      <SubFooter/>
    </div>
  )
}

export default HydrantFire

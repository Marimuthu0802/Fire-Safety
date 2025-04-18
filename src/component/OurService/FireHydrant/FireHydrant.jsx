import React from 'react'
import AboveNav from '../../home/AboveNav'
import Navbar from '../../home/FireNav'
import MainFooter from '../../home/MainFooter'
import SubFooter from '../../home/SubFooter'
import HydrantNav from './HydrantNav'
import HydrantProject from './HydrantProject'

import ProjectImage from './ProjectImage'
const FireHydrant = () => {
  return (
    <div>
       <AboveNav/>
       <Navbar/>
       <HydrantNav/>
       <HydrantProject/>
       <ProjectImage/>
       <MainFooter/>
       <SubFooter/>
    </div>
  )
}

export default FireHydrant

import React from 'react'
import AboveNav from '../../home/AboveNav'
import Navbar from '../../home/FireNav'
import MainFooter from '../../home/MainFooter'
import SubFooter from '../../home/SubFooter'
import Extinguisher1 from './Extinguisher1'
import Extinguisher2 from './Extinguisher2'

import ExtinNav from './ExtinNav'


const FireExtinguisher = () => {
  return (
    <div>
     <AboveNav/> 
     <Navbar/>
     <ExtinNav/>
    <Extinguisher1/>
    <Extinguisher2/>
     <MainFooter/>
     <SubFooter/>
    </div>
  )
}

export default FireExtinguisher

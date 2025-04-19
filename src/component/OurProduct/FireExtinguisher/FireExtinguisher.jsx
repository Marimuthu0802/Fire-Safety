import React from 'react'
import AboveNav from '../../home/AboveNav'
import Navbar from '../../home/FireNav'
import MainFooter from '../../home/MainFooter'
import SubFooter from '../../home/SubFooter'
import Extinguisher1 from './Extinguisher1'
import Extinguisher2 from './Extinguisher2'
const FireExtinguisher = () => {
  return (
    <div>
     <AboveNav/> 
     <Navbar/>
    <Extinguisher1/>
    <Extinguisher2/>
     <MainFooter/>
     <SubFooter/>
    </div>
  )
}

export default FireExtinguisher

import React from 'react'
import AboveNav from '../home/AboveNav'
import Navbar from '../home/FireNav'
import Contactnav from './Contactnav'
import MainFooter from '../home/MainFooter'
import SubFooter from '../home/SubFooter'
import WayToContact from './WayToContact'

const Contact = () => {
  return (
    <div>
      <AboveNav/>
      <Navbar/>
      <Contactnav/>
      <WayToContact/>
      <MainFooter/>
      <SubFooter/>
    </div>
  )
}

export default Contact

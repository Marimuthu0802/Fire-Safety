import React from 'react'
import Navbar from '../home/FireNav'
import SubFooter from '../home/SubFooter'

import AboutImage from './Aboutnav'
import AboveNav from '../home/AboveNav'
import MainFooter from '../home/MainFooter'
import UpcomingProject from './UpcomingProject'
import AboutContent1 from './AboutContent1'
import AboutContent2 from './AboutContent2'


const About = () => {
  return (
    <div>
      <AboveNav/>
      <Navbar/>
      <AboutImage/>
      <AboutContent1/>
      <AboutContent2/>
      <UpcomingProject/>
      <MainFooter/>
      <SubFooter/>
    </div>
  )
}

export default About

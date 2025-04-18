import React from 'react'

import Navbar from '../home/FireNav'
import AboveNav from '../home/AboveNav'
import SubFooter from '../home/SubFooter'
import ClientImage from './ClientImage'
import MainFooter from '../home/MainFooter'
import Clientnav from './Clientnav'


const Client = () => {
  return (
    <div>
      <AboveNav/>
      <Navbar/>
      <Clientnav/>
      <ClientImage/>
      <MainFooter/>
      <SubFooter/>
    </div>
  )
}

export default Client

import React from 'react'
import AboveNav from './AboveNav';
import Navbar from './FireNav';
import HomeSlide from './HomeSlide';
import HomeContent from './HomeContent';
import HomeContent2 from './HomeContent2';
import WhyChooseus from './WhyChooseus';
import BrandCarousel from './footerSlide';
import BgFire from './BgFire';
import MainFooter from './MainFooter';
import SubFooter from './SubFooter';


const Home = () => {
  return (
    <div>
      <AboveNav/>
      <Navbar/>
      <HomeSlide/>
      <HomeContent/>
      <HomeContent2/>
      <WhyChooseus/>
      <BrandCarousel/>
      <BgFire/>
      <MainFooter/>
      <SubFooter/>
    </div> 
  )
}

export default Home ;

'use client'

import React from 'react'
import MainHome from './MainHome'

import Header  from '../Shared/Header/Navbar'
import Footer from '../Shared/Footer/Footer'
import SliderBanner from './SliderBanner'

import '../Style'
import PropertiesSlider from './PropertiesSlider'
import HomeOffers from './HomeOffers'
import Gallery from './Gallery'

const index = () => {
  return (
    <>

    <Header />
    <SliderBanner />
    <MainHome />
    <PropertiesSlider />
    <HomeOffers />
    <Gallery />
    <Footer />
    </>
  )
}

export default index
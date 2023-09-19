import React from 'react'

import Header from '../../Shared/Header/Navbar'
import Footer from '../../Shared/Footer/Footer'

import '../../Style'

import RoomsSuitsHeader from './RoomsSuitsHeader'
import RoomsSuitsContent from './RoomsSuitsContent'
import RoomSuitesBanner from './RoomSuitesBanner'
import RoomSuitesSlider from './RoomSuitesSlider'

const index = () => {
  return (
    <>
    <Header />
    <RoomsSuitsHeader />
    <RoomSuitesBanner />
    <RoomsSuitsContent />
    <RoomSuitesSlider />
    <Footer />
    </>
  )
}

export default index
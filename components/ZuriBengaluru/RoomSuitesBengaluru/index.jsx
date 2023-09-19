import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import RoomSuitesBengaluruHeader from './RoomSuitesBengaluruHeader'
import RoomSuiteBengaluruBanner from './RoomSuiteBengaluruBanner'
import RoomSuiteBengaluruContent from './RoomSuiteBengaluruContent'
import RoomSuiteBengaluruSlider from './RoomSuiteBengaluruSlider'
import Footer from '@/components/Shared/Footer/Footer'

import '../../Style'

const index = () => {
  return (
    <>
    <Header />
        <RoomSuitesBengaluruHeader />
        <RoomSuiteBengaluruBanner />
        <RoomSuiteBengaluruContent />
        <RoomSuiteBengaluruSlider />
    <Footer />
    </>
  )
}

export default index
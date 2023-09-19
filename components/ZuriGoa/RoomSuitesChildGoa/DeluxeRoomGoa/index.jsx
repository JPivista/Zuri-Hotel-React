import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import SharedRoomSuitesGoaHeader from '../SharedRoomSuitesGoaHeader'
import DeluxeRoomGoaBanner from './DeluxeRoomGoaBanner'
import DeluxeRoomGoaContent from './DeluxeRoomGoaContent'
import SharedRoomSuitesGoaSlider from '../SharedRoomSuitesGoaSlider'
import Footer from '@/components/Shared/Footer/Footer'

import '../../../Style'

const index = () => {
  return (
    <>
        <Header />
            <SharedRoomSuitesGoaHeader />
            <DeluxeRoomGoaBanner />
            <DeluxeRoomGoaContent />
            <SharedRoomSuitesGoaSlider />
        <Footer />
    </>
  )
}

export default index
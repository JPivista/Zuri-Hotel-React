import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import SharedRoomSuitesGoaHeader from '../SharedRoomSuitesGoaHeader'
import SuperiorRoomGoaBanner from './SuperiorRoomGoaBanner'
import SuperiorRoomGoaContent from './SuperiorRoomGoaContent'
import SharedRoomSuitesGoaSlider from '../SharedRoomSuitesGoaSlider'
import Footer from '@/components/Shared/Footer/Footer'

import '../../../Style'

const index = () => {
  return (
    <>
        <Header />
            <SharedRoomSuitesGoaHeader />
            <SuperiorRoomGoaBanner />
            <SuperiorRoomGoaContent />
            <SharedRoomSuitesGoaSlider />
        <Footer />
    </>
  )
}

export default index
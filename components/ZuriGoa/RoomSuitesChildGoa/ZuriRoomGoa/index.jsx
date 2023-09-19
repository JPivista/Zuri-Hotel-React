import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import SharedRoomSuitesGoaHeader from '../SharedRoomSuitesGoaHeader'
import ZuriRoomGoaBanner from './ZuriRoomGoaBanner'
import ZuriRoomGoaContent from './ZuriRoomGoaContent'
import SharedRoomSuitesGoaSlider from '../SharedRoomSuitesGoaSlider'
import Footer from '@/components/Shared/Footer/Footer'

import '../../../Style'

const index = () => {
  return (
   <>
        <Header />
            <SharedRoomSuitesGoaHeader />
            <ZuriRoomGoaBanner />
            <ZuriRoomGoaContent />
            <SharedRoomSuitesGoaSlider />
        <Footer />
   </>
  )
}

export default index
import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import SharedRoomSuitesGoaHeader from '../SharedRoomSuitesGoaHeader'
import PremiumRoomGoaBanner from './PremiumRoomGoaBanner'
import PremiumRoomGoaContent from './PremiumRoomGoaContent'
import SharedRoomSuitesGoaSlider from '../SharedRoomSuitesGoaSlider'
import Footer from '@/components/Shared/Footer/Footer'

import '../../../Style'

const index = () => {
  return (
    <>
        <Header />
            <SharedRoomSuitesGoaHeader />
            <PremiumRoomGoaBanner />
            <PremiumRoomGoaContent />
            <SharedRoomSuitesGoaSlider />
        <Footer />
    </>
  )
}

export default index
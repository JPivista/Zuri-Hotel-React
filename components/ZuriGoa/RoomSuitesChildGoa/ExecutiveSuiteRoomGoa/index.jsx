import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import SharedRoomSuitesGoaHeader from '../SharedRoomSuitesGoaHeader'
import ExecutiveSuiteRoomGoaBanner from './ExecutiveSuiteRoomGoaBanner'
import ExecutiveSuiteRoomGoaContent from './ExecutiveSuiteRoomGoaContent'
import SharedRoomSuitesGoaSlider from '../SharedRoomSuitesGoaSlider'
import Footer from '@/components/Shared/Footer/Footer'

import '../../../Style'

const index = () => {
  return (
    <>
        <Header />
            <SharedRoomSuitesGoaHeader />
            <ExecutiveSuiteRoomGoaBanner />
            <ExecutiveSuiteRoomGoaContent />
            <SharedRoomSuitesGoaSlider />
        <Footer />
    </>
  )
}

export default index
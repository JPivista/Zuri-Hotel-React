import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import ZuriGoaRoomSuitesHeader from './ZuriGoaRoomSuitesHeader'
import ZuriGoaRoomSuitesBanner from './ZuriGoaRoomSuitesBanner'
import ZuriGoaRoomSuitesSlider from './ZuriGoaRoomSuitesSlider'
import ZuriGoaRoomSuitesContent from './ZuriGoaRoomSuitesContent'
import Footer from '@/components/Shared/Footer/Footer'

import '../../Style'

const index = () => {
  return (
    <>
    <Header />
        <ZuriGoaRoomSuitesHeader />
        <ZuriGoaRoomSuitesBanner />
        <ZuriGoaRoomSuitesContent />
        <ZuriGoaRoomSuitesSlider />
    <Footer />
    </>
  )
}

export default index
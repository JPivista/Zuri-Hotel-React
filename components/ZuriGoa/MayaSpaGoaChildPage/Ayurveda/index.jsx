import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import SharedMayaSpaGoaHeader from '../SharedMayaSpaGoaHeader'
import AyurvedaGoaBanner from './AyurvedaGoaBanner'
import AyurvedaGoaContent from './AyurvedaGoaContent'
import AyurvedaGoaSlider from './AyurvedaGoaSlider'
import Footer from '@/components/Shared/Footer/Footer'

import '../../../Style'

const index = () => {
  return (
    <>
        <Header />
            <SharedMayaSpaGoaHeader />
            <AyurvedaGoaBanner />
            <AyurvedaGoaContent />
            <AyurvedaGoaSlider />
        <Footer />
    </>
  )
}

export default index
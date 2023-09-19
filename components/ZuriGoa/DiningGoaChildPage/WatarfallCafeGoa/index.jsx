import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import WaterFallGoaBanner from './WaterFallGoaBanner'
import WatarFallGoaContent from './WatarFallGoaContent'
import SharedDiningGoaHeader from '../SharedDiningGoaHeader'
import SharedDiningGoaSlider from '../SharedDiningGoaSlider'
import Footer from '@/components/Shared/Footer/Footer'

import '../../../Style'

const index = () => {
  return (
    <>
        <Header />
            <SharedDiningGoaHeader />
            <WaterFallGoaBanner />
            <WatarFallGoaContent />
            <SharedDiningGoaSlider />
        <Footer />
    </>
  )
}

export default index
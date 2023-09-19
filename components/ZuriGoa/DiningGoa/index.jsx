import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import DiningGoaHeader from './DiningGoaHeader'
import DiningGoaBanner from './DiningGoaBanner'
import DiningGoaContent from './DiningGoaContent'
import DiningGoaSlider from './DiningGoaSlider'
import DiningGoaOffers from './DiningGoaOffers'
import Footer from '@/components/Shared/Footer/Footer'

import '../../Style'

const index = () => {
  return (
    <>
    <Header />
    <DiningGoaHeader />
    <DiningGoaBanner />
    <DiningGoaContent />
    <DiningGoaSlider />
    <DiningGoaOffers />
    <Footer />
    </>
  )
}

export default index
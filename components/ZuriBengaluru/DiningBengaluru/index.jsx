import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import DiningBengaluruHeader from './DiningBengaluruHeader'
import DiningBengalurBanner from './DiningBengalurBanner'
import DiningBengaluruContent from './DiningBengaluruContent'
import DiningBengaluruSlider from './DiningBengaluruSlider'
import Footer from '@/components/Shared/Footer/Footer'

import '../../Style'

const index = () => {
  return (
    <>
    <Header />
        <DiningBengaluruHeader />
        <DiningBengalurBanner />
        <DiningBengaluruContent />
        <DiningBengaluruSlider />
    <Footer />
    </>
  )
}

export default index
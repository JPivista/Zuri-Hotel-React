import React from 'react'

import '../../../Style'
import Header from '@/components/Shared/Header/Navbar'
import JuniorSuiteBengaluruBanner from './JuniorSuiteBengaluruBanner'
import JuniorSuiteBengaluruContent from './JuniorSuiteBengaluruContent'
import SharedZuriRoomBengaluruSlider from '../SharedZuriRoomBengaluruSlider'
import Footer from '@/components/Shared/Footer/Footer'
import SharedZuriRoomBengaluruHeader from '../SharedZuriRoomBengaluruHeader'


const index = () => {
  return (
    <>
        <Header />
            <SharedZuriRoomBengaluruHeader />
            <JuniorSuiteBengaluruBanner />
            <JuniorSuiteBengaluruContent />
            <SharedZuriRoomBengaluruSlider />
        <Footer />
    </>
  )
}

export default index
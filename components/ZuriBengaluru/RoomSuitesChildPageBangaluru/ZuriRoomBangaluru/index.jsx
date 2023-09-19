import React from 'react'

import '../../../Style'
import Header from '@/components/Shared/Header/Navbar'
import SharedZuriRoomBengaluruHeader from '../SharedZuriRoomBengaluruHeader'
import ZuriRoomBengaluruBanner from './ZuriRoomBengaluruBanner'
import ZuriRoomBengaluruContent from './ZuriRoomBengaluruContent'
import SharedZuriRoomBengaluruSlider from '../SharedZuriRoomBengaluruSlider'
import Footer from '@/components/Shared/Footer/Footer'

const index = () => {
  return (
    <>
        <Header />
            <SharedZuriRoomBengaluruHeader />
            <ZuriRoomBengaluruBanner />
            <ZuriRoomBengaluruContent />
            <SharedZuriRoomBengaluruSlider />
        <Footer />
    </>
  )
}

export default index
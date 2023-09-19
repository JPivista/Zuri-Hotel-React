import React from 'react'

import '../../../Style'
import Header from '@/components/Shared/Header/Navbar'
import SharedZuriRoomBengaluruHeader from '../SharedZuriRoomBengaluruHeader'
import ClubRoomBengalurBanner from './ClubRoomBengalurBanner'
import ClubRoomContent from './ClubRoomContent'
import SharedZuriRoomBengaluruSlider from '../SharedZuriRoomBengaluruSlider'
import Footer from '@/components/Shared/Footer/Footer'

const index = () => {
  return (
    <>
      <Header />
        <SharedZuriRoomBengaluruHeader />
        <ClubRoomBengalurBanner />
        <ClubRoomContent />
        <SharedZuriRoomBengaluruSlider />
      <Footer />
    </>
  )
}

export default index
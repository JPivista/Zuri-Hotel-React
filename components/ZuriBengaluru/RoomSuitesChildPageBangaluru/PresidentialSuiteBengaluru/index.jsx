import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import SharedZuriRoomBengaluruHeader from '../SharedZuriRoomBengaluruHeader'
import PresidentialSuiteBengaluruBanner from './PresidentialSuiteBengaluruBanner'
import PresidentialSuiteBengaluruContent from './PresidentialSuiteBengaluruContent'
import SharedZuriRoomBengaluruSlider from '../SharedZuriRoomBengaluruSlider'
import Footer from '@/components/Shared/Footer/Footer'

import '../../../Style'

const index = () => {
  return (
    <>
        <Header />
            <SharedZuriRoomBengaluruHeader />
            <PresidentialSuiteBengaluruBanner />
            <PresidentialSuiteBengaluruContent />
            <SharedZuriRoomBengaluruSlider />
        <Footer />
    </>
  )
}

export default index
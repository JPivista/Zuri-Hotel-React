import React from 'react'

import Header from '@/components/Shared/Header/Navbar'
import Footer from '@/components/Shared/Footer/Footer'
import ZuriSharedHeader from '../SharedHeader'
import ZuriSharedSlider from '../SharedSlider'
import ZuriRoomContent from './ZuriRoomContent'
import ZuriRoomBanner from './ZuriRoomBanner'


import '../../../Style'

const index = () => {
  return (
    <>
    <Header />
    <ZuriSharedHeader />
    <ZuriRoomBanner />
    <ZuriRoomContent />
    <ZuriSharedSlider />
    <Footer />
    </>
  )
}

export default index
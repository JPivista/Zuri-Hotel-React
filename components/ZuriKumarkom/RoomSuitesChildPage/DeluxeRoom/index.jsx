import React from 'react'

import Header from '@/components/Shared/Header/Navbar'
import Footer from '@/components/Shared/Footer/Footer'
import ZuriSharedHeader from '../SharedHeader'
import ZuriSharedSlider from '../SharedSlider'
import DeluxeRoomBanner from './DeluxeRoomBanner'
import DeluxeRoomContent from './DeluxeRoomContent'

import '../../../Style'

const index = () => {
  return (
    <>
    <Header />
    <ZuriSharedHeader />
    <DeluxeRoomBanner />
    <DeluxeRoomContent />
    <ZuriSharedSlider />
    <Footer />  
    </>
  )
}

export default index
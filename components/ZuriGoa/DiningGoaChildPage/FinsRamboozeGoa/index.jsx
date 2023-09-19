import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import SharedDiningGoaHeader from '../SharedDiningGoaHeader'
import FinsRamboozeGoaBanner from './FinsRamboozeGoaBanner'
import FinsRamboozeGoaContent from './FinsRamboozeGoaContent'
import SharedDiningGoaSlider from '../SharedDiningGoaSlider'
import Footer from '@/components/Shared/Footer/Footer'

import '../../../Style'

const index = () => {
  return (
    <>
        <Header />
            <SharedDiningGoaHeader />
            <FinsRamboozeGoaBanner />
            <FinsRamboozeGoaContent />
            <SharedDiningGoaSlider />
        <Footer />
    </>
  )
}

export default index
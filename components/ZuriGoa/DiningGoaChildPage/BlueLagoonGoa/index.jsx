import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import SharedDiningGoaHeader from '../SharedDiningGoaHeader'
import BlueLagoonGoaBanner from './BlueLagoonGoaBanner'
import BlueLagoonGoaContent from './BlueLagoonGoaContent'
import SharedDiningGoaSlider from '../SharedDiningGoaSlider'
import Footer from '@/components/Shared/Footer/Footer'

import '../../../Style'

const index = () => {
  return (
    <>
        <Header />
            <SharedDiningGoaHeader />
            <BlueLagoonGoaBanner />
            <BlueLagoonGoaContent />
            <SharedDiningGoaSlider />
        <Footer />
    </>
  )
}

export default index
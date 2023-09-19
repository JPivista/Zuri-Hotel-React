import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import SharedDiningBengaluruHeader from '../SharedDiningBengaluruHeader'
import IncantoBanner from './IncantoBanner'
import IncantoContent from './IncantoContent'
import SharedDiningBengaluruSlider from '../SharedDiningBengaluruSlider'
import Footer from '@/components/Shared/Footer/Footer'

import '../../../Style'

const index = () => {
  return (
    <>
        <Header />
            <SharedDiningBengaluruHeader />
            <IncantoBanner />
            <IncantoContent />
            <SharedDiningBengaluruSlider />
        <Footer />
    </>
  )
}

export default index
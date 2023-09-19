import React from 'react'

import '../../../Style'
import Header from '@/components/Shared/Header/Navbar'
import SharedDiningBengaluruHeader from '../SharedDiningBengaluruHeader'
import BlingDiningBanner from './BlingDiningBanner'
import BlingDiningContent from './BlingDiningContent'
import SharedDiningBengaluruSlider from '../SharedDiningBengaluruSlider'
import Footer from '@/components/Shared/Footer/Footer'

const index = () => {
  return (
    <>
        <Header />
            <SharedDiningBengaluruHeader />
            <BlingDiningBanner />
            <BlingDiningContent />
            <SharedDiningBengaluruSlider />
        <Footer />
    </>
  )
}

export default index
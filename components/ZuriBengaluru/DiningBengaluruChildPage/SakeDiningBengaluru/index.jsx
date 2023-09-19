import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import SharedDiningBengaluruHeader from '../SharedDiningBengaluruHeader'
import SakeDiningBanner from './SakeDiningBanner'
import SakeDiningContent from './SakeDiningContent'
import SharedDiningBengaluruSlider from '../SharedDiningBengaluruSlider'
import Footer from '@/components/Shared/Footer/Footer'

import '../../../Style'

const index = () => {
  return (
    <>
        <Header />
            <SharedDiningBengaluruHeader />
            <SakeDiningBanner />
            <SakeDiningContent />
            <SharedDiningBengaluruSlider />
        <Footer />
    </>
  )
}

export default index
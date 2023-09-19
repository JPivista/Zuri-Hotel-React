import React from 'react'

import '../../../Style'
import Header from '@/components/Shared/Header/Navbar'
import SharedDiningBengaluruHeader from '../SharedDiningBengaluruHeader'
import InfinityDiningBanner from './InfinityDiningBanner'
import InfinityDiningContent from './InfinityDiningContent'
import SharedDiningBengaluruSlider from '../SharedDiningBengaluruSlider'
import Footer from '@/components/Shared/Footer/Footer'



const index = () => {
  return (
    <>
        <Header />
            <SharedDiningBengaluruHeader />
            <InfinityDiningBanner />
            <InfinityDiningContent />
            <SharedDiningBengaluruSlider />
          <Footer />
    </>
  )
}

export default index
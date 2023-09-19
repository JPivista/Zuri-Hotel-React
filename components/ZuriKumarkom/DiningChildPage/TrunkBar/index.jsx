import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import SharedHeader from '../SharedHeader'
import TrunkBarBanner from './TrunkBarBanner'
import TrunkBarContent from './TrunkBarContent'
import SharedSlider from '../SharedSlider'
import Footer from '@/components/Shared/Footer/Footer'

import '../../../Style'

const index = () => {
  return (
    <>
    <Header />
    <SharedHeader />
    <TrunkBarBanner />
    <TrunkBarContent />
    <SharedSlider />
    <Footer />
    </>
  )
}

export default index
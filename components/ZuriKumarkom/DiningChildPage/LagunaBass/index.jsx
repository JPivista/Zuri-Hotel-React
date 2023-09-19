import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import SharedHeader from '../SharedHeader'
import LagunaBassBanner from './LagunaBassBanner'
import LagunaBassContent from './LagunaBassContent'
import SharedSlider from '../SharedSlider'
import Footer from '@/components/Shared/Footer/Footer'


import '../../../Style'

const index = () => {
  return (
    <>
        <Header />
        <SharedHeader />
        <LagunaBassBanner />
        <LagunaBassContent />
        <SharedSlider />
        <Footer />

</>
  )
}

export default index
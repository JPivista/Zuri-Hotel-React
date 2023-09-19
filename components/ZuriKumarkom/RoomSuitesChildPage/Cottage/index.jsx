import React from 'react'

import Header from '@/components/Shared/Header/Navbar'
import Footer from '@/components/Shared/Footer/Footer'
import ZuriSharedHeader from '../SharedHeader'
import ZuriSharedSlider from '../SharedSlider'

import '../../../Style'

import CottageBanner from './CottageBanner'
import CottageContent from './CottageContent'




const index = () => {
  return (
    <>
    <Header />
    <ZuriSharedHeader />
    <CottageBanner />
    <CottageContent />
    <ZuriSharedSlider />
    <Footer />
    </>
  )
}

export default index
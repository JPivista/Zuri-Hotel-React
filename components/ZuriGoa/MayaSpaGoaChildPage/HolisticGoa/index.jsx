import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import SharedMayaSpaGoaHeader from '../SharedMayaSpaGoaHeader'
import HolisticGoaBanner from './HolisticGoaBanner'
import HolisticContent from './HolisticContent'
import HolisticSlider from './HolisticSlider'
import Footer from '@/components/Shared/Footer/Footer'

import '../../../Style'

const index = () => {
  return (
    <>
        <Header />
            <SharedMayaSpaGoaHeader />
            <HolisticGoaBanner />
            <HolisticContent />
            <HolisticSlider />
        <Footer />
    </>
  )
}

export default index
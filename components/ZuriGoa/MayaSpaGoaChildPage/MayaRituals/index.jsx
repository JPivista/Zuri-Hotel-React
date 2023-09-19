import React from 'react'

import '../../../Style'
import Header from '@/components/Shared/Header/Navbar'
import SharedMayaSpaGoaHeader from '../SharedMayaSpaGoaHeader'
import MayaRitualsGoaBanner from './MayaRitualsGoaBanner'
import MayaRitualsGoaContent from './MayaRitualsGoaContent'
import MayaRitualsGoaSlider from './MayaRitualsGoaSlider'
import Footer from '@/components/Shared/Footer/Footer'

const index = () => {
  return (
    <>
        <Header />
            <SharedMayaSpaGoaHeader />
            <MayaRitualsGoaBanner />
            <MayaRitualsGoaContent />
            <MayaRitualsGoaSlider />
        <Footer />
    </>
  )
}

export default index
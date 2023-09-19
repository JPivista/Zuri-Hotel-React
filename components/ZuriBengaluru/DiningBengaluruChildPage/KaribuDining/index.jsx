import React from 'react'

import '../../../Style'
import Header from '@/components/Shared/Header/Navbar'
import SharedDiningBengaluruHeader from '../SharedDiningBengaluruHeader'
import KaribuDiningBanner from './KaribuDiningBanner'
import KaribuDiningContent from './KaribuDiningContent'
import SharedDiningBengaluruSlider from '../SharedDiningBengaluruSlider'
import Footer from '@/components/Shared/Footer/Footer'

const index = () => {
  return (
    <>
        <Header />
            <SharedDiningBengaluruHeader />
            <KaribuDiningBanner />
            <KaribuDiningContent />
            <SharedDiningBengaluruSlider />
        <Footer />
    </>
  )
}

export default index
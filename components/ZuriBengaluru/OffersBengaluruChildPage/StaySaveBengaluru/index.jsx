import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import StaySaveBengaluruBanner from './StaySaveBengaluruBanner'
import StaySaveBengaluruContent from './StaySaveBengaluruContent'
import Footer from '@/components/Shared/Footer/Footer'

import '../../../Style'

const index = () => {
  return (
    <>
        <Header />
            <StaySaveBengaluruBanner />
            <StaySaveBengaluruContent />
        <Footer />
    </>
  )
}

export default index
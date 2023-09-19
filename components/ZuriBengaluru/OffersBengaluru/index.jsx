import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import OffersBengaluruHeader from './OffersBengaluruHeader'
import OffersBengaluruBanner from './OffersBengaluruBanner'
import OffersBengaluruContent from './OffersBengaluruContent'
import Footer from '@/components/Shared/Footer/Footer'

import '../../Style'

const index = () => {
  return (
    <>
    <Header />
        <OffersBengaluruHeader />
        <OffersBengaluruBanner />
        <OffersBengaluruContent />
    <Footer />
    </>
  )
}

export default index
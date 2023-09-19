import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import ComplAmenitiesBengaluruHeader from './ComplAmenitiesBengaluruHeader'
import ComplAmenitiesBengaluruBanner from './ComplAmenitiesBengaluruBanner'
import ComplAmenitiesBengaluruContent from './ComplAmenitiesBengaluruContent'
import Footer from '@/components/Shared/Footer/Footer'

import '../../Style'

const index = () => {
  return (
    <>
    <Header />
        <ComplAmenitiesBengaluruHeader />
        <ComplAmenitiesBengaluruBanner />
        <ComplAmenitiesBengaluruContent />
    <Footer />
    </>
  )
}

export default index
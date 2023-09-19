import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import CompAmenitiesGoaHeader from './CompAmenitiesGoaHeader'
import CompAmenitiesGoaBanner from './CompAmenitiesGoaBanner'
import CompAmenitiesGoaContent from './CompAmenitiesGoaContent'
import Footer from '@/components/Shared/Footer/Footer'

import '../../Style'

const index = () => {
  return (
    <>
    <Header />

    <CompAmenitiesGoaHeader />
    <CompAmenitiesGoaBanner />
    <CompAmenitiesGoaContent />
    <Footer />
    </>
  )
}

export default index
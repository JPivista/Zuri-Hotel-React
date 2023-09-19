import React from 'react'

import Header from '@/components/Shared/Header/Navbar'
import Footer  from '@/components/Shared/Footer/Footer'
import ComplimentaryAmenitiesHeader from './ComplimentaryAmenitiesHeader'
import ComplimentaryAmenitiesBanner from './ComplimentaryAmenitiesBanner'
import ComplimentaryAmenitiesSlider from './ComplimentaryAmenitiesSlider'
import ComplimentaryAmenitiesContent from './ComplimentaryAmenitiesContent'

import '../../Style'

const index = () => {
  return (
    <>
    <Header />
    <ComplimentaryAmenitiesHeader />
    <ComplimentaryAmenitiesBanner />
    <ComplimentaryAmenitiesSlider />
    <ComplimentaryAmenitiesContent />
    <Footer />
    </>
  )
}

export default index
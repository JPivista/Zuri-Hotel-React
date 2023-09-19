import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import EventsBengaluruHeader from './EventsBengaluruHeader'
import EventsBengaluruBanner from './EventsBengaluruBanner'
import EventsBengaluruSlider from './EventsBengaluruSlider'
import Footer from '@/components/Shared/Footer/Footer'

import '../../Style'

const index = () => {
  return (
   <>
   <Header />
        <EventsBengaluruHeader />
        <EventsBengaluruBanner />
        <EventsBengaluruSlider />
    <Footer />
   </>
  )
}

export default index
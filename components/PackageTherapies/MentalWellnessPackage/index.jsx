import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import MentalWellnessBanner from './MentalWellnessBanner'
import MentalWellnessContent from './MentalWellnessContent'
import Footer from '@/components/Shared/Footer/Footer'

import '../../Style'

const index = () => {
  return (
   <>
        <Header />
            <MentalWellnessBanner />
            <MentalWellnessContent />
        <Footer />
   </>
  )
}

export default index
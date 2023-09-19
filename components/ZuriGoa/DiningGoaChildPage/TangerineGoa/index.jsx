import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import SharedDiningGoaHeader from '../SharedDiningGoaHeader'
import TangerineGoaBanner from './TangerineGoaBanner'
import TangerineGoaContent from './TangerineGoaContent'
import SharedDiningGoaSlider from '../SharedDiningGoaSlider'
import Footer from '@/components/Shared/Footer/Footer'

import '../../../Style'

const index = () => {
  return (
   <>
        <Header />
            <SharedDiningGoaHeader />
            <TangerineGoaBanner />
            <TangerineGoaContent />
            <SharedDiningGoaSlider />
        <Footer />
   </>
  )
}

export default index
import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import CasinoHeader from './CasinoHeader'
import CasinoBanner from './CasinoBanner'
import CasinoContent from './CasinoContent'
import Footer from '@/components/Shared/Footer/Footer'

import '../../Style'

const index = () => {
  return (
    <>
        <Header />
        <CasinoHeader />
        <CasinoBanner />
        <CasinoContent />
        <Footer />    
    </>
  )
}

export default index
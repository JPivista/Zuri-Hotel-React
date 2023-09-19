import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import KaraikadamAyurvedaBanner from './KaraikadamAyurvedaBanner'
import KaraikadamAyurvedaContent from './KaraikadamAyurvedaContent'
import Footer from '@/components/Shared/Footer/Footer'

import '../../Style'

const index = () => {
  return (
    <>
        <Header />
            <KaraikadamAyurvedaBanner />
            <KaraikadamAyurvedaContent />
        <Footer />
    </>
  )
}

export default index
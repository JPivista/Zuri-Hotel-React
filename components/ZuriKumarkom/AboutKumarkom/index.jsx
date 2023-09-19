import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import AboutKumarkomHeader from './AboutKumarkomHeader'
import AboutKumarkomBanner from './AboutKumarkomBanner'
import AboutKumarkomContent from './AboutKumarkomContent'
import Footer from '@/components/Shared/Footer/Footer'

import '../../Style'

const index = () => {
  return (
    <>
    <Header />
    <AboutKumarkomHeader />
    <AboutKumarkomBanner />
    <AboutKumarkomContent />
    <Footer />
    </>
  )
}

export default index
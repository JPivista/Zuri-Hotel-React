import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import AboutBengaluruHeader from './AboutBengaluruHeader'
import AboutBengaluruBanner from './AboutBengaluruBanner'
import AboutBengaluruContent from './AboutBengaluruContent'
import Footer from '@/components/Shared/Footer/Footer'

import '../../Style'

const index = () => {
  return (
    <>
    <Header />
        <AboutBengaluruHeader />
        <AboutBengaluruBanner />
        <AboutBengaluruContent />
    <Footer />
    </>
  )
}

export default index
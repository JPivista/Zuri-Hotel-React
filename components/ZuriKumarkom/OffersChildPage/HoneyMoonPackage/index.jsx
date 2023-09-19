import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import HoneyMoonBanner from './HoneyMoonBanner'
import HoneyMoonContent from './HoneyMoonContent'
import Footer from '@/components/Shared/Footer/Footer'

import '../../../Style'

const index = () => {
  return (
    <>
    <Header />
      <HoneyMoonBanner />
      <HoneyMoonContent />
    <Footer />
    </>
  )
}

export default index
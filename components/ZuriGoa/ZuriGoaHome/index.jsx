import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import ZuriGoaHomeHeader from './ZuriGoaHomeHeader'
import ZuriGoaBanner from './ZuriGoaBanner'
import ZuriGoaContent from './ZuriGoaContent'
import Footer from '@/components/Shared/Footer/Footer'

import '../../Style'

const index = () => {
  return (
    <>
    <Header />
    <ZuriGoaHomeHeader />
    <ZuriGoaBanner />
    <ZuriGoaContent />
    <Footer />
    </>
  )
}

export default index
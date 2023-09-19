import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import ZuriBengaluruHeader from './ZuriBengaluruHeader'
import ZuriBengaluruBanner from './ZuriBengaluruBanner'
import ZuriBengaluruContent from './ZuriBengaluruContent'
import Footer from '@/components/Shared/Footer/Footer'

import '../../Style'

const index = () => {
  return (
    <>
    <Header />
    <ZuriBengaluruHeader />
    <ZuriBengaluruBanner />
    <ZuriBengaluruContent />
    <Footer />
    </>
  )
}

export default index
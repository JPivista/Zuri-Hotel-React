import React from 'react'

import '../../../Style'
import Header from '@/components/Shared/Header/Navbar'
import PreferredBengaluruBanner from './PreferredBengaluruBanner'
import PreferrredBengaluruContent from './PreferrredBengaluruContent'
import Footer from '@/components/Shared/Footer/Footer'

const index = () => {
  return (
    <>
        <Header />
            <PreferredBengaluruBanner />
            <PreferrredBengaluruContent />
        <Footer />
    </>
  )
}

export default index
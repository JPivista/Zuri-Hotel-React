import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import LastMinuteBengaluruBanner from './LastMinuteBengaluruBanner'
import LastMinuteBengaluruContent from './LastMinuteBengaluruContent'
import Footer from '@/components/Shared/Footer/Footer'

import '../../../Style'

const index = () => {
  return (
    <>
        <Header />
            <LastMinuteBengaluruBanner />
            <LastMinuteBengaluruContent />
        <Footer />
    </>
  )
}

export default index
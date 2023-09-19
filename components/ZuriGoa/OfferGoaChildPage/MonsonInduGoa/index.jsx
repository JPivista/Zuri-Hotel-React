import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import SharedOffersGoaHeader from '../SharedOffersGoaHeader'
import MonsonInduGoaBanner from './MonsonInduGoaBanner'
import MonsonInduGoaContent from './MonsonInduGoaContent'
import Footer from '@/components/Shared/Footer/Footer'

import '../../../Style'

const index = () => {
  return (
   <>
        <Header />
            <SharedOffersGoaHeader />
            <MonsonInduGoaBanner />
            <MonsonInduGoaContent />
        <Footer />
   </>
  )
}

export default index
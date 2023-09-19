import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import SharedOffersGoaHeader from '../SharedOffersGoaHeader'
import MonsoonManiaBanner from './MonsoonManiaBanner'
import MonSoonManiaContent from './MonSoonManiaContent'
import Footer from '@/components/Shared/Footer/Footer'

import '../../../Style'

const index = () => {
  return (
    <>
        <Header />
            <SharedOffersGoaHeader />
            <MonsoonManiaBanner />
            <MonSoonManiaContent />
        <Footer />
    </>
  )
}

export default index
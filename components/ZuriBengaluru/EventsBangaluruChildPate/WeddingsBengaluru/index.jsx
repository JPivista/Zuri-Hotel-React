import React from 'react'

import '../../../Style'
import Header from '@/components/Shared/Header/Navbar'
import WeddingsBengaluruBanner from './WeddingsBengaluruBanner'
import WeddingsBengaluruContent from './WeddingsBengaluruContent'
import Footer from '@/components/Shared/Footer/Footer'
import SharedEventsBengaluruHeader from '../SharedEventsBengaluruHeader'
import WeddingsBengaluruForm from './WeddingsBengaluruForm'

const index = () => {
  return (
    <>
        <Header />
            <SharedEventsBengaluruHeader />
            <WeddingsBengaluruBanner />
            <WeddingsBengaluruContent />
            <WeddingsBengaluruForm />
        <Footer />
    </>
  )
}

export default index
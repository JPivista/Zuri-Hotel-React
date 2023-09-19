import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import SharedEventsGoaHeader from '../SharedEventsGoaHeader'
import WeddingsGoaBanner from './WeddingsGoaBanner'
import WeddingsGoaContent from './WeddingsGoaContent'
import WeddingsGoaForm from './WeddingsGoaForm'
import Footer from '@/components/Shared/Footer/Footer'

import '../../../Style'

const index = () => {
  return (
    <>
        <Header />
            <SharedEventsGoaHeader />
            <WeddingsGoaBanner />
            <WeddingsGoaContent />
            <WeddingsGoaForm />
        <Footer />
    </>
  )
}

export default index
import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import SharedEventsGoaHeader from '../SharedEventsGoaHeader'
import MeetingsGoaBanner from './MeetingsGoaBanner'
import MeetingsGoaContent from './MeetingsGoaContent'
import MeetingsGoaForm from './MeetingsGoaForm'
import Footer from '@/components/Shared/Footer/Footer'

import '../../../Style'

const index = () => {
  return (
    <>
        <Header />
            <SharedEventsGoaHeader />
            <MeetingsGoaBanner />
            <MeetingsGoaContent />
            <MeetingsGoaForm />
        <Footer />
    </>
  )
}

export default index
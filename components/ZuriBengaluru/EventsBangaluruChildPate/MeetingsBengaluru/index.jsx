import Header from '@/components/Shared/Header/Navbar'

import '../../../Style'

import React from 'react'
import MeetingsBengaluruBanner from './MeetingsBengaluruBanner'
import MeetingBengaluruContent from './MeetingBengaluruContent'
import MeetingsBengaluruForm from './MeetingsBengaluruForm'
import Footer from '@/components/Shared/Footer/Footer'
import SharedEventsBengaluruSlider from '../SharedEventsBengaluruHeader'
import SharedEventsBengaluruHeader from '../SharedEventsBengaluruHeader'

const index = () => {
  return (
    <>
        <Header />
            <SharedEventsBengaluruHeader />
            <MeetingsBengaluruBanner />
            <MeetingBengaluruContent />
            <MeetingsBengaluruForm />
        <Footer />
    </>
  )
}

export default index
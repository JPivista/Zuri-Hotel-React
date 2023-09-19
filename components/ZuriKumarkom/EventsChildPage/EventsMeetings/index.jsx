import React from 'react'

import '../../../Style'

import Header from '@/components/Shared/Header/Navbar'
import SharedEventsHeader from '../SharedEventsHeader'
import EventsMeetingBanner from './EventsMeetingBanner'
import EventsMeetingContent from './EventsMeetingContent'
import EventsMeetingForm from './EventsMeetingForm'
import Footer from '@/components/Shared/Footer/Footer'

const index = () => {
  return (
    <>
    <Header />
    <SharedEventsHeader />
    <EventsMeetingBanner />
    <EventsMeetingContent />
    <EventsMeetingForm />
    <Footer />
    </>
  )
}

export default index
import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import SharedEventsHeader from '../SharedEventsHeader'
import EventsWeddingBanner from './EventsWeddingBanner'
import EventsWeddingContent from './EventsWeddingContent'
import EventsWeddingForm from './EventsWeddingForm'
import Footer from '@/components/Shared/Footer/Footer'

import '../../../Style'

const index = () => {
  return (
    <>
    <Header />
    <SharedEventsHeader />
    <EventsWeddingBanner />
    <EventsWeddingContent />
    <EventsWeddingForm />
    <Footer />
    </>
  )
}

export default index
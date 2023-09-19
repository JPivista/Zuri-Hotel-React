import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import EventsGoaHeader from './EventsGoaHeader'
import EventsGoaBanner from './EventsGoaBanner'
import EventsGoaSlider from './EventsGoaSlider'
import Footer from '@/components/Shared/Footer/Footer'

import '../../Style'

const index = () => {
  return (
<>
    <Header />
    <EventsGoaHeader />
    <EventsGoaBanner />
    <EventsGoaSlider />
    <Footer />
</>
  )
}

export default index
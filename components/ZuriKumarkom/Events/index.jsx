import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import EventsHeaderKumarkom from './EventsHeaderKumarkom'
import EventsBannerKumarkom from './EventsBannerKumarkom'
import EventsSliderKumarkom from './EventsSliderKumarkom'
import Footer from '@/components/Shared/Footer/Footer'

import '../../Style'

const index = () => {
  return (
    <>
    <Header />
    <EventsHeaderKumarkom />
    <EventsBannerKumarkom />
    <EventsSliderKumarkom />
    <Footer />
    </>
  )
}

export default index
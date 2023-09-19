import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import OffersKumarkomHeader from './OffersKumarkomHeader'
import OffersKumarkomBannerSlider from './OffersKumarkomBannerSlider'
import Footer from '@/components/Shared/Footer/Footer'
import OffersKumarkomComponent from './OffersKumarkomComponent'

import '../../Style'

const index = () => {
  return (
    <>
    <Header />
    <OffersKumarkomHeader />
    <OffersKumarkomBannerSlider />
    <OffersKumarkomComponent />
    <Footer />
    </>
  )
}

export default index
import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import SharedHeaderMayaSpaKumarkom from '../SharedHeaderMayaSpaKumarkom'
import AyurvedaMayaSpaKumakomBanner from './AyurvedaMayaSpaKumakomBanner'
import AyurvedaMayaSpaKumakomTab from './AyurvedaMayaSpaKumakomTab'
import SharedSliderMayaSpaKumarkom from '../SharedSliderMayaSpaKumarkom'
import Footer from '@/components/Shared/Footer/Footer'


import '../../../Style'
import AyurvedaMayaSpaKumakomContent from './AyurvedaMayaSpaKumakomContent'

const index = () => {
  return (
    <>
    <Header />
    <SharedHeaderMayaSpaKumarkom />
    <AyurvedaMayaSpaKumakomBanner />
    <AyurvedaMayaSpaKumakomContent />
    <AyurvedaMayaSpaKumakomTab />
    <SharedSliderMayaSpaKumarkom />
    <Footer />
    </>
  )
}

export default index
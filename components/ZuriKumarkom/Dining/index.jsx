import React from 'react'

import Header from '@/components/Shared/Header/Navbar'
import Footer from '@/components/Shared/Footer/Footer'
import KumarkomDiningHeader from './KumarkomDiningHeader'
import KumarkomDiningBanner from './KumarkomDiningBanner'
import KumarkomDiningSlider from './KumarkomDiningSlider'

import '../../Style'

const index = () => {
  return (
    <>
    <Header />
    <KumarkomDiningHeader />
    <KumarkomDiningBanner />
    <KumarkomDiningSlider />
    <Footer />  
    </>
  )
}

export default index
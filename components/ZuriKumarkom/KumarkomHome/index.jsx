import React from 'react'
import Header from '@/components/Shared/Header/Navbar'
import Footer  from '@/components/Shared/Footer/Footer'
import HomeHeroBanner from './HomeHeroBanner'

import '../../Style'
import KumarkomResort from './KumarkomResort'
import KumarkomGallery from './KumarkomGallery'

const index = () => {
  return (
    <>
    <Header />
        <HomeHeroBanner />
        <KumarkomResort />  
        <KumarkomGallery />
    <Footer />
    </>
  )
}

export default index
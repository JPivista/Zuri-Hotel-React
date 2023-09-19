import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import KumarkomMayaSpaHeader from './KumarkomMayaSpaHeader'
import KumarKomMayaSpaBanner from './KumarKomMayaSpaBanner'
import KumarkomMayaContent from './KumarkomMayaContent'
import Footer from '@/components/Shared/Footer/Footer'

import '../../Style'
import MayaSpaSlider from './MayaSpaSlider'

const index = () => {
  return (
    <>
        <Header />
        <KumarkomMayaSpaHeader />
        <KumarKomMayaSpaBanner />
        <KumarkomMayaContent />
        <MayaSpaSlider />
        <Footer />
    </>
  )
}

export default index
import React from 'react'

import Header from '@/components/Shared/Header/Navbar'
import Footer from '@/components/Shared/Footer/Footer'
import ZuriSharedHeader from '../SharedHeader'
import ZuriSharedSlider from '../SharedSlider'

import '../../../Style'
import PoolVillaBanner from './PoolVillaBanner'
import PoolVillaContent from './PoolVillaContent'

const index = () => {
  return (
    <>
    <Header />
    <ZuriSharedHeader />
    <PoolVillaBanner />
    <PoolVillaContent />
    <ZuriSharedSlider />
    <Footer />
    </>
  )
}

export default index
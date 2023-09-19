import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import DetoxificationPackageBanner from './DetoxificationPackageBanner'
import DetoxificationPackageContent from './DetoxificationPackageContent'
import Footer from '@/components/Shared/Footer/Footer'

import '../../Style'

const index = () => {
  return (
    <>
        <Header />
            <DetoxificationPackageBanner />
            <DetoxificationPackageContent />
        <Footer />
    </>
  )
}

export default index
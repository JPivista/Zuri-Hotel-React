import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import AyurvedaPackageBanner from './AyurvedaPackageBanner'
import AyurvedaPackageContent from './AyurvedaPackageContent'
import Footer from '@/components/Shared/Footer/Footer'

import '../../Style'

const index = () => {
  return (
    <>
        <Header />
            <AyurvedaPackageBanner />
            <AyurvedaPackageContent />
        <Footer />
    </>
  )
}

export default index
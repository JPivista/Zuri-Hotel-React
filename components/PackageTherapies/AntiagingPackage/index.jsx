import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import AntiagingPackageBanner from './AntiagingPackageBanner'
import AntiagingPackageContent from './AntiagingPackageContent'
import Footer from '@/components/Shared/Footer/Footer'

import '../../Style'

const index = () => {
  return (
    <>
        <Header />
            <AntiagingPackageBanner />
            <AntiagingPackageContent />
        <Footer />
    </>
  )
}

export default index
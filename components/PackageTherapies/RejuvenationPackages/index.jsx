import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import RejuvenationPackageBanner from './RejuvenationPackageBanner'
import RejuvenationPackageContent from './RejuvenationPackageContent'
import Footer from '@/components/Shared/Footer/Footer'

import '../../Style'

const index = () => {
  return (
    <>
    <Header />
        <RejuvenationPackageBanner />
        <RejuvenationPackageContent />
    <Footer />
    </>
  )
}

export default index
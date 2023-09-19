import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import PanchakarmaPackageBanner from './PanchakarmaPackageBanner'
import PanchakarmaPackageContent from './PanchakarmaPackageContent'
import Footer from '@/components/Shared/Footer/Footer'

import '../../Style'

const index = () => {
  return (
    <>
    <Header />
        <PanchakarmaPackageBanner />
        <PanchakarmaPackageContent />
    <Footer />
    </>
  )
}

export default index
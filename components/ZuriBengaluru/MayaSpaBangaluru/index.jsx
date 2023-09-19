import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import MayaSpaBangaluruHeader from './MayaSpaBangaluruHeader'
import MayaSpaBangaluruBanner from './MayaSpaBangaluruBanner'
import MayaSpaBangaluruContent from './MayaSpaBangaluruContent'
import Footer from '@/components/Shared/Footer/Footer'

import '../../Style'

const index = () => {
  return (
    <>
    <Header />
        <MayaSpaBangaluruHeader />
        <MayaSpaBangaluruBanner />
        <MayaSpaBangaluruContent />
    <Footer />
    </>
  )
}

export default index
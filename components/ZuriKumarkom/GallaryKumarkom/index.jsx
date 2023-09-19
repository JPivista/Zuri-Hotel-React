import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import GallaryKumarkomAlbum from './GallaryKumarkomAlbum'
import Footer from '@/components/Shared/Footer/Footer'

import '../../Style'

const index = () => {
  return (
    <>
        <Header />
            <GallaryKumarkomAlbum />
        <Footer />
    </>
  )
}

export default index
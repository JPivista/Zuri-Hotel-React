import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import MayaSpaGoaHeader from './MayaSpaGoaHeader'
import MayaSpaGoaBanner from './MayaSpaGoaBanner'
import MayaSpaGoaContenet from './MayaSpaGoaContenet'
import MayaSpaGoaSlider from './MayaSpaGoaSlider'
import Footer from '@/components/Shared/Footer/Footer'


import '../../Style'

const index = () => {
  return (
   <>
        <Header />
        <MayaSpaGoaHeader />
        <MayaSpaGoaBanner />
        <MayaSpaGoaContenet />
        <MayaSpaGoaSlider />
        <Footer />
   </>
  )
}

export default index
import React from 'react'

import Header from '@/components/Shared/Header/Navbar'
import Footer from '@/components/Shared/Footer/Footer'
import SharedHeader from '../SharedHeader'
import LimeTreeBanner from './LimeTreeBanner'
import LimeTreeContent from './LimeTreeContent'
import SharedSlider from '../SharedSlider'

import '../../../Style'

const index = () => {
    return (
        <>
            <Header />
            <SharedHeader />
            <LimeTreeBanner />
            <LimeTreeContent />
            <SharedSlider />
            <Footer />
        </>
    )
}

export default index
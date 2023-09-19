import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import OffersGoaHeader from './OffersGoaHeader'
import OffersGoaBanner from './OffersGoaBanner'
import OffersGoaContent from './OffersGoaContent'
import Footer from '@/components/Shared/Footer/Footer'

import '../../Style'

const index = () => {
    return (
        <>
            <Header />
            <OffersGoaHeader />
            <OffersGoaBanner />
            <OffersGoaContent />
            <Footer />
        </>
    )
}

export default index
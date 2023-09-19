import Header from '@/components/Shared/Header/Navbar'
import React from 'react'
import AboutGoaBanner from './AboutGoaBanner'
import AboutGoaHeader from './AboutGoaHeader'
import AboutGoaContent from './AboutGoaContent'
import Footer from '@/components/Shared/Footer/Footer'

import '../../Style'

const index = () => {
    return (
        <>
            <Header />
            <AboutGoaHeader />
            <AboutGoaBanner />
            <AboutGoaContent />
            <Footer />
        </>
    )
}

export default index
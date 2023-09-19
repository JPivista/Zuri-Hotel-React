import Link from 'next/link'
import React from 'react'
import { Container, Col } from 'react-bootstrap'

const SakeDiningBanner = () => {
    const BannerImg = {
        backgroundImage: `url('/bengaluru/dining/sake_blr_banner.jpg')`,
        height: 466,
        backgroundSize: 'cover'
    }
    return (
        <Container className='p-0 w-100' style={{}}>

            <Col className='p-0'
                style={BannerImg}
            >
            </Col>

            <Col className='d-flex flex-row flex-wrap p-0 align-items-center' >
                <Link href="/"
                    className='text-decoration-none text-black m-0'>
                    <h6 className='mb-0 banner-breadcrumbs'>Home</h6>
                </Link>

                /

                <Link href="/hotels-in-bengaluru"
                    className='text-decoration-none mb-0'>
                    <h6 className=' banner-breadcrumbs m-0 text-black'>Bengaluru</h6>
                </Link>
                /
                <Link href="/hotels-in-bengaluru/restaurants/"
                    className='text-decoration-none mb-0'>
                    <h6 className='text-custom-megenta banner-breadcrumbs m-0'>Restaurants</h6>
                </Link>
            </Col>
        </Container >
    )
}

export default SakeDiningBanner
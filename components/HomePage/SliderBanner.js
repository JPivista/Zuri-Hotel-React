
'use client'

import React, { useState } from 'react'
import { Col, Container, Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

import './home-slider.css'

const SliderBanner = () => {
    const BannerImg = {
        backgroundImage: `url('/home/zuri_slider_banner_1.jpg')`,
        height: 760,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    const BannerImg1 = {
        backgroundImage: `url('/home/zuri_slider_banner_2.jpg')`,
        height: 760,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    const BannerImg2 = {
        backgroundImage: `url('/home/zuri_slider_banner_3.jpg')`,
        height: 760,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }




    return (
        <>
            <Container fluid className='p-0 pt-4 text-center' style={{ height: '800px', }}>
                <Carousel>
                    <Carousel.Item className='bg-black ' style={BannerImg}>
                        <Carousel.Caption className='w-100 p-0'>
                            <Col className='text-center w-100 position-relative d-flex' style={{ height: 760, }}>
                                <Col className='d-flex flex-column flex-wrap align-items-center justify-content-center align-content-center'>
                                    <h1 className='text-white bg-black bg-opacity-25 p-3'>
                                        TROPICAL DESTINATION
                                    </h1>
                                </Col>
                                <Col className='position-absolute bg-black bg-opacity-75 p-2 pb-0 bottom-0 end-0'>
                                    <h6>The Zuri White Sands, Goa Resort & Casino</h6>
                                </Col>
                            </Col>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='bg-black ' style={BannerImg1}>
                        <Carousel.Caption className='p-0'>
                            <Col className='text-center w-100 position-relative d-flex' style={{ height: 760, }}>
                                <Col className='d-flex flex-column flex-wrap align-items-center justify-content-center align-content-center'>
                                    <h1 className='text-white'>
                                        GOD’S OWN COUNTRY
                                    </h1>
                                </Col>
                                <Col className='position-absolute bg-black bg-opacity-75 p-2 pb-0 bottom-0 end-0'>
                                    <h6>The Zuri Whitefield, Bengaluru</h6>
                                </Col>
                            </Col>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='bg-black ' style={BannerImg2}>
                        <Carousel.Caption className='p-0'>
                            <Col className='text-center w-100 position-relative d-flex' style={{ height: 760, }}>
                                <Col className='d-flex flex-column flex-wrap align-items-center justify-content-center align-content-center'>
                                    <h1 className='text-white'>
                                        PREFERRED BUSINESS DESTINATION
                                    </h1>
                                </Col>
                                <Col className='position-absolute bg-black bg-opacity-75 p-2 pb-0 bottom-0 end-0'>
                                    <h6>The Zuri White Sands, Goa Resort & Casino</h6>
                                </Col>
                            </Col>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </>
    )
}

export default SliderBanner
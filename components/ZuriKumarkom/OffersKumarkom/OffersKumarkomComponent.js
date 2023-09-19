import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../../custom.css'
import Link from 'next/link'

const OffersKumarkomComponent = () => {
    return (
        <>
            <Container className='p-0 py-5 text-center d-md-block d-none'>
                <Image src='/cl.png' alt='' fluid />
                <h6 className='py-2 pt-4 text-center'>OFFERS</h6>

                <h6 className='mt-4 d-inline-block border border-3 border-top-0 border-end-0 border-start-0 pb-2 '>STAY OFFERS</h6>

                <Col className='d-md-flex flex-column d-none mt-5'>
                    <Col className='d-flex flex-md-row '>
                        <Col md={7} className='text-md-end text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>HONEYMOON PACKAGE</h6>
                            </Col>
                            <p>
                                Package Valid from 01st April 2023 to 31st March 2024
                                <br />
                                (Not valid between 20th December 2023 to 03rd January 2024)
                            </p>
                            <Col className='d-flex justify-md-content-center justify-content-end align-items-md-start p-0 pe-2'>
                                <Link href="/lake-resorts-in-kumarakom/offers/honeymoon-package/"
                                    className='bg-black text-center rounded-circle text-decoration-none '>
                                    <p
                                        className='m-0 lh-sm text-white btn-circle'
                                        style={{ fontSize: '11px' }}>
                                        KNOW<br /> MORE
                                    </p>
                                </Link>
                            </Col>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center '>
                            <Image src='/kumarkom/offers/honey_moon_package.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                    </Col>


                    <Col className='d-flex flex-row mt-5'>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3' md={4}>
                            <Image src='/kumarkom/offers/monson_stay_offers.png' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <Col md={7} className='text-md-start text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>MONSOON PACKAGE</h6>
                            </Col>
                            <p>
                                Package Valid from 1st July’23 to 30th Sept’23
                            </p>
                            <Col className='d-flex justify-md-content-center  align-items-md-start p-0 pe-2'>
                                <Link href="/lake-resorts-in-kumarakom/offers/kumarakom-package/"
                                    className='bg-black text-center rounded-circle text-decoration-none '>
                                    <p
                                        className='m-0 lh-sm text-white btn-circle'
                                        style={{ fontSize: '11px' }}>
                                        KNOW<br /> MORE
                                    </p>
                                </Link>
                            </Col>
                        </Col>
                    </Col>
                    <Col className='d-flex flex-md-row '>
                        <Col md={7} className='text-md-end text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>AYURVEDA PACKAGE</h6>
                            </Col>
                            <p>
                                A therapy which aims at resolving all body ailments.Offering the total healing powers of traditional Ayurveda through rejuvenation and revitalization treatments to create a harmonious balance between mind, body and soul. The therapeutic and wellness treatments includes various programmes which are carried under the guidance of a qualified Ayurveda therapists
                            </p>
                            <Col className='d-flex justify-md-content-center justify-content-end align-items-md-start p-0 pe-2'>
                                <Link href="/offers/ayurveda-package/"
                                    className='bg-black text-center rounded-circle text-decoration-none '>
                                    <p
                                        className='m-0 lh-sm text-white btn-circle'
                                        style={{ fontSize: '11px' }}>
                                        KNOW<br /> MORE
                                    </p>
                                </Link>
                            </Col>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center '>
                            <Image src='/kumarkom/offers/ayurveda_package.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                    </Col>
                </Col>
            </Container>


            {/* Mobile View */}
            <Container className='p-0 d-flex flex-column d-md-none '>
                <Col className='p-2'>
                    <Col className='d-flex flex-column justify-content-center align-items-center text-center'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>HONEYMOON PACKAGE</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/kumarkom/offers/honey_moon_package.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            Package Valid from 01st April 2023 to 31st March 2024
                            <br />
                            (Not valid between 20th December 2023 to 03rd January 2024)
                        </p>
                        <Link href="/lake-resorts-in-kumarakom/offers/honeymoon-package/"
                            className='bg-black text-center rounded-circle text-decoration-none btn-circle'>
                            <p
                                className='m-0 lh-sm text-white '
                                style={{ fontSize: '11px' }}>
                                KNOW<br /> MORE
                            </p>
                        </Link>
                    </Col>

                    <Col className='d-flex flex-column justify-content-center align-items-center text-center py-4'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>MONSOON PACKAGE</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/kumarkom/offers/monson_stay_offers.png' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            Package Valid from 1st July 2023 – 30th September 2023
                        </p>
                        <Link href="/lake-resorts-in-kumarakom/offers/kumarakom-package/"
                            className='bg-black text-center rounded-circle text-decoration-none btn-circle'>
                            <p
                                className='m-0 lh-sm text-white '
                                style={{ fontSize: '11px' }}>
                                KNOW<br /> MORE
                            </p>
                        </Link>
                    </Col>

                    <Col className='d-flex flex-column justify-content-center align-items-center text-center py-4'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>AYURVEDA PACKAGE</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/kumarkom/offers/ayurveda_package.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            A therapy which aims at resolving all body ailments.Offering the total healing powers of traditional Ayurveda through rejuvenation and revitalization treatments to create a harmonious balance between mind, body and soul. The therapeutic and wellness treatments includes various programmes which are carried under the guidance of a qualified Ayurveda therapists
                        </p>
                        <Link href="/offers/ayurveda-package/"
                            className='bg-black text-center rounded-circle text-decoration-none btn-circle'>
                            <p
                                className='m-0 lh-sm text-white '
                                style={{ fontSize: '11px' }}>
                                KNOW<br /> MORE
                            </p>
                        </Link>
                    </Col>
                </Col>
            </Container>
        </>
    )
}

export default OffersKumarkomComponent
'use client'

import { Col, Collapse, Image, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaFacebook } from 'react-icons/fa';

import '../headerfooter.css'
import Link from 'next/link';
import { useState } from 'react';

function Header() {

    const [open, setOpen] = useState(false);
    const [close, setClose] = useState(false);


    return (
        <>
            {/* <Navbar collapseOnSelect expand="lg" className="bg-white position-fixed w-100 z-3 d-md-none d-block top-0">
                <Container>
                    <Navbar.Brand href="#home">
                        <Image src='/zuri_logo.png' alt='' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="" id='hotels'>Hotels</Nav.Link>
                            <Nav.Link href="">Events</Nav.Link>

                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}


            {/* Desktop Header */}

            <Container fluid className='p-0 d-block top-0 position-fixed bg-white z-3 border border-1 border-opacity-25 border-black border-top-0 border-start-0 border-end-0'>
                <Container className='p-0 d-lg-block d-none'>
                    <Row className='d-flex flex-row'>
                        <Col md={2}>
                            <Link href="/" className='text-decoration-none'>
                                <Image src='/zuri_logo.png' alt='' />
                            </Link>
                        </Col>
                        <Col className='py-2'>
                            <Col className='d-flex flex-row align-items-end justify-content-end gap-4'>
                                <Link href="tel:806 665 7272"
                                    className='text-decoration-none text-black'
                                >
                                    <Image src='/header/phone_final.svg' alt='' />
                                    +91 806 665 7272
                                </Link>

                                <Link
                                    href="https://www.facebook.com/thezurihotels"
                                    target='_blank'
                                    className='text-decoration-none text-black'
                                >
                                    <Image src='/header/facebook_final.svg' alt='' />
                                </Link>

                                <Link
                                    href="https://twitter.com/zurihotels"
                                    target='_blank'
                                    className='text-decoration-none text-black'
                                >
                                    <Image src='/header/twitter_final.svg' alt='' />
                                </Link>

                                <Link
                                    href="https://www.youtube.com/channel/UCXxjZ-f7LTEMchpvECctUKg?view_as=subscriber"
                                    target='_blank'
                                    className='text-decoration-none text-black'
                                >
                                    <Image src='/header/youtube_final.svg' alt='' />
                                </Link>

                                <Link
                                    href="https://www.instagram.com/thezurihotels/"
                                    target='_blank'
                                    className='text-decoration-none text-black'
                                >
                                    <Image src='/header/instafinal.svg' alt='' />
                                </Link>

                                <Link
                                    href="https://www.linkedin.com/company/the-zuri-hotels-&-resorts/"
                                    target='_blank'
                                    className='text-decoration-none text-black'
                                >
                                    <Image src='/header/linked_in_final.svg' alt='' />
                                </Link>
                            </Col>


                            <Col className='header-nav-menu'>
                                <ul className='d-flex flex-row gap-5 header-list'>
                                    <li className='text-black hotel nav-marker'>
                                        <p className='list-head text-black'>Hotels</p>

                                        <Col className='hotel-hidden'>
                                            <Col className='dimond-shap-1'>
                                            </Col>
                                            <Col className='d-flex flex-row flex-wrap gap-4 nav-show'>
                                                <Link
                                                    href="/lake-resorts-in-kumarakom/"
                                                    className='text-decoration-none text-white'
                                                >
                                                    <h6 className='header-font'>The Zuri Kumarakom, Kerala Resort & Spa</h6>
                                                </Link>

                                                <Link
                                                    href="/beach-resorts-in-goa/"
                                                    className='text-decoration-none text-white'
                                                >
                                                    <h6 className='header-font'>The Zuri White Sands, Goa Resort & Casino</h6>
                                                </Link>

                                                <Link
                                                    href="/hotels-in-bengaluru/"
                                                    className='text-decoration-none text-white'
                                                >
                                                    <h6 className='header-font'>The Zuri Whitefield, Bengaluru</h6>
                                                </Link>
                                            </Col>
                                        </Col>
                                    </li>


                                    <li className='text-black events nav-marker'>
                                        <p className='list-head text-black'>Events</p>

                                        <Col className='events-hidden'>
                                            <Col className='dimond-shap-2'>
                                            </Col>
                                            <Col className='d-flex flex-row flex-wrap gap-4 nav-show'>
                                                <Link
                                                    href="/lake-resorts-in-kumarakom/events/"
                                                    className='text-decoration-none text-white'
                                                >
                                                    <h6 className='header-font'>The Zuri Kumarakom, Kerala Resort & Spa</h6>
                                                </Link>

                                                <Link
                                                    href="/beach-resorts-in-goa/events/"
                                                    className='text-decoration-none text-white'
                                                >
                                                    <h6 className='header-font'>The Zuri White Sands, Goa Resort & Casino</h6>
                                                </Link>

                                                <Link
                                                    href="/hotels-in-bengaluru/events/"
                                                    className='text-decoration-none text-white'
                                                >
                                                    <h6 className='header-font'>The Zuri Whitefield, Bengaluru</h6>
                                                </Link>
                                            </Col>
                                        </Col>
                                    </li>

                                    <li className='text-black offers nav-marker'>
                                        <p className='list-head text-black'>Offers</p>

                                        <Col className='offers-hidden'>
                                            <Col className='dimond-shap-3'>
                                            </Col>
                                            <Col className='d-flex flex-row flex-wrap gap-4 nav-show'>
                                                <Link
                                                    href="/offers/stay-offers/"
                                                    className='text-decoration-none text-white'
                                                >
                                                    <h6 className='header-font'>Stay Offers</h6>
                                                </Link>

                                                <Link
                                                    href="/offers/dining-offers/"
                                                    className='text-decoration-none text-white'
                                                >
                                                    <h6 className='header-font'>Dining Offers</h6>
                                                </Link>

                                                <Link
                                                    href="/offers/ayurveda-package"
                                                    className='text-decoration-none text-white'
                                                >
                                                    <h6 className='header-font'>Ayurveda Packages</h6>
                                                </Link>
                                            </Col>
                                        </Col>
                                    </li>

                                    <li className='text-black mayaspa nav-marker'>
                                        <p className='list-head text-black'>Maya Spa</p>

                                        <Col className='mayaspa-hidden'>
                                            <Col className='dimond-shap-4'>
                                            </Col>
                                            <Col className='d-flex flex-row flex-wrap gap-4 nav-show'>
                                                <Link
                                                    href="/lake-resorts-in-kumarakom/maya-spa/"
                                                    className='text-decoration-none text-white'
                                                >
                                                    <h6 className='header-font'>The Zuri Kumarakom, Kerala Resort & Spa</h6>
                                                </Link>

                                                <Link
                                                    href="/beach-resorts-in-goa/maya-spa/"
                                                    className='text-decoration-none text-white'
                                                >
                                                    <h6 className='header-font'>The Zuri White Sands, Goa Resort & Casino</h6>
                                                </Link>

                                                <Link
                                                    href="/hotels-in-bengaluru/maya-spa/"
                                                    className='text-decoration-none text-white'
                                                >
                                                    <h6 className='header-font'>The Zuri Whitefield, Bengaluru</h6>
                                                </Link>
                                            </Col>
                                        </Col>
                                    </li>

                                    <li className='text-black contact nav-marker'>

                                        <Link
                                            href="/contact-us"
                                            className='text-decoration-none text-white'
                                        >
                                            <p className='list-head text-black'>Contact Us</p>
                                        </Link>
                                    </li>

                                    <li className='text-black blog nav-marker'>
                                        <Link
                                            href="/blog/"
                                            target='_blank'
                                            className='text-decoration-none text-white'
                                        >
                                            <p className='list-head text-black'>Blog</p>
                                        </Link>
                                    </li>
                                </ul>
                                <Col className='search-main'>
                                    <Col className='search-custom ps-5'>
                                        <Col class="input-group search-form-cd ">
                                            <input type="search" id="form1" class="form-control border-0" placeholder='Search' />
                                            <button type="button" class="bg-transparent border-0 search-input-btn">
                                                <Image src='/header/search_icon_final.svg' alt='' height={15} />
                                            </button>
                                        </Col>
                                    </Col>
                                    <Col className='make-reservation'>
                                        <h6 className='mb-0 make-reservation-font'
                                            onClick={() => setOpen(!open)}
                                        >
                                            MAKE A RESERVATION
                                        </h6>
                                        <span className='makereservation-dimond'></span>
                                    </Col>

                                    <Collapse in={open}>
                                        <Col id="example-collapse-text">
                                            <Container>
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                                labore wes anderson cred nesciunt sapiente ea proident.
                                                <h6 className='text-purple'
                                                    onClick={
                                                        () => setOpen(false)
                                                    }
                                                >
                                                    Close
                                                </h6>
                                            </Container>
                                        </Col>

                                    </Collapse>
                                </Col>
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </Container >
        </>
    );
}

export default Header;
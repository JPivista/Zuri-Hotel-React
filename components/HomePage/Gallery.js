import React, { useState } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import './home-slider.css'

const Gallery = () => {

    const [showText, setShowText] = useState(false)

    function handleEvent(e) {
        e.target.style.background = 'red';
        e.target.style.width = e.target.clientWidth > 100 ? '80%' : '10%';
    }

    function handleEvent2(e) {
        e.target.style.background = 'orange';
        e.target.style.width = e.target.clientWidth > 100 ? '80%' : '10%';
    }


    return (
        <>
            <Container className='p-0 py-5'>

                <Col className='d-flex flex-column align-items-center'>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2'>GALLERY</h6>
                </Col>

                <Row className='accordin-main'>
                    <Col className='bg-danger  accordion-item' onMouseOver={handleEvent} md={1}>
                        <p>test1</p>
                    </Col>
                    <Col className='bg-info accordion-item' onMouseOver={handleEvent2} md={1}>
                        <p>test2</p>
                    </Col>
                    <Col className='bg-black accordion-item' md={1}>
                        <p>test3</p>
                    </Col>
                </Row>
                {/* <Row className='accordin-main' onMouseEnter={handleMouseHover}>
                    <Col className='bg-danger accordion-item acc-hover-1' md={1}>
                        <p>test</p>
                    </Col>
                    <Col className='bg-info accordion-item acc-hover-2' md={1}>
                        <p>test</p>
                    </Col>
                    <Col className='bg-black accordion-item acc-hover-3' md={1}>
                        <p>test</p>
                    </Col>
                </Row> */}
            </Container >
        </>
    )
}

export default Gallery
import React, { useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import './home-slider.css'

const Gallery = () => {

    const [ishover, sethover] = useState();



    return (
        <>
            <Container className='p-0 py-5'>

                <Col className='d-flex flex-column align-items-center'>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2'>GALLERY</h6>
                </Col>

                <Row className='accordin-main '>
                    <Col className='bg-danger accordion-item acc-hover-1' md={1}>
                        <p>test</p>
                    </Col>
                    <Col className='bg-info accordion-item acc-hover-2' md={1}>
                        <p>test</p>
                    </Col>
                    <Col className='bg-black accordion-item acc-hover-3' md={1}>
                        <p>test</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Gallery
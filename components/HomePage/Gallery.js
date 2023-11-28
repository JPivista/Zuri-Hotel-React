import React, { useState } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import './home-slider.css'


const Gallery = () => {

    const [width, setWidth] = useState('10%');
    const [width1, setWidth1] = useState('10%');
    const [width2, setWidth2] = useState('10%');


    const handleMouseOver = () => {
        if (handleMouseOver) {
            setWidth('80%');
        } else if (handleMouseOver1) {
            setWidth1('10%')
        } else if (handleMouseOver2) {
            setWidth2('10%')
        }

    }
    const handleMouseOver1 = () => {
        if (handleMouseOver) {
            setWidth('10%');
        } else if (handleMouseOver1) {
            setWidth1('80%')
        } else if (handleMouseOver2) {
            setWidth2('10%')
        }
    }
    const handleMouseOver2 = () => {
        if (handleMouseOver) {
            setWidth('10%');
        } else if (handleMouseOver1) {
            setWidth1('10%');
        } else if (handleMouseOver2) {
            setWidth2('80%');
        }
    }

    return (
        <>
            <Container className='p-0 py-5'>

                <Col className='d-flex flex-column align-items-center'>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2'>GALLERY</h6>
                </Col>
                <div className="container1">
                    <div onMouseOver={handleMouseOver}
                        style={{ width: width }}
                    >
                        Row 1
                    </div>
                    <div onMouseOver={handleMouseOver1}
                        style={{ width: width1 }}
                    >
                        Row 2
                    </div>
                    <div
                        onMouseOver={handleMouseOver1}
                        style={{ width: width2 }}
                    >
                        Row 3
                    </div>
                </div>


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
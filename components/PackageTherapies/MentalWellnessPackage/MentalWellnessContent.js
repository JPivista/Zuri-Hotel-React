import Link from 'next/link'
import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

import '../../custom.css'

const MentalWellnessContent = () => {
    return (
        <>
            <Container className='p-md-0 py-md-5 p-2'>

                <Col className='text-center'>
                    <Image src='/cl.png' alt='' />
                    <h6 className='text-decoration-underline text-black'>MENTAL WELLNESS PACKAGE</h6>
                    <p>
                        Mental Wellness – Mental Wellness includes our emotional, psychological and social wellbeing. Ayurvedic methods of mental health (Manas Shastra) management focus on prevention, gentle intervention and do not stigmatize mental health. We all go through cycles of feeling lethargic, productive and restless, light, alert and blissful. Ayurveda enumerates three attributes of the mind to summarize these qualities: Tamas (heaviness), Rajas (activity and restlessness) and Sattva (pure, clear, happy quality of the mind). We need Tamas to rest and Rajas to act, but when they go out of balance, psychological issues like depression, loss of focus and extreme aggression result. Sattva endows us with good mental health, happiness, wisdom and the ability to do our 100%. To enhance mental health, you can follow practices to improve Sattva.
                    </p>

                </Col>

                {/* Table 1 */}
                <Col className='d-flex overflow-scroll'>
                    <table class="table table-bordered text-center">
                        <thead className='w-100'>
                            <tr>
                                <th scope="col">
                                    <p className='text-custom-grey mb-0' >Min Length of stay</p>
                                </th>
                                <th scope="col" colSpan={2}>
                                    <p className='text-custom-grey mb-0' >7 Nights</p>
                                </th>
                                <th scope="col" colSpan={2}>
                                    <p className='text-custom-grey mb-0' >14 Nights</p>
                                </th>
                                <th scope="col" colSpan={2}>
                                    <p className='text-custom-grey mb-0' >21 Nights</p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    <p className='text-custom-grey mb-0' >
                                        Occupancy
                                    </p>
                                </th>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        Single
                                    </p>
                                </td>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        Double
                                    </p>
                                </td>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        Single
                                    </p>
                                </td>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        Double
                                    </p>
                                </td>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        Single
                                    </p>
                                </td>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        Double
                                    </p>
                                </td>
                            </tr>

                            <tr>
                                <th>
                                    <p className='text-custom-grey mb-0'>
                                        Zuri Deluxe
                                    </p>
                                </th>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        161700
                                    </p>
                                </td>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        248325
                                    </p>
                                </td>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        319773
                                    </p>
                                </td>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        492076
                                    </p>
                                </td>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        485100
                                    </p>
                                </td>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        739200
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <p className='text-custom-grey mb-0'>
                                        Cottage
                                    </p>
                                </th>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        231000
                                    </p>
                                </td>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        311850
                                    </p>
                                </td>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        462000
                                    </p>
                                </td>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        623700
                                    </p>
                                </td>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        693000
                                    </p>
                                </td>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        924000
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <p className='text-custom-grey mb-0'>
                                        Pool Villa
                                    </p>
                                </th>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        271425
                                    </p>
                                </td>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        392700
                                    </p>
                                </td>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        548625
                                    </p>
                                </td>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        785400
                                    </p>
                                </td>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        825828
                                    </p>
                                </td>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        1155000
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Col>


                <Col className='py-4 text-center'>
                    <p>
                        The above price inclusive of accommodation in respective category room, 3 meals in the lime tree restaurant and spa appointments as indicated below,
                    </p>
                </Col>


                {/* Table 2 */}

                <Col className='d-flex overflow-scroll'>
                    <table class="table table-bordered text-center">
                        <thead className='w-100'>
                            <tr>
                                <th scope="col">
                                    <p className='text-custom-grey mb-0' >Includes</p>
                                </th>
                                <th scope="col" >
                                    <p className='text-custom-grey mb-0' >Duration</p>
                                </th>
                                <th scope="col">
                                    <p className='text-custom-grey mb-0' >5 Nights</p>
                                </th>
                                <th scope="col">
                                    <p className='text-custom-grey mb-0' >7 Nights	</p>
                                </th>
                                <th scope="col">
                                    <p className='text-custom-grey mb-0' >14 Nights	</p>
                                </th>
                                <th scope="col">
                                    <p className='text-custom-grey mb-0' >21 Nights	</p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    <p className='text-custom-grey mb-0' >
                                        Ayurveda Consultation
                                    </p>
                                </th>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        30 min
                                    </p>
                                </td>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        1 session
                                    </p>
                                </td>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        1 session
                                    </p>
                                </td>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        1 session
                                    </p>
                                </td>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        1 session
                                    </p>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">
                                    <p className='text-custom-grey mb-0' >
                                        Personalised Yoga Classes
                                    </p>
                                </th>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        60 min
                                    </p>
                                </td>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        1 session
                                    </p>
                                </td>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        1 session
                                    </p>
                                </td>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        2 session
                                    </p>
                                </td>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        4 session
                                    </p>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">
                                    <p className='text-custom-grey mb-0' >
                                        Personalised Ayurvedic massage
                                    </p>
                                </th>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        30-60 min
                                    </p>
                                </td>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        8 session
                                    </p>
                                </td>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        13 session
                                    </p>
                                </td>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        26 session
                                    </p>
                                </td>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        38 session
                                    </p>
                                </td>

                            </tr>

                            <tr>
                                <th scope="row">
                                    <p className='text-custom-grey mb-0' >
                                        Wellness consultation
                                    </p>
                                </th>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        30 min
                                    </p>
                                </td>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        1 session
                                    </p>
                                </td>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        1 session
                                    </p>
                                </td>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        1 session
                                    </p>
                                </td>
                                <td>
                                    <p className='text-custom-grey mb-0'>
                                        1 session
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Col>

                <Col className='text-center py-4'>
                    <h6 className='text-decoration-underline text-black py-3'>DAILY SCHEDULE</h6>

                    <Col className='d-flex overflow-scroll'>
                        <table class="table table-bordered text-center">
                            <thead className='w-100'>
                                <tr>
                                    <th scope="col">
                                        <p className='text-custom-grey mb-0' >5.30 A.M</p>
                                    </th>
                                    <th scope="col" >
                                        <p className='text-custom-grey mb-0' >Wake up</p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        <p className='text-custom-grey mb-0' >
                                            6.15 A.M
                                        </p>
                                    </th>
                                    <td>
                                        <p className='text-custom-grey mb-0'>
                                            Morning Walk
                                        </p>
                                    </td>
                                </tr>

                                <tr>
                                    <th scope="row">
                                        <p className='text-custom-grey mb-0' >
                                            7.00 – 8.00A.M
                                        </p>
                                    </th>
                                    <td>
                                        <p className='text-custom-grey mb-0'>
                                            Group Yoga Session
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <p className='text-custom-grey mb-0' >
                                            8.30 – 9.30A.M
                                        </p>
                                    </th>
                                    <td>
                                        <p className='text-custom-grey mb-0'>
                                            Break fast
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <p className='text-custom-grey mb-0' >
                                            8.30 – 9.30A.M
                                        </p>
                                    </th>
                                    <td>
                                        <p className='text-custom-grey mb-0'>
                                            Read Newspaper/ Rest
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <p className='text-custom-grey mb-0' >
                                            10.00 – 01.00P.M
                                        </p>
                                    </th>
                                    <td>
                                        <p className='text-custom-grey mb-0'>
                                            Treatments Or Fitness
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <p className='text-custom-grey mb-0' >
                                            01.00 – 2.00P.M
                                        </p>
                                    </th>
                                    <td>
                                        <p className='text-custom-grey mb-0'>
                                            Lunch at Lime tree (Choose from our Spa Diet Menu**)
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <p className='text-custom-grey mb-0' >
                                            2.00 – 3.00P.M
                                        </p>
                                    </th>
                                    <td>
                                        <p className='text-custom-grey mb-0'>
                                            Library/ Rest
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <p className='text-custom-grey mb-0' >
                                            3.00 – 6.00P.M
                                        </p>
                                    </th>
                                    <td>
                                        <p className='text-custom-grey mb-0'>
                                            Treatments/ Fitness
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <p className='text-custom-grey mb-0' >
                                            6.00 – 7.00P.M
                                        </p>
                                    </th>
                                    <td>
                                        <p className='text-custom-grey mb-0'>
                                            Bicycle ride/ Village walk
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <p className='text-custom-grey mb-0' >
                                            7.30 – 8.30P.M
                                            <br />
                                            Early light dinner help you end the day well.
                                        </p>
                                    </th>
                                    <td>
                                        <p className='text-custom-grey mb-0'>
                                            Dinner (Choose from our Spa Diet Menu**)
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                </Col>

                <Col className='d-flex flex-column flex-wrap  gap-3'>
                    <Col className='pt-md-5'>
                        <h6 className='text-black'>Points to Note
                        </h6>
                        <ul>
                            <li>Package valid throughout the year except from 20th December 2023 to 3rd January 2024</li>
                            <li>Please note: The rates are inclusive of taxes.</li>
                            <li>There will be personalized treatment schedule after the consultation with our Doctor.</li>
                            <li>Please contact <Link
                                href="mailto:santhosh.kumar@thezurihotels.com"
                                className='text-decoration-none text-black'>
                                santhosh.kumar@thezurihotels.com
                            </Link> for further details</li>
                            <li>Use of Spa therapies and facilities are limited to guests who are aged 16 years and above</li>
                        </ul>
                    </Col>

                    <Col className=''>
                        <p className='text-custom-grey'>
                            <b>
                                Airport transfer (Cochin airport) can be arranged by a Mahindra Verito car at INR 4,720/- per way or by a Toyota Innova car at INR 5,900/- or by a Toyota Crysta car at INR 7,080/- per way.
                            </b>
                        </p>

                        <p>
                            Call the hotel at <Link
                                href="tel:+91 481 252 7272"
                                className='text-decoration-none text-black'>
                                +91 481 252 7272
                            </Link> to avail the package
                        </p>
                    </Col>
                </Col>


            </Container>
        </>
    )
}

export default MentalWellnessContent
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script';

import 'react-multi-carousel/lib/styles.css';

// import "yet-another-react-lightbox/styles.css";

import "node_modules/video-react/dist/video-react.css"; // import css

import 'react-tabs/style/react-tabs.css';

const index = () => {
    return (
        <>
            <Script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin />

            <Script
                src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
                crossorigin />

            <Script
                src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
                crossorigin />

            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
                integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
                crossorigin="anonymous"
            />

            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />

        </>
    )
}

export default index
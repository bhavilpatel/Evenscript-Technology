import React from 'react'
import SlickSlider from './SlickSlider';
import Head from 'next/head';

import Portfolio1 from '../../Assets/Portfolio/Portfolio9/Portfolio9(1).webp';
import Portfolio2 from '../../Assets/Portfolio/Portfolio9/Portfolio9(2).webp';
import Portfolio3 from '../../Assets/Portfolio/Portfolio9/Portfolio9(3).webp';

function portfolio9() {

    const data = [
        {
            id: 1,
            img: Portfolio1
        },
        {
            id: 2,
            img: Portfolio2
        },
        {
            id: 3,
            img: Portfolio3
        },
    ]

    return (
        <div className="xl:mt-[120px] mt-[90px] animate-slideUpEnter">
            <Head>
                <title>EvenScript | Portfolio9</title>
                <meta property="og:title" content="Portfolio9" key="EvenScript" />
                <meta
                    name="description"
                    content=""
                />
                <meta
                    property="og:image"
                    content=""
                />
            </Head>
            <div className="flex flex-wrap flex-col justify-center items-center">
                <SlickSlider data={data} />
            </div>
        </div>
    )
}

export default portfolio9
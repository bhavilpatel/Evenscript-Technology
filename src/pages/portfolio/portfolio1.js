import React from 'react'
import SlickSlider from './SlickSlider';
import Head from 'next/head';

import Portfolio1 from '../../Assets/Portfolio/Portfolio1/Portfolio1(1).webp';
import Portfolio2 from '../../Assets/Portfolio/Portfolio1/Portfolio1(2).webp';
import Portfolio3 from '../../Assets/Portfolio/Portfolio1/Portfolio1(3).webp';
import Portfolio4 from '../../Assets/Portfolio/Portfolio1/Portfolio1(4).webp';
import Portfolio5 from '../../Assets/Portfolio/Portfolio1/Portfolio1(5).webp';

function portfolio1() {

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
        {
            id: 4,
            img: Portfolio4
        },
        {
            id: 5,
            img: Portfolio5
        }
    ]

    return (
        <div className="xl:mt-[120px] mt-[90px] animate-slideUpEnter">
            <Head>
                <title>EvenScript | Portfolio1</title>
                <meta property="og:title" content="Portfolio1" key="EvenScript" />
                <meta
                    name="description"
                    content=""
                />
                <meta
                    property="og:image"
                    content=""
                />
            </Head>
            <div className=" w-[100%] flex flex-wrap flex-col justify-center items-center">
                <SlickSlider data={data} />
            </div>
        </div>
    )
}

export default portfolio1
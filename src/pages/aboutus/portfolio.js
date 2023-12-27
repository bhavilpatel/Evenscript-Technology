import React, { useState } from 'react'
import Image from 'next/image';
import Head from 'next/head';

import Portfolio1 from '../../Assets/Portfolio/Portfolio1/Portfolio1(1).webp';
import Portfolio2 from '../../Assets/Portfolio/Portfolio2/Portfolio2(1).webp';
import Portfolio3 from '../../Assets/Portfolio/Portfolio3/Portfolio3(1).webp';
import Portfolio4 from '../../Assets/Portfolio/Portfolio4/Portfolio4(1).webp';
import Portfolio5 from '../../Assets/Portfolio/Portfolio5/Portfolio5(1).webp';
import Portfolio6 from '../../Assets/Portfolio/Portfolio6/Portfolio6(1).webp';
import Portfolio7 from '../../Assets/Portfolio/Portfolio7/Portfolio7(1).webp';
import Portfolio8 from '../../Assets/Portfolio/Portfolio8/Portfolio8(1).webp';
import Portfolio9 from '../../Assets/Portfolio/Portfolio9/Portfolio9(1).webp';
import Portfolio10 from '../../Assets/Portfolio/Portfolio10/Portfolio10(1).webp';
import Portfolio11 from '../../Assets/Portfolio/Portfolio11/Portfolio11(1).webp';
import Portfolio12 from '../../Assets/Portfolio/Portfolio12/Portfolio12(1).webp';

function Portfolio() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const imageLoader = (src) => {
        return src;
    }

    const All = [

        {
            id: 1,
            src: "/portfolio/portfolio1",
            img: Portfolio1,
            number: "Portfolio 1",
        },
        {
            id: 2,
            src: "/portfolio/portfolio2",
            img: Portfolio2,
            number: "Portfolio 2",
        },
        {
            id: 3,
            src: "/portfolio/portfolio3",
            img: Portfolio3,
            number: "Portfolio 3",
        },
        {
            id: 4,
            src: "/portfolio/portfolio4",
            img: Portfolio4,
            number: "Portfolio 4",
        },
        {
            id: 5,
            src: "/portfolio/portfolio5",
            img: Portfolio5,
            number: "Portfolio 5",
        },
        {
            id: 6,
            src: "/portfolio/portfolio6",
            img: Portfolio6,
            number: "Portfolio 6",
        },
        {
            id: 7,
            src: "/portfolio/portfolio7",
            img: Portfolio7,
            number: "Portfolio 7",
        },
        {
            id: 8,
            src: "/portfolio/portfolio8",
            img: Portfolio8,
            number: "Portfolio 8",
        },
        {
            id: 9,
            src: "/portfolio/portfolio9",
            img: Portfolio9,
            number: "Portfolio 9",
        },
        {
            id: 10,
            src: "/portfolio/portfolio10",
            img: Portfolio10,
            number: "Portfolio 10",
        },
        {
            id: 11,
            src: "/portfolio/portfolio11",
            img: Portfolio11,
            number: "Portfolio 11",
        },
        {
            id: 12,
            src: "/portfolio/portfolio12",
            img: Portfolio12,
            number: "Portfolio 12",
        },




    ]

    const Website = [
        {
            id: 1,
            src: "/portfolio/portfolio2",
            img: Portfolio1,
            number: "Portfolio 1",
        },
        {
            id: 2,
            src: "/portfolio/portfolio5",
            img: Portfolio5,
            number: "Portfolio 2",
        },
        {
            id: 3,
            src: "/portfolio/portfolio3",
            img: Portfolio3,
            number: "Portfolio 3",
        },
        {
            id: 4,
            src: "/portfolio/portfolio7",
            img: Portfolio7,
            number: "Portfolio 4",
        },
        {
            id: 5,
            src: "/portfolio/portfolio8",
            img: Portfolio11,
            number: "Portfolio 5",
        },
        {
            id: 6,
            src: "/portfolio/portfolio9",
            img: Portfolio9,
            number: "Portfolio 6",
        },
    ]

    const Mobile = [
        {
            id: 1,
            src: "/portfolio/portfolio11",
            img: Portfolio8,
            number: "Portfolio 1",
        },
        {
            id: 2,
            src: "/portfolio/portfolio1",
            img: Portfolio2,
            number: "Portfolio 2",
        },
        {
            id: 3,
            src: "/portfolio/portfolio10",
            img: Portfolio10,
            number: "Portfolio 3",
        },
        {
            id: 4,
            src: "/portfolio/portfolio6",
            img: Portfolio6,
            number: "Portfolio 4",
        },
        {
            id: 5,
            src: "/portfolio/portfolio12",
            img: Portfolio12,
            number: "Portfolio 5",
        },
        {
            id: 6,
            src: "/portfolio/portfolio4",
            img: Portfolio4,
            number: "Portfolio 6",
        },
    ]

    return (
        <div className="xl:mt-[120px] mt-[60px] justify-center animate-slideUpEnter">
            <Head>
                <title>EvenScript | Portfolio</title>
                <meta property="og:title" content="Portfolio" key="EvenScript" />
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
                <div className=" w-[98%] md:w-[85%] lg:w-[75%]">
                    <div className="text-2xl lg:text-4xl font-bold text-center w-[96%]">Portfolio</div>

                    <div>
                        <div className="containers">
                            <div className="bloc-tabs rounded-xl">
                                <button
                                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                                    onClick={() => toggleTab(1)}
                                >
                                    All
                                </button>
                                <button
                                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                                    onClick={() => toggleTab(2)}
                                >
                                    Mobile
                                </button>
                                <button
                                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                                    onClick={() => toggleTab(3)}
                                >
                                    Web
                                </button>
                            </div>

                            <div className="contents-tabs">
                                <div
                                    className={toggleState === 1 ? "content  active-content" : "content"}
                                >
                                    <div className="flex flex-wrap gap-y-10 justify-between items-center animate-slideUpEnter">
                                        {All.map((pf, index) => (
                                            <div key={index} className="flex flex-wrap w-[100%] md:w-[48%] xl:w-[30%]">
                                                <a href={pf.src}>
                                                    <figure>
                                                        <Image src={pf.img} alt={pf.number} width={1000} height={300}/>
                                                        <figcaption>{pf.number}</figcaption>
                                                    </figure>
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div
                                    className={toggleState === 2 ? "content  active-content" : "content"}
                                >
                                    <div className="flex flex-wrap gap-y-10 justify-between items-center animate-slideUpEnter">
                                        {Mobile.map((pf, index) => (
                                            <div key={index} className="flex flex-wrap w-[100%] md:w-[48%] xl:w-[30%]">
                                                <a href={pf.src}>
                                                    <figure>
                                                        <Image className="w-[400px] h-[220px]" src={pf.img} alt={pf.number} width={1000} height={300} />
                                                        <figcaption>{pf.number}</figcaption>
                                                    </figure>
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div
                                    className={toggleState === 3 ? "content  active-content" : "content"}
                                >
                                    <div className="flex flex-wrap gap-y-10 justify-between items-center animate-slideUpEnter">
                                        {Website.map((pf, index) => (
                                            <div key={index} className="flex flex-wrap w-[100%] md:w-[48%] xl:w-[30%]">
                                                <a href={pf.src}>
                                                    <figure>
                                                        <Image className="w-[400px] h-[220px]" src={pf.img} alt={pf.number} width={1000} height={300} />
                                                        <figcaption>{pf.number}</figcaption>
                                                    </figure>
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
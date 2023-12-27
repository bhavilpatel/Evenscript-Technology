import React from 'react'
import Slider from "react-slick";
import Image from 'next/image';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlickSlider({ data }) {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1900,
        cssEase: ""
    };


    return (

        <div className="w-[100%] h-[100%] flex flex-wrap">
            <Slider className="lg:w-[55%] w-[98%] rounded-2xl" {...settings}>
                {data?.map((nft, index) => (
                    <div key={index} className="slide">
                        <div className="relative">
                            <div className=" hover:scale-105 duration-500 transition ease-in-out ">
                                <div><Image className="w-[99%] rounded-xl " src={nft.img} alt={nft.img} width={1000} height={300}/></div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div >
    )
}

export default SlickSlider
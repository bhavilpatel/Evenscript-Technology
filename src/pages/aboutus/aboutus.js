import Head from 'next/head';
import Image from 'next/image';
import React from 'react'

import About from '../../Assets/AboutUs/AboutUs.webp'

function AboutUs() {
  return (
    <div className="mt-[90px] justify-center animate-slideUpEnter">
      <Head>
        <title>EvenScript | About Us</title>
        <meta name="description" content="Evenscript technology is a strong team of professionals, each with expertise in their skills to deliver fast and reliable solutions. In the modern world of internet, we build strong business relationships with clients around the world, helping them leverage technology to take their business to the next level.." />
        <link rel="canonical" href="/aboutus/aboutus" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="EvenScript | About Us" />
        <meta property="og:description" content="Evenscript technology is a strong team of professionals, each with expertise in their skills to deliver fast and reliable solutions. In the modern world of internet, we build strong business relationships with clients around the world, helping them leverage technology to take their business to the next level.." />
        <meta property="og:url" content="https://evenscript.com/aboutus/aboutus" />
        <meta property="og:site_name" content="Even Script" />
        <meta property="article:publisher" content="https://www.facebook.com/Evenscript-104525715757883/" />
        <meta property="article:modified_time" content="2023-01-28T06:58:56+00:00" />
        <meta property="og:image" content={About} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@hr_re95928686" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="5 minutes" />
      </Head>
      <div className="flex flex-wrap flex-col justify-center items-center">
        <div className=" w-[98%] md:w-[85%] lg:w-[75%]">
          <div className="relative w-[100%] h-[500px] flex flex-wrap flex-col justify-center items-center">
            <Image className=" w-[100%] h-[500px] hidden md:block rounded-xl" src="https://i.pinimg.com/originals/1c/b3/2e/1cb32e5eca87add3785208e57a3e0e3e.gif" alt="" width={1000} height={300} />

            <div className="absolute flex flex-wrap bg-black/50 w-[100%] h-[500px] justify-center items-center text-center flex-col rounded-xl">
              <div className="text-5xl text-white font-bold flex flex-wrap items-center">About Us</div>
            </div>
          </div>

          <div className="flex flex-wrap flex-col justify-center items-center">
            <div className="z-30 flex flex-wrap flex-col justify-center items-center mt-10 p-1">

              <div className="flex flex-wrap w-[100%] bg-violet-200 rounded-2xl p-5">
                <div className="text-2xl font-semibold ">We make it happen</div>
                <div>Evenscript technology is a strong team of professionals, each with expertise in their skills to deliver fast and reliable solutions. In the modern world of internet, we build strong business relationships with clients around the world, helping them leverage technology to take their business to the next level..</div>
              </div>

              <div className="flex flex-wrap gap-5 justify-center items-center">
                <div className="w-[100%] xl:w-[30%]">
                  <div className=" flex flex-wrap justify-around">
                    <div className="w-[100%] lg:w-[49%] xl:w-[100%] boxs bg-violet-200 rounded-2xl p-5 mt-5">
                      <div className=" text-2xl font-semibold">Our Vision</div>
                      <div>We feel proud that we have such skills that will build strongest technological bridge for your business solutions. We design for clear & unique brand communication.</div>
                    </div>
                    <div className="w-[100%] lg:w-[49%] xl:w-[100%] boxs bg-violet-200 rounded-2xl p-5 mt-5">
                      <div className="text-2xl font-semibold">Our Solutions</div>
                      <div>By developing and implementing the functional system and strategies for blooming the client’s business. With the team of dedicated professionals, we are geared up to bring solution to the problems bothering your business ideas.</div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 w-[100%] xl:w-[65%]">
                  <Image className="rounded-xl" src={About} alt="" width={1000} height={300} />
                </div>
              </div>
            </div>
          </div>
        </div >
      </div>
    </div>
  )
}

export default AboutUs
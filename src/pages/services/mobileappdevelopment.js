import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

import MainImg from '../../Assets/Mobile/Main.webp'
import Mobile from '../../Assets/Mobile/Mobile.webp'

function mobileappdevelopment() {
  return (
    <div className="mt-[90px] justify-center animate-slideUpEnter">
      <Head>
        <title>EvenScript | Mobile App Development</title>
        <meta property="og:title" content="Mobile App Development" key="EvenScript" />
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
        <div className=" w-[98%] lg:w-[75%]">
          <div>
            <Image className="w-[100%]"
              src={MainImg}
              alt="Mobile App"
              width={1000}
              height={0} />
          </div>
          <div className="px-4">

            <div className="text-center text-xl md:text-2xl lg:text-3xl  font-bold font-sans mt-10">Trusted Mobile Application Development Company</div>

            <div className="boxs bg-violet-100/70 rounded-2xl mt-5 p-5 text-lg w-[100%]">Mobile app development is indeed nowadays necessary for all the business. We, as a mobile application development company can provide high quality standard mobile app of any category. We have worked with diverse brands, organizations, startups and individuals to create powerful apps from excellent idea.</div>

            <div className="mt-10">
              <div className="flex flex-wrap gap-5 items-center">
                <div className="w-[100%] rounded-3xl lg:w-[48%]">
                  <Image className="w-[100%] rounded-3xl"
                    src={Mobile}
                    alt="Mobile App"
                    width={1000}
                    height={0} />
                </div>
                <div className="flex flex-wrap gap-5 w-[100%] lg:w-[48%]">
                  <div className="boxs bg-violet-100/70 rounded-2xl p-5 text-lg w-[100%] md:w-[48%] lg:w-[100%]">Give your business a competitive edge with Evenscript technology full-stack Mobile App Development Services for Android and iOS devices. We have an expert team of app developers that can turn your ideas into reality.</div>
                  <div className=" boxs bg-violet-100/70 rounded-2xl p-5 text-lg w-[100%] md:w-[48%] lg:w-[100%]">Evenscript technology help you scale the digital maturity curve by offering high-end mobile app development services. We provide fully-fledged application design, integration, transformative top-grade solution, support, and a lot more.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default mobileappdevelopment
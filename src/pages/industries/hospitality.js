import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

import HospitalityImg from '../../Assets/Hospitality/Hospitality.webp'

function hospitality() {
  return (
    <div className="2xl:mt-[90px] mt-[60px] animate-slideUpEnter">
      <Head>
        <title>EvenScript | Hospitality</title>
        <meta property="og:title" content="Hospitality" key="EvenScript" />
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
          <div className="px-4">
            <div className="text-center text-xl md:text-2xl lg:text-3xl  font-bold font-sans mt-10">Hospitality</div>

            <div className="mt-10">
              <div className="flex flex-wrap gap-5 items-center">
                <div className="w-[100%] rounded-3xl"><Image className="w-[100%] rounded-3xl" src={HospitalityImg} alt="Hospitality" width={1000} height={300} /></div>
                <div className="flex flex-wrap mt-5 gap-5 justify-between w-[100%]">
                  <div className="boxs bg-violet-200 rounded-2xl p-5 text-lg w-[100%] lg:w-[48%]">
                    <div className=" text-3xl font-semibold">We bring life to the workplace</div>
                    <div className="mt-3">We’ve reinvented — and reinvigorated — how property management is done. By fusing hospitality with meticulous management, we create an office environment unlike anything you’ve experienced.</div>
                  </div>
                  <div className="boxs bg-violet-200 rounded-2xl p-5 text-lg w-[100%] lg:w-[48%]">
                    <div className="text-3xl font-semibold">A platform built for partnerships</div>
                    <div className="mt-3">Our hospitality-driven platform is a game changer in the industry. Combining state-of-the-art technology with a human focus, we’ll streamline your accounting, vendor management, lease administration, and more. Our goal? To delight you and your tenants, every day.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default hospitality
import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

import ManuImg from '../../Assets/ManuFacturing/ManuFacturing.webp'

function manufacturing() {
  return (
    <div className="2xl:mt-[90px] mt-[60px] animate-slideUpEnter">
      <Head>
        <title>EvenScript | Manufacturing</title>
        <meta property="og:title" content="Manufacturing" key="EvenScript" />
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
            <div className="text-center text-xl md:text-2xl lg:text-3xl  font-bold font-sans mt-10">Manufacturing</div>

            <div className="mt-10">
              <div className="flex flex-wrap gap-5 items-center">
                <div className="w-[100%] rounded-3xl"><Image className="w-[100%] rounded-3xl" src={ManuImg} alt="ManuFacturing" width={1000} height={300} /></div>
                <div className="flex flex-wrap mt-5 gap-5 justify-between w-[100%]">
                  <div className="boxs bg-violet-200 rounded-2xl p-5 text-lg w-[100%]">
                    <div className=" text-3xl font-semibold">Manufacturing Sector Services</div>
                    <div className="mt-3">The manufacturing sector provides the goods and services almost everyone uses on a daily basis, as well as parts and products used by businesses to function successfully. This sector can be found in a variety of industries, such as food, pharmaceutical, automobile, aerospace, chemical and textiles.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div>
  )
}

export default manufacturing
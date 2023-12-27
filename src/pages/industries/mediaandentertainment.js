import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

import MediaImg from '../../Assets/MediaAndEntertainment/MediaAndEntertainment.webp'

function mediaandentertainment() {
  return (
    <div className="2xl:mt-[90px] mt-[60px] animate-slideUpEnter">
      <Head>
        <title>EvenScript | Media & Entertainment</title>
        <meta property="og:title" content="Media & Entertainment" key="EvenScript" />
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
            <div className="text-center text-xl md:text-2xl lg:text-3xl  font-bold font-sans mt-10">Media And Entertainment</div>

            <div className="mt-10">
              <div className="flex flex-wrap gap-5 items-center">
                <div className="w-[100%] rounded-3xl"><Image className="w-[100%] rounded-3xl" src={MediaImg} alt="Media And Entertainment" width={1000} height={300} /></div>
                <div className="flex flex-wrap mt-5 gap-5 justify-between w-[100%]">
                  <div className="boxs bg-violet-200 rounded-2xl p-5 text-lg w-[100%] lg:w-[48%]">
                    <div className=" text-3xl font-semibold">Entertainment IT Services</div>
                    <div className="mt-3">Since entertainment play a very important role. Our team of experts can help you with financial forecasting, finance transformation, project management, revenue recognition and supply chain management. With digital media being delivered across new mediums, intellectual property disputes and risk management and created a new level in entertainment.</div>
                  </div>
                  <div className="boxs bg-violet-200 rounded-2xl p-5 text-lg w-[100%] lg:w-[48%]">
                    <div className="mt-3">With our specialist team, who have good exposure and experience with industry processes, allow us to achieve 50% Cost Savings. Our unique service of bundled technology and business process support services across departments and functions- publishers, merchandisers, broadcasting companies reduces the transition time.</div>
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

export default mediaandentertainment
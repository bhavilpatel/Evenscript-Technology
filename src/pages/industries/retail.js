import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

import RetailImg from '../../Assets/Retail/Retail.webp'

function retail() {
  return (
    <div className="2xl:mt-[90px] mt-[60px] animate-slideUpEnter">
      <Head>
        <title>EvenScript | Retail</title>
        <meta property="og:title" content="Retail" key="EvenScript" />
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
            <div className="text-center text-xl md:text-2xl lg:text-3xl  font-bold font-sans mt-10">Retail</div>

            <div className="mt-10">
              <div className="flex flex-wrap gap-5 items-center">
                <div className="w-[100%] rounded-3xl"><Image className="w-[100%] rounded-3xl" src={RetailImg} alt="Retail" width={1000} height={300} /></div>
                <div className="flex flex-wrap mt-5 gap-5 justify-between w-[100%]">
                  <div className="boxs bg-violet-200 rounded-2xl p-5 text-lg w-[100%] lg:w-[48%]">
                    <div className=" text-3xl font-semibold">IT Services & Solutions for Retail</div>
                    <div className="mt-3">Retail IT services focus on achieving higher efficiency in business operations and creating truly customer-centric experience for digital and physical sales channels.</div>
                  </div>
                  <div className="boxs bg-violet-200 rounded-2xl p-5 text-lg w-[100%] lg:w-[48%]">
                    <div className="mt-3">Operating in a niche market brings with it a number of challenges. Specialty Retailers must address issues such as efficient inventory management, complex supply chains, and competition with mass market retailers while simultaneously dealing with uncertain customer demands and increasing customer expectations.</div>
                    <div className="mt-3">Our core approach is aligned with your business’s strategic objectives, capabilities and information systems needs. Our solution-driven method has made us a premier trusted advisor for retail chains as well as online stores.</div>
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

export default retail
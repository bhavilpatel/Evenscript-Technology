import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

import TravelImg from '../../Assets/TravelAgency/TravelAgency.webp'
function travelagency() {
  return (
    <div className="2xl:mt-[90px] mt-[60px] animate-slideUpEnter">
      <Head>
        <title>EvenScript | Travel Agency</title>
        <meta property="og:title" content="Travel Agency" key="EvenScript" />
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
            <div className="text-center text-xl md:text-2xl lg:text-3xl  font-bold font-sans mt-10">Travel Agency</div>

            <div className="mt-10">
              <div className="flex flex-wrap gap-5 items-center">
                <div className="w-[100%] rounded-3xl"><Image className="rounded-3xl" src={TravelImg} alt="Travel Agency" width={1000} height={300} /></div>
                <div className="flex flex-wrap mt-5 gap-5 justify-between w-[100%]">
                  <div className="boxs bg-violet-200 rounded-2xl p-5 text-lg w-[100%] lg:w-[48%]">
                    <div className=" text-3xl font-semibold">What is B2B in travel industry and how it works</div>
                    <div className="mt-3">B2B in the travel industry plays a vital role, from local B2B to online travel portals. The explanatory meaning of B2B is Business to Business. And B2B in the travel and tourism sector works the same as any other industry. Such as we have in the eCommerce industry, from wholesaler to a retainer, the connection and relation name is B2B which explains the power of relation very beautifully in terms of business.</div>
                  </div>
                  <div className="boxs bg-violet-200 rounded-2xl p-5 text-lg w-[100%] lg:w-[48%]">
                    <div className="text-3xl font-semibold">What is a Business Travel Agency?</div>
                    <div className="mt-3">Business travel agencies, also known as travel management companies, provide travel-related services with discounts and perks, which can be adjusted to meet the company’s travel policy and duty of care for business travelers.</div>
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

export default travelagency
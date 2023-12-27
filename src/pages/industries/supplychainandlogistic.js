import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

import SupplyImg from '../../Assets/SupplyChainAndLogistic/SupplyChainAndLogistic.webp'
function supplychainandlogistic() {
  return (
    <div className="2xl:mt-[90px] mt-[60px] animate-slideUpEnter">
      <Head>
        <title>EvenScript | Supply Chain & Logistic</title>
        <meta property="og:title" content="Supply Chain & Logistic" key="EvenScript" />
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
            <div className="text-center text-xl md:text-2xl lg:text-3xl  font-bold font-sans mt-10">Supply Chain And Logistic</div>

            <div className="mt-10">
              <div className="flex flex-wrap gap-5 items-center">
                <div className="w-[100%] rounded-3xl"><Image className="w-[100%] rounded-3xl" src={SupplyImg} alt="Supply Chain And Logistic" width={1000} height={300} /></div>
                <div className="flex flex-wrap mt-5 gap-5 justify-between w-[100%]">
                  <div className="boxs bg-violet-200 rounded-2xl p-5 text-lg w-[100%] lg:w-[48%]">
                    <div className=" text-3xl font-semibold">Logistics And Transportation</div>
                    <div className="mt-3">Transportation and logistics industry is opposing a revolutionary change in the technological transformation, business entrepreneurship, transforming customer services and upcoming business strategies. The pace of innovation in the industry brings the uncertainty not only in the mind of new competitors but also in old players. Currently, industrial organizations are also focusing on developing automated techniques to tackle the issue related to the market.</div>
                  </div>
                  <div className="boxs bg-violet-200 rounded-2xl p-5 text-lg w-[100%] lg:w-[48%]">
                    <div className="text-3xl font-semibold">Our Techniques Will Be Fruitful For Your Business</div>
                    <div className="mt-3">Evenscript technology concentrates on overall marketing strategy to make the best services available for our customers.</div>
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

export default supplychainandlogistic
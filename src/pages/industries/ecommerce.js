import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

import EcomImg from '../../Assets/Ecommerce/Ecommerce.webp'

function ecommerce() {
  return (
    <div className="2xl:mt-[90px] mt-[60px] animate-slideUpEnter">
      <Head>
        <title>EvenScript | Ecommerce</title>
        <meta property="og:title" content="Ecommerce" key="EvenScript" />
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
            <div className="text-center text-xl md:text-2xl lg:text-5xl  font-bold font-sans mt-10">Ecommerce</div>

            <div className="mt-10">
              <div className="flex flex-wrap gap-5 items-center">
                <div className="w-[100%] rounded-3xl"><Image className="rounded-3xl" src={EcomImg} alt="Ecommerce" width={1000} height={300} /></div>
                <div className="flex flex-wrap mt-5 gap-5 justify-between w-[100%]">
                  <div className="boxs bg-violet-200 rounded-2xl p-5 text-lg w-[100%] lg:w-[48%]">
                    <div className=" text-3xl font-semibold">Retail and E-commerce Software</div>
                    <div className="mt-3">The term E-commerce, or electronic commerce, refers to the transactions managed through the internet. E-commerce is also recognized as electronic commerce or internet commerce. E-commerce also includes various other activities like internet banking, payment gateways, and online ticketing, etc.</div>
                  </div>
                  <div className="boxs bg-violet-200 rounded-2xl p-5 text-lg w-[100%] lg:w-[48%]">
                    <div className="text-3xl font-semibold">E-commerce Tech Used</div>
                    <div className="mt-3">Like every other industry in the market benefits from the advantage of the latest technology, so is the eCommerce/retail industry. Today various successful businesses are producing results by implementing technologies such as voice assistants, artificial intelligence (AI), and chatbots, in their operations. These technologies provide excellent customer experiences through instant communication.
                    </div>
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

export default ecommerce
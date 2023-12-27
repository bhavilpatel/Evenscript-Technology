import Head from 'next/head';
import Image from 'next/image';
import React from 'react'

import MainImg from '../../Assets/UI-UX/Main.webp'
import UiUx from '../../Assets/UI-UX/UiUx.webp'

function ui_uxdesigning() {
  return (
    <div className="mt-[90px] justify-center animate-slideUpEnter">
      <Head>
        <title>EvenScript | Ui-Ux Designing</title>
        <meta property="og:title" content="Ui-Ux Designing" key="EvenScript" />
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
            <Image className="w-[100%] rounded-xl"
              src={MainImg}
              alt="Ui-Ux Design"
              width={1000}
              height={0} />
          </div>
          <div className="px-4">

            <div className="text-center text-xl md:text-2xl lg:text-3xl  font-bold font-sans mt-10">Creating Informative, Intelligent Designs</div>

            <div className="mt-10">
              <div className="flex flex-wrap gap-9 items-center">
                <div className="boxs bg-violet-100/70 rounded-2xl p-5 text-xl w-[100%]">Evenscript technology being UI UX development company aims at establishing a strong business identity for its clients through its extraordinary UI/UX design services. The task is to analysis the business persona of the client and align the business goals through robust UI/UX design and development services.</div>
                <div className="flex flex-wrap w-[100%] justify-between mb-2 gap-8">
                  <div className="w-[100%] xl:w-[48%]">
                    <Image className="w-[100%] rounded-3xl"
                      src={UiUx}
                      alt="Ui-Ux Design"
                      width={1000}
                      height={0} />
                  </div>
                  <div className=" boxs items-center flex flex-wrap bg-violet-100/70 rounded-2xl p-5 text-xl w-[100%] xl:w-[48%]">Our expertise in User Experience Design (UX) make simplify interaction between our client’s target customers & their digital presence. Whether it is on a website, mobile application, email campaign, social media campaign, or even an Ad banner, our designs offer a unique digital experience. Our UX has enabled to create digital media presences, spurring customer loyalty & improving brand value.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default ui_uxdesigning
import Head from 'next/head';
import Image from 'next/image';
import React from 'react'

import MainImg from '../../Assets/Web/Main.webp'
import Web from '../../Assets/Web/Web.webp'

function websitedevelopment() {
  return (
    <div className="mt-[90px] justify-center animate-slideUpEnter">
      <Head>
        <title>EvenScript | Website Development</title>
        <meta property="og:title" content="Website Development" key="EvenScript" />
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
            <div>
              <Image className="w-[100%] rounded-xl"
                src={MainImg}
                alt="Web Devlopment"
                width={1000}
                height={0} />
            </div>
            <div className="px-4">
              <div className="text-center text-xl md:text-2xl lg:text-3xl  font-bold font-sans mt-10">Web Development Services To Develop Customized Websites</div>
              <div className="mt-10">
                <div className="mt-10">
                  <div className="flex flex-wrap gap-9 items-center">
                    <div className="boxs bg-violet-100/70 rounded-2xl p-5 text-xl w-[100%]">We hold an attentive and professional way to give services, and our great client base is a proof to the quality of our composition. Our purpose is to assist the web development industry prosper universally by giving high quality services and web solutions. We’re the most trusted web development company that holds extensive expertise in developing websites and applications for brands, organizations and companies. However, interactive and user-friendly website development, be assured, if you’re searching for a website development service provider company that can deliver you with a complete functioning.</div>
                    <div className="flex flex-wrap w-[100%] justify-between mb-2 gap-8">
                      <div className="w-[100%] xl:w-[48%]">
                        <Image className="w-[100%] rounded-3xl"
                          src={Web}
                          alt="Web Devlopment"
                          width={1000}
                          height={0} />
                      </div>
                      <div className=" boxs items-center flex flex-wrap bg-violet-100/70 rounded-2xl p-5 text-xl w-[100%] xl:w-[48%]">Evenscript technology has an experienced team of developers for website development having expertise in cms development, core php, codeigniter and other frameworks, wordpress, magento and various open source. Many open-source cms tools look good but technically, we have several expert cms developers to customize and enhance websites, in order that we will be made suitable for all types of your requirements.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default websitedevelopment
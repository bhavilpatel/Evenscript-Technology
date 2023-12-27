import Head from 'next/head';
import Image from 'next/image';
import React from 'react'

import NextImg from '../../Assets/Next/Next.webp'

function next() {
  return (
    <div className="md:mt-[120px] mt-[90px] animate-slideUpEnter">
      <Head>
        <title>EvenScript | Next</title>
        <meta property="og:title" content="Next" key="EvenScript" />
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
        <div className=" w-[90%] md:w-[85%] lg:w-[75%]">
          <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">Next Js</div>
          <div className="flex flex-wrap w-[100%] justify-between items-center">
            <div className="boxs bg-violet-100/70 rounded-lg p-3 w-[100%] mt-10">
              <div className="text-xl md:text-xl lg:text-2xl xl:text-3xl">Next.Js Development Services</div>
              <div className="text-xl mt-5">Next.js is a React framework that gives you building blocks to create web applications. By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.</div>
            </div>
            <div className="w-[100%] xl:w-[48%] flex flex-wrap justify-between mt-10 gap-y-5">
              <div className="boxs bg-violet-100/70 rounded-lg p-3 w-[100%] md:w-[48%] xl:w-[100%]">
                <div className="text-xl md:text-xl lg:text-2xl xl:text-3xl">Next.Js Development Services</div>
                <div className="text-xl mt-5">
                  <div> • Create a Next.js App.</div>
                  <div> • Navigate Between Pages.</div>
                  <div> • Assets, Metadata, and CSS.</div>
                  <div> • Pre-rendering and Data Fetching.</div>
                  <div> • Dynamic Routes.</div>
                  <div> • API Routes.</div>
                  <div> • Deploying Your Next.js App.</div>
                </div>
              </div>
            </div>
            <div className="w-[100%] xl:w-[48%] mt-10">
              <Image
                className="w-[100%] rounded-xl"
                src={NextImg}
                alt="Next"
                width={1000}
                height={0} />
            </div>
          </div>

          <div className="boxs bg-violet-100/70 rounded-lg p-3 w-[100%] mt-10">
            <div className="text-xl mt-5">By default, Next.js includes its own server with next start . If you have an existing backend, you can still use it with Next.js (this is not a custom server). A custom Next.js server allows you to start a server 100% programmatically in order to use custom server patterns.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default next
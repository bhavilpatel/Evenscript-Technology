import Head from 'next/head';
import Image from 'next/image';
import React from 'react'

import NodeImg from '../../Assets/Node/Node.webp'

function node() {
  return (
    <div className="md:mt-[120px] mt-[90px] animate-slideUpEnter">
      <Head>
        <title>EvenScript | Node</title>
        <meta property="og:title" content="Node" key="EvenScript" />
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
          <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">Node</div>
          <div className="flex flex-wrap w-[100%] justify-between items-center">
            <div className="boxs bg-violet-100/70 rounded-lg p-3 w-[100%] mt-10">
              <div className="text-xl md:text-xl lg:text-2xl xl:text-3xl">Node.js Development Services</div>
              <div className="text-xl mt-5">Node.js is a software development technology that is used by some of the biggest players in global business, from Netflix and PayPal to LinkedIn, to build fast, high-quality applications.</div>
            </div>
            <div className="w-[100%] xl:w-[48%] flex flex-wrap justify-between mt-10 gap-y-5">
              <div className="boxs bg-violet-100/70 rounded-lg p-3 w-[100%]">
                <div className="text-xl md:text-xl lg:text-2xl xl:text-3xl">Node.js Development Services</div>
                <div className="text-xl mt-5">
                  <div> • NodeJS API Development</div>
                  <div> • NodeJS Web and Mobile Application Development</div>
                  <div> • NodeJS Real-Time Application</div>
                  <div> • MEAN & MERN stack Development</div>
                  <div> • Consolidate AngularJS Development with NodeJS</div>
                  <div> • Social Networking Application</div>
                </div>
              </div>
            </div>
            <div className="w-[100%] xl:w-[48%] mt-10">
              <Image
                className="w-[100%] rounded-xl"
                src={NodeImg}
                alt="Node"
                width={1000}
                height={0} />
            </div>
          </div>

          <div className="boxs bg-violet-100/70 rounded-lg p-3 w-[100%] mt-10">
            <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-center">Achieve Business Objectives with our Node.js Web Development Services</div>
            <div className="text-xl mt-5">Being one of the established Node.js web service providers, we at Mobily are in the business of offering skilful applications. Whether it is about module and plug-in development solutions or an app development requirement, we have been delivering solutions to small and large-sized businesses. Having a talent for the node.js development, the flexibility of our developers lies in obtaining the business objectives with it. The prerequisite to hiring developers thus meets exclusively when custom Node.js solutions are developed. Explore our extensive experience in delivering high-quality solutions with Node.js.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default node
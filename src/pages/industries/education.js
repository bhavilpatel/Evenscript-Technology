import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

import EduImg from '../../Assets/Education/Education.webp'
function education() {
  return (
    <div className="2xl:mt-[90px] mt-[60px] animate-slideUpEnter">
      <Head>
        <title>EvenScript | Education</title>
        <meta property="og:title" content="Education" key="EvenScript" />
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
            <div className="text-center text-xl md:text-2xl lg:text-5xl  font-bold font-sans mt-10">Education</div>

            <div className="mt-10">
              <div className="flex flex-wrap gap-5 items-center">
                <div className="w-[100%] rounded-3xl"><Image className="rounded-3xl" src={EduImg} alt="Education" width={1000} height={300} /></div>
                <div className="flex flex-wrap mt-5 gap-5 justify-between w-[100%]">
                  <div className="boxs bg-violet-200 rounded-2xl p-5 text-lg w-[100%] lg:w-[48%]">
                    <div className="text-3xl font-semibold">Why Choose Us?</div>
                    <div className="mt-3">The modernization techniques used by us are highly competitive and efficient enough to streamline your processes hassle free. The developers, analysts, testing engineers, and designers understand end-to-end customer behavioral pattern before beginning the project, that helps in targeted development and solution building. We understand the education industry in, out and beyond, and provide services that cover the entire sector from providing knowledge to information management.</div>
                  </div>
                  <div className="boxs bg-violet-200 rounded-2xl p-5 text-lg w-[100%] lg:w-[48%]">
                    <div className=" text-3xl font-semibold">Enhanc The Education Industry With Upgraded Technology</div>
                    <div className="mt-3">Evenscript technology is helping clients in the Education sector become a part of the technological world, reduce manual effort, and make time to focus on necessary tasks.</div>
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

export default education
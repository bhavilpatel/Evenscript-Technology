import Head from 'next/head';
import Image from 'next/image';
import React from 'react'

import FlutterImg from '../../Assets/Flutter/Flutter.webp'


function flutter() {
  return (
    <div className="md:mt-[120px] mt-[90px] animate-slideUpEnter">
      <Head>
        <title>EvenScript | Flutter</title>
        <meta property="og:title" content="Flutter" key="EvenScript" />
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
          <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">Flutter</div>
          <div className="flex flex-wrap w-[100%] justify-between items-center mt-10">
            <div className="boxs bg-violet-100/70 rounded-lg p-3 w-[100%]">
              <div className="text-xl md:text-xl lg:text-2xl xl:text-3xl">Flutter App Development Company</div>
              <div className="text-lg mt-5">Build beautiful, high-performance, and exceptional mobile apps in Flutter with one of the world’s most experienced teams.</div>
            </div>
            <div className="w-[100%] xl:w-[48%] flex flex-wrap justify-between mt-10 gap-y-5">
              <div className="boxs bg-violet-100/70 rounded-lg p-3 w-[100%]">
                <div className="text-lg mt-5">We provide Flutter app development services to help you create beautiful and highly functional mobile, web, and desktop applications with native performance and expressive and flexible UI in less time. Our product engineers consult with you, and Flutter developers code your application on the open-source development framework, ensuring a fast-loading speed.</div>
              </div>
            </div>
            <div className="w-[100%] xl:w-[48%] mt-10">
              <Image
                className="w-[100%] rounded-xl"
                src={FlutterImg}
                alt="Flutter"
                width={1000}
                height={0} />
            </div>
          </div>

          <div className="boxs bg-violet-100/70 rounded-lg p-3 w-[100%] mt-10">
            <div className="text-xl md:text-xl lg:text-2xl xl:text-3xl">OUR EXPERIENCE WITH FLUTTER</div>
            <div className="text-xl flex flex-wrap mt-5 justify-between md:justify-evenly">
              <div>
                <div> • Cross-Platform Unified Applications</div>
                <div> • Android & iOS Applications</div>
              </div>
              <div>
                <div> • Improvisation & Security</div>
              </div>
            </div>
          </div>

          <div className="boxs bg-violet-100/70 rounded-lg p-3 w-[96%] mt-10">
            <div className="text-xl mt-5">Flutter is an open-source UI software development kit created by Google. It is used to develop applications for Android, iOS, Windows, Mac, Linux, Google Fuchsia and Web. It is a robust platform, complete with widgets and tools, to build and deploy cross-platform apps using a single codebase, that works for both iOS and Android, and compile natively.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default flutter
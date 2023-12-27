import Head from 'next/head';
import Image from 'next/image'
import React from 'react'

import LaravelImg from '../../Assets/Laravel/Laravel.webp'

function laravel() {
  return (
    <div className="md:mt-[120px] mt-[90px] animate-slideUpEnter">
      <Head>
        <title>EvenScript | Laravel</title>
        <meta property="og:title" content="Laravel" key="EvenScript" />
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
          <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">Laravel</div>
          <div className="flex flex-wrap w-[100%] justify-between items-center mt-10">
            <div className="boxs bg-violet-100/70 rounded-lg p-3 w-[100%] xl:w-[100%]">
              <div className="text-xl md:text-xl lg:text-2xl xl:text-3xl">Laravel Web Application Development</div>
              <div className="text-lg mt-5">Are you looking for the best laravel development company to help you with your website & mobile application development requirements? You’re at the right place.</div>
              <div className="text-lg mt-5">Evenscript technology is a top laravel development company acknowledged by the laravel community. We provide the best laravel development services which include seamless, scalable, robust, high-performance, and secure web & mobile application development.</div>
            </div>
            <div className="w-[100%] xl:w-[48%] flex flex-wrap justify-between mt-10 gap-y-5">
              <div className="boxs bg-violet-100/70 rounded-lg p-3 w-[100%]">
                <div className="text-xl md:text-xl lg:text-2xl xl:text-3xl">LARAVEL’S GREATEST STRENGTHS ARE</div>
                <div className="text-lg flex flex-wrap justify-evenly mt-5">
                  <div>
                    <div> • Developer- friendly environment</div>
                    <div> • Support for MVC</div>
                    <div> • Documentation</div>
                  </div>
                  <div>
                    <div> • Blade Templating</div>
                    <div> • Flexibility</div>
                    <div> • Security</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-center"></div>
            <div className="w-[100%] xl:w-[48%] mt-10">
              <Image
                className="w-[100%] rounded-xl"
                src={LaravelImg}
                alt="Laravel"
                width={1000}
                height={0} />
            </div>
          </div>

          <div className="boxs bg-violet-100/70 rounded-lg p-3 w-[100%] mt-10">
            <div className="text-xl mt-5">Laravel is a great solution for smaller companies or those with a limited project budget. Given the multitude of pre-packed functions and developer-friendly characteristics, Laravel can be used to quickly set up a small project and scale up as needed.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default laravel
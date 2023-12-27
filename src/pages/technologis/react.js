import Head from 'next/head';
import Image from 'next/image';
import React from 'react'

import ReactImg from '../../Assets/React/React.webp'

function react() {
  return (
    <div className="md:mt-[120px] mt-[90px] animate-slideUpEnter">
      <Head>
        <title>EvenScript | React</title>
        <meta property="og:title" content="React" key="EvenScript" />
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
          <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">React JS </div>

          <div className="boxs bg-violet-100/70 rounded-lg p-3 w-[100%] mt-10">
            <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-center">Industry Verticals We Serve</div>
            <div className="text-lg mt-5">We have served with all sizes and kinds of businesses from the pathfinders who are incubating the trends to the visionaries who are on their route to transform the IT world. If you have an idea that needs a scalable and affordable solution, our ReactJS development company in India have the solution.</div>
          </div>

          <div className="flex flex-wrap w-[100%] justify-between items-center">
            <div className="w-[100%] xl:w-[48%] flex flex-wrap justify-between mt-5 gap-y-5">
              <div className="boxs bg-violet-100/70 rounded-lg p-3 w-[100%] xl:w-[100%]">
                <div className="text-xl md:text-xl lg:text-2xl xl:text-3xl">Our ReactJS Development</div>
                <div className="text-lg mt-5">Being an open source frontend JavaScript library, ReactJS development has been a popular choice for different sizes and segments of business. Our ReactJS experts leverage their creativity and expertise to offer reusable, attractive and high-quality UI components, converting client needs into actual solutions for B2B as well as B2C category of business.</div>
              </div>
            </div>
            <div className="w-[100%] xl:w-[48%] mt-10">
              <Image
                className="w-[100%] rounded-xl"
                src={ReactImg}
                alt="React"
                width={1000}
                height={0} />
            </div>
          </div>

          <div className="boxs bg-violet-100/70 rounded-lg p-3 w-[100%] xl:w-[100%]">
            <div className="text-xl md:text-xl lg:text-2xl xl:text-3xl">Our ReactJS services:</div>
            <div className="text-lg mt-5 ">
              <div className="flex flex-wrap justify-between">
                <div className="justify-between">
                  <div> • ReactJS web development</div>
                  <div> • ReactJS mobile development</div>
                  <div> • ReactJS eCommerce development</div>
                </div>
                <div className="justify-between">
                  <div> • ReactJS UI/UX development</div>
                  <div> • ReactJS custom development</div>
                  <div> • ReactJS frontend development</div>
                </div>
              </div>
              <div className="">
                <div> • ReactJS support, maintenance & integration</div>
                <div> • ReactJS native app, social app and interactive app development</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default react
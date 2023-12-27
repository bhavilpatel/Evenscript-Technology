import Head from 'next/head';
import Image from 'next/image';
import React from 'react'

import NestImg from '../../Assets/Nest/Nest.webp'

function nest() {
  return (
    <div className="md:mt-[120px] mt-[90px] animate-slideUpEnter">
      <Head>
        <title>EvenScript | Nest</title>
        <meta property="og:title" content="Nest" key="EvenScript" />
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
          <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">Nest js</div>
          <div className="flex flex-wrap w-[100%] justify-between items-center">
            <div className="w-[100%] flex flex-wrap justify-between mt-10 gap-y-5">
              <div className="boxs bg-violet-100/70 rounded-lg p-3 w-[100%] md:w-[48%]">
                <div className="text-xl md:text-xl lg:text-2xl xl:text-3xl">Nest.js Development Services</div>
                <div className="text-xl mt-5">NestJS also provides a range of other advanced features for building microservices. This includes interceptors for modifying request and response objects, providers for injecting dependencies into controllers and services, and decorators for defining custom routing and controller logic.</div>
              </div>
              <div className="boxs bg-violet-100/70 rounded-lg p-3 w-[100%] md:w-[48%]">
                <div className="text-xl md:text-xl lg:text-2xl xl:text-3xl">Nest.js Development Services</div>
                <div className="text-xl mt-5">
                  <div> • Generating a Module. Let's generate a module for the bookstore.</div>
                  <div> • Creating Routes and Controllers.</div>
                  <div> • Setting up a Service.</div>
                  <div> • Injecting the Service into the Controller. </div>
                  <div> • Defining The DTO.</div>
                </div>
              </div>
            </div>
            <div className="w-[100%] mt-10">
              <Image
                className="w-[100%] rounded-xl"
                src={NestImg}
                alt="Nest"
                width={1000}
                height={0} />
            </div>
          </div>

          <div className="boxs bg-violet-100/70 rounded-lg p-3 w-[100%] mt-10">
            <div className="text-xl mt-5">To inject it in into a service we will use the @Inject() decorator, which can take the string defined in the previous example UserRepository . After injecting the model into the service, you will be able to use it to access and manipulate the data as you want. For example, you can execute this. UserRepository.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default nest
import Head from 'next/head';
import Image from 'next/image'
import React from 'react'

import Angular from '../../Assets/Angular/Angular.webp'

function angular() {
  return (
    <div className="md:mt-[120px] mt-[90px] animate-slideUpEnter">
      <Head>
        <title>EvenScript | Angular</title>
        <meta property="og:title" content="Angular" key="EvenScript" />
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
          <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">Angular</div>
          <div className="flex flex-wrap w-[100%] justify-between items-center">
            <div className="boxs bg-violet-100/70 rounded-lg p-3 w-[100%] mt-10">
              <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">Angular Development Services</div>
              <div className="text-lg mt-5">Angular JS framework allows extending HTML for developing any dynamic web content using two-way data binding and helps improve the testability and performance with minimal coding. Data Binding lets you choose “view-only” option instead of entire code-view. With its Declarative UI ability, it allows minimising your coding efforts to achieve the optimized results</div>
            </div>
            <div className="w-[100%] xl:w-[48%] flex flex-wrap justify-between mt-10 gap-y-5">
              <div className="boxs bg-violet-100/70 rounded-lg p-3 w-[100%]">
                <div className="text-lg mt-5">AngularJS is used by well-reputed websites such as several internet payments companies, video streaming platforms, big online marketplaces, and many more. AngularJS development has garnered great recognition amongst other JS frameworks. The reason being its simplicity and unbeaten flexibility that has helped programmers deliver large-scale results. AngularJS offers several opportunities such as DOM manipulation, two-way data binding, quicker application prototyping, better server performance, etc.</div>
              </div>
            </div>
            <div className="w-[100%] xl:w-[48%] mt-10">
              <Image
                className="w-[100%] rounded-xl"
                src={Angular}
                alt="Angulr"
                width={1000}
                height={0} />
            </div>
          </div>

          <div className="boxs bg-violet-100/70 rounded-lg p-3 w-[100%] mt-10 ">
            <div className="text-xl md:text-xl lg:text-2xl xl:text-3xl">What We Provide</div>
            <div className="text-xl mt-5 flex flex-wrap justify-evenly">
              <div>
                <div> • Custom angular development</div>
                <div> • Third-party software integration</div>
              </div>
              <div>
                <div> • Maintenance and support services</div>
              </div>
            </div>
          </div>

          <div className="boxs bg-violet-100/70 rounded-lg p-3 w-[100%] mt-10">
            <div className="text-xl md:text-xl lg:text-2xl xl:text-3xl font-semibold text-center">Industry Verticals We Serve</div>
            <div className="text-lg mt-5">We have served with all sizes and kinds of businesses from the pathfinders who are incubating the trends to the visionaries who are on their route to transform the IT world. If you have an idea that needs a scalable and affordable solution, our ReactJS development company in India have the solution.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default angular
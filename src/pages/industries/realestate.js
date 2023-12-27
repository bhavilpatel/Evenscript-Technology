import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

import RealImg from '../../Assets/RealEstate/RealEstate.webp'

function realestate() {
  return (
    <div className="2xl:mt-[90px] mt-[60px] animate-slideUpEnter">
      <Head>
        <title>EvenScript | Real Estate</title>
        <meta property="og:title" content="Real Estate" key="EvenScript" />
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
            <div className="text-center text-xl md:text-2xl lg:text-3xl  font-bold font-sans mt-10">Real Estate</div>

            <div className="mt-10">
              <div className="flex flex-wrap gap-5 items-center">
                <div className="w-[100%] rounded-3xl"><Image className="w-[100%] rounded-3xl" src={RealImg} alt="RealEstate" width={1000} height={300} /></div>
                <div className="flex flex-wrap mt-5 gap-5 justify-between w-[100%]">
                  <div className="boxs bg-violet-200 rounded-2xl p-5 text-lg w-[100%] lg:w-[48%]">
                    <div className=" text-3xl font-semibold">Commercial real estate solutions</div>
                    <div className="mt-3">Every day, Evenscript technology experts deliver commercial property services that drive exceptional results and enduring value for our clients. Your success is our success – we’re dedicated to creating customized solutions that work for your unique needs and exceed your expectations.</div>
                  </div>
                  <div className="boxs bg-violet-200 rounded-2xl p-5 text-lg w-[100%] lg:w-[48%]">
                    <div className="text-3xl font-semibold">Our offerings for the Real Estate industry include:</div>
                    <div className="mt-3"> • Property Data Management</div>
                    <div> • Tenant Data Management</div>
                    <div> • Management Fees Calculation</div>
                    <div> • Recovery Schedule Processing</div>
                    <div> • Reprojection of Rent</div>
                    <div> • Human Resources Offerings</div>
                    <div> • Finance & Accounting Offerings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div>
  )
}

export default realestate
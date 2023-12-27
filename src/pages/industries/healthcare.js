import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

import HealthImg from '../../Assets/HealthCare/HealthCare.webp'

function healthcare() {
  return (
    <div className="2xl:mt-[90px] mt-[60px] animate-slideUpEnter">
      <Head>
        <title>EvenScript | Health Care</title>
        <meta property="og:title" content="Health Care" key="EvenScript" />
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
            <div className="text-center text-xl md:text-2xl lg:text-5xl  font-bold font-sans mt-10">Healthcare</div>

            <div className="mt-10">
              <div className="flex flex-wrap gap-5 items-center">
                <div className="w-[100%] rounded-3xl"><Image className="rounded-3xl" src={HealthImg} alt="Health Care" width={1000} height={300} /></div>
                <div className="flex flex-wrap mt-5 gap-5 justify-between w-[100%]">
                  <div className="boxs bg-violet-200 rounded-2xl p-5 text-lg w-[100%] lg:w-[48%]">
                    <div className=" text-3xl font-semibold">Healthcare IT Services</div>
                    <div className="mt-3">The healthcare sector includes all businesses that provide medical insurance, medical services, manufacture medical equipment, provide drugs, or promote the provision of healthcare to patients.</div>
                  </div>
                  <div className="boxs bg-violet-200 rounded-2xl p-5 text-lg w-[100%] lg:w-[48%]">
                    <div className="text-3xl font-semibold">Experts in Healthcare</div>
                    <div className="mt-3">Healthcare has grown as one of India’s biggest sectors, whether in terms of employment or income. Healthcare includes medical devices, hospitals, clinical trials, outsourcing, health insurance, telemedicine, and medical equipment. </div>
                    <div className="mt-3">The health care industry incorporates establishments ranging from small-town private practices of a physician to busy hospitals that provide thousands of different jobs. The healthcare industry is an industry that needs consistent innovation under increased regulations.</div>
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

export default healthcare
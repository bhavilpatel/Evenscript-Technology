import React from 'react'
import index from '.';
import Image from 'next/image';
import { LocationIcon2, MailIcon2, PhoneIcon2 } from '@/component/icons';
import Head from 'next/head';

function contactus() {

  const imageLoader = (src) => {
    return src;
  }

  const contact = [
    {
      id: 1,
      logo: <MailIcon2 />,
      details: "Mail for information",
      containt: "sales@evenscript.com",
    },
    {
      id: 2,
      logo: <LocationIcon2 />,
      details: "Company Location",
      containt: "D-708, PNTC building, B/H Titanium City Centre, Prahladnagar road. Ahmedabad 380015",
    },
    {
      id: 3,
      logo: <PhoneIcon2 />,
      details: "Company Contact Number",
      containt: "+91 70169 01114",
    },
  ]
  return (
    <div className="bg-white">
      <Head>
        <title>EvenScript | Contact US</title>
        <meta property="og:title" content="Contact US" key="EvenScript" />
        <meta
          name="description"
          content=""
        />
        <meta
          property="og:image"
          content=""
        />
      </Head>
      <div className="mt-[90px] animate-slideUpEnter">
        <div className="flex flex-wrap flex-col justify-center items-center">
          <div className=" w-[98%] md:w-[85%] lg:w-[75%]">

            <div className=" justify-around items-center rounded-2xl flex flex-wrap ">
              {contact.map((us, index) => (
                <div key={index} className=" boxs bg-purple-100/50 mt-10 rounded-2xl h-[230px] xl:w-[25%] md:w-[40%] w-[90%] p-5 flex flex-col justify-center items-center">
                  <div className="flex flex-wrap justify-center h-10 w-10   ">{us.logo}</div>
                  <div className="items-center text-center mt-2">
                    <div>{us.details}</div>
                    <div>{us.containt}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 justify-center items-center flex flex-wrap">
              <div className="bg-purple-100/50 w-[70%] lg:p-12 p-5 boxs rounded-3xl">
                <div className="flex justify-between flex-wrap">
                  <input type="text" placeholder="First Name" className="border-[1px] border-gray-500 text-gray-500 px-5 py-2 rounded-xl mt-5 w-full md:w-[45%] " />
                  <input type="text" placeholder="Last Name" className="border-[1px] border-gray-500 text-gray-500 px-5 py-2 rounded-xl mt-5 w-full md:w-[45%] " />
                </div>
                <div className="flex justify-between flex-wrap">
                  <input type="number" placeholder="Phone" className="border-[1px] border-gray-500 text-gray-500 px-5 py-2 rounded-xl mt-5 w-full md:w-[45%] " />
                  <input type="email" placeholder="E-mail" className="border-[1px] border-gray-500 text-gray-500 px-5 py-2 rounded-xl mt-5 w-full md:w-[45%] " />
                </div>

                <input type="text" placeholder="Subject" className="border-[1px] border-gray-500 text-gray-500 px-5 py-2 rounded-xl  w-full mt-5" />

                <textarea rows="3" placeholder="Comment" className="border-[1px] border-gray-500 text-gray-500 px-5 py-2 rounded-xl mt-5 w-full" />

                <div className="flex flex-wrap justify-center"><button type="submit" className="border-[1px] px-5 py-2 mt-5 bg-violet-500 hover:bg-violet-600 active:bg-violet-900 text-white rounded-xl">Send Massage</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default contactus;


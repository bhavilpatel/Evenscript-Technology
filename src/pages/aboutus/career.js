import { ArrowIcon } from '@/component/icons'
import Head from 'next/head'
import React from 'react'

import Career from '../../Assets/Career/Career.webp'

function career() {
    return (
        <div className="xl:mt-[120px] mt-[60px] animate-slideUpEnter">
            <Head>
                <title>EvenScript | Career</title>
                <meta property="og:title" content="Career" key="EvenScript" />
                <meta
                    name="description"
                    content=""
                />
                <meta
                    property="og:image"
                    content=""
                />
            </Head>

            <Head>
        <title>EvenScript | Career</title>
        <meta name="description" content="Evenscript technology is a strong team of professionals, each with expertise in their skills to deliver fast and reliable solutions. In the modern world of internet, we build strong business relationships with clients around the world, helping them leverage technology to take their business to the next level.." />
        <link rel="canonical" href="/aboutus/career" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="EvenScript | Career" />
        <meta property="og:description" content="Evenscript technology is a strong team of professionals, each with expertise in their skills to deliver fast and reliable solutions. In the modern world of internet, we build strong business relationships with clients around the world, helping them leverage technology to take their business to the next level.." />
        <meta property="og:url" content="https://evenscript.com/aboutus/career" />
        <meta property="og:site_name" content="Even Script" />
        <meta property="article:publisher" content="https://www.facebook.com/Evenscript-104525715757883/" />
        <meta property="article:modified_time" content="2023-01-28T06:58:56+00:00" />
        <meta property="og:image" content={Career} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@hr_re95928686" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="5 minutes" />
      </Head>
            <div className="flex flex-wrap flex-col justify-center items-center">
                <div className=" w-[98%] md:w-[85%] lg:w-[75%]">
                    <div className="text-5xl font-bold text-center">Start Your Career With Us</div>

                    <div className="mt-10 justify-center items-center flex flex-wrap">
                        <div className=" bg-purple-100/70  w-[100%] md:w-[70%] lg:p-12 p-5  boxs rounded-3xl">
                            <div className="flex justify-between flex-wrap">
                                <input type="text" placeholder="First Name" className="border-[1px] border-gray-500 text-gray-500 px-5 py-2 rounded-xl mt-5 w-full md:w-[45%] " />
                                <input type="text" placeholder="Last Name" className="border-[1px] border-gray-500 text-gray-500 px-5 py-2 rounded-xl mt-5 w-full md:w-[45%] " />
                            </div>
                            <div className="flex justify-between flex-wrap">
                                <input type="number" placeholder="Phone" className="border-[1px] border-gray-500 text-gray-500 px-5 py-2 rounded-xl mt-5 w-full md:w-[45%] " />
                                <input type="email" placeholder="E-mail" className="border-[1px] border-gray-500 text-gray-500 px-5 py-2 rounded-xl mt-5 w-full md:w-[45%] " />
                            </div>

                            <select placeholder="In Wich Fild ?" className="border-[1px] border-gray-500 text-gray-500 px-5 py-2 rounded-xl  w-full mt-5" >
                                <option>In which field you start your career ?</option>
                                <option>React Js</option>
                                <option>Node Js</option>
                                <option>Angular js</option>
                                <option>Laravel</option>
                                <option>Flutter</option>
                                <option>React Native</option>
                                <option>Nest js</option>
                                <option>Next js</option>
                            </select>

                            <div className="flex flex-wrap items-center justify-around">
                                <label className="text-2xl text-gray-500 flex items-center mt-5">Upload C.V. <span className="rotate-90 md:rotate-0"><ArrowIcon /></span></label>
                                <input type="file" className="border-[1px] border-gray-500 text-gray-500 px-5 py-2 rounded-xl mt-5 w-full md:w-[45%] " />
                            </div>

                            <textarea rows="3" placeholder="Comment" className="border-[1px] border-gray-500 text-gray-500 px-5 py-2 rounded-xl mt-5 w-full" />

                            <div className="flex flex-wrap justify-center mt-5"><button type="submit" className="border-[1px] px-5 py-2 bg-violet-500 hover:bg-violet-600 active:bg-violet-900 text-white rounded-xl">Send</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default career
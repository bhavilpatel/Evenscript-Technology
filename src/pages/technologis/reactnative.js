import Head from 'next/head';
import Image from 'next/image';
import React from 'react'

import ReactNativeImg from '../../Assets/ReactNative/ReactNative.webp'

function reactnative() {
  return (
    <div className="md:mt-[120px] mt-[90px] animate-slideUpEnter">
      <Head>
        <title>EvenScript | React Native</title>
        <meta property="og:title" content="React Native" key="EvenScript" />
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
          <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">React Native </div>
          <div className="flex flex-wrap w-[100%] justify-between items-center mt-10">
            <div className="boxs bg-violet-100/70 rounded-lg p-3 w-[100%] mt-10">
              <div className="text-xl md:text-xl lg:text-2xl xl:text-3xl font-semibold text-center">Develop scalable mobile app with best react native app development company</div>
              <div className="text-lg mt-5">IOS app development or android app development is not a tedious task for our React native developers who are smart enough to understand your goals and able to hand over the best product to you.</div>
              <div className="text-lg mt-5">For handling a mobile app, constant maintenance is needed because of the continuing updates. You may hire our team to maintain your mobile app. We are ready to perform various maintenance tasks from adding new features from bug resolutions to provide your users a great experience. Our team utilizes the React Native platform to develop iOS and Android Mobile apps at a speedy rate. It means you can dream to have a completely developed app in a shorter time.</div>
            </div>
            <div className="w-[100%] xl:w-[48%] flex flex-wrap justify-between mt-10 gap-y-5">
              <div className="boxs bg-violet-100/70 rounded-lg p-3 w-[100%]">
                <div className="text-xl md:text-xl lg:text-2xl xl:text-3xl">Build dynamic mobile apps using React Native development</div>
                <div className="text-xl mt-5">React Native is one of the most popular programming language and organizations around the world are quickly implementing to create appealing, fully featured, native user experience and cross-platform apps. React Native Development is the way to go if you want to build game-changing apps for both Android and iOS</div>
              </div>
            </div>
            <div className="w-[100%] xl:w-[48%] mt-10">
              <Image
                className="w-[100%] rounded-xl"
                src={ReactNativeImg}
                alt="React Native"
                width={1000}
                height={0} />
            </div>
          </div>
          <div className="boxs bg-violet-100/70 rounded-lg p-3 w-[100%] mt-10">
            <div className="text-xl md:text-xl lg:text-2xl xl:text-3xl ">Our Expertise</div>
            <div className="text-xl flex flex-wrap justify-between md:justify-around">
              <div>
                <div> • React Native App Development Expert</div>
                <div> • High-class Support and Maintenance</div>
              </div>
              <div> • Reduced Development Time</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default reactnative
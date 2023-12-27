import React from 'react'
import SlickSlider from './SlickSlider'
import Head from 'next/head'

import Portfolio1 from '../../Assets/Portfolio/Portfolio2/Portfolio2(1).webp';
import Portfolio2 from '../../Assets/Portfolio/Portfolio2/Portfolio2(2).webp';
import Portfolio3 from '../../Assets/Portfolio/Portfolio2/Portfolio2(3).webp';

function portfolio2() {

  const data = [
    {
      id: 1,
      img: Portfolio1
    },
    {
      id: 2,
      img: Portfolio2
    },
    {
      id: 3,
      img: Portfolio3
    },
  ]

  return (
    <div className="xl:mt-[120px] mt-[90px] animate-slideUpEnter">
      <Head>
        <title>EvenScript | Portfolio2</title>
        <meta property="og:title" content="Portfolio2" key="EvenScript" />
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
        <SlickSlider data={data} />
      </div>
    </div>
  )
}

export default portfolio2
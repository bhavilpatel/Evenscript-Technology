import React from 'react'
import Link from 'next/link';
import Image from 'next/image'

import logo from "../../Assets/logo.svg"

function Navbar() {
  return (
    <div>
      <header className="header  flex flex-wrap justify-between backdrop-blur-lg">
        <nav className="flex flex-wrap justify-between w-[98%] md:w-[85%] lg:w-[79%]">

          <Link href="/">
            <li className="p-3 relative text-3xl font-bold flex items-center gap-3">
              <Image className="h-10 w-10" src={logo} alt={logo} />
              <span className="hidden lg:block text-3xl ">
                <span className="text-4xl">E</span>VEN
                <span className="text-4xl">S</span>CRIPT
              </span>
            </li>
          </Link>


          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>

          <ul className="menu">
            <li className="">
              <Link href="#" className=" bg-gradient-to-r from-pink-700 to-violet-700 inline-block bg-clip-text hover:text-transparent p-3 text-lg relative py-2 peer font-normal text-[16px]">About Us</Link>

              <ul className="hidden absolute peer-hover:flex hover:flex flex-col rounded-xl font-normal text-sm drop-shadow-lg bg-[#f3f9fe] m-auto 2xl:left-auto 2xl:top-auto z-20 top-1 left-32 md:top-auto md:left-auto">
                <Link href="/aboutus/aboutus"><li className="px-5 py-3 flex items-center gap-5 cursor-pointer hover:bg-gradient-to-bl from-pink-400 to-violet-400 hover:text-white hover:text rounded-lg text-base">About Us</li></Link>
                <Link href="/aboutus/portfolio"><li className="px-5 py-3 flex items-center gap-5 cursor-pointer hover:bg-gradient-to-bl from-pink-400 to-violet-400 hover:text-white hover:text rounded-lg text-base">Portfolio</li></Link>
                <Link href="/aboutus/career"><li className="px-5 py-3 flex items-center gap-5 cursor-pointer hover:bg-gradient-to-bl from-pink-400 to-violet-400 hover:text-white hover:text rounded-lg text-base">Career</li></Link>
              </ul>
            </li>

            <li className="">
              <Link href="#" className=" bg-gradient-to-r from-pink-700 to-violet-700 inline-block bg-clip-text hover:text-transparent p-3 text-lg relative py-2 peer font-normal text-[16px]">Services</Link>

              <ul className="hidden absolute peer-hover:flex hover:flex flex-col rounded-xl font-normal text-sm drop-shadow-lg bg-[#f3f9fe] m-auto 2xl:left-auto 2xl:top-auto z-20 top-1 left-32 md:top-auto md:left-auto">
                <Link href="/services/ui_uxdesigning"><li className="px-5 py-3 flex items-center gap-5 cursor-pointer hover:bg-gradient-to-bl from-pink-400 to-violet-400 hover:text-white hover:text rounded-lg text-base">UI-UX Designing</li></Link>
                <Link href="/services/websitedevelopment"><li className="px-5 py-3 flex items-center gap-5 cursor-pointer hover:bg-gradient-to-bl from-pink-400 to-violet-400 hover:text-white hover:text rounded-lg text-base">Website Development</li></Link>
                <Link href="/services/mobileappdevelopment"><li className="px-5 py-3 flex items-center gap-5 cursor-pointer hover:bg-gradient-to-bl from-pink-400 to-violet-400 hover:text-white hover:text rounded-lg text-base">Mobile App Development</li></Link>
              </ul>
            </li>

            <li className="">
              <Link href="#" className=" bg-gradient-to-r from-pink-700 to-violet-700 inline-block bg-clip-text hover:text-transparent p-3 text-lg relative xl:py-2 peer font-normal text-[16px]">Technologies</Link>

              <ul className="hidden absolute peer-hover:flex hover:flex flex-col rounded-xl font-normal text-sm drop-shadow-lg bg-[#f3f9fe] m-auto 2xl:left-auto 2xl:top-auto z-20 top-1 left-32 md:top-auto md:left-auto overflow-y-scroll h-60">
                <Link href="/technologis/react"><li className="px-5 py-3 flex items-center gap-5 cursor-pointer hover:bg-gradient-to-bl from-pink-400 to-violet-400 hover:text-white hover:text rounded-lg text-base">React Js</li></Link>
                <Link href="/technologis/node"><li className="px-5 py-3 flex items-center gap-5 cursor-pointer hover:bg-gradient-to-bl from-pink-400 to-violet-400 hover:text-white hover:text rounded-lg text-base">Node Js</li></Link>
                <Link href="/technologis/angular"><li className="px-5 py-3 flex items-center gap-5 cursor-pointer hover:bg-gradient-to-bl from-pink-400 to-violet-400 hover:text-white hover:text rounded-lg text-base">Angular Js</li></Link>
                <Link href="/technologis/laravel"><li className="px-5 py-3 flex items-center gap-5 cursor-pointer hover:bg-gradient-to-bl from-pink-400 to-violet-400 hover:text-white hover:text rounded-lg text-base">Laravel</li></Link>
                <Link href="/technologis/flutter"><li className="px-5 py-3 flex items-center gap-5 cursor-pointer hover:bg-gradient-to-bl from-pink-400 to-violet-400 hover:text-white hover:text rounded-lg text-base">Flutter</li></Link>
                <Link href="/technologis/reactnative"><li className="px-5 py-3 flex items-center gap-5 cursor-pointer hover:bg-gradient-to-bl from-pink-400 to-violet-400 hover:text-white hover:text rounded-lg text-base">React Native</li></Link>
                <Link href="/technologis/nest"><li className="px-5 py-3 flex items-center gap-5 cursor-pointer hover:bg-gradient-to-bl from-pink-400 to-violet-400 hover:text-white hover:text rounded-lg text-base">Nest js</li></Link>
                <Link href="/technologis/next"><li className="px-5 py-3 flex items-center gap-5 cursor-pointer hover:bg-gradient-to-bl from-pink-400 to-violet-400 hover:text-white hover:text rounded-lg text-base">Next js</li></Link>
              </ul>
            </li>

            <li className="">
              <Link href="#" className=" bg-gradient-to-r from-pink-700 to-violet-700 inline-block bg-clip-text hover:text-transparent p-3 text-lg relative xl:py-2 peer font-normal text-[16px]">Industries</Link>

              <ul className="hidden absolute peer-hover:flex hover:flex flex-col rounded-xl font-normal text-sm drop-shadow-lg bg-[#f3f9fe] m-auto 2xl:left-auto 2xl:top-auto z-20 top-1 left-32 md:top-auto md:left-auto overflow-y-scroll h-60">
                <Link href="/industries/education"><li className="px-5 py-3 flex items-center gap-5 cursor-pointer hover:bg-gradient-to-bl from-pink-400 to-violet-400 hover:text-white hover:text rounded-lg text-base">Education</li></Link>
                <Link href="/industries/ecommerce"><li className="px-5 py-3 flex items-center gap-5 cursor-pointer hover:bg-gradient-to-bl from-pink-400 to-violet-400 hover:text-white hover:text rounded-lg text-base">Ecommerce</li></Link>
                <Link href="/industries/healthcare"><li className="px-5 py-3 flex items-center gap-5 cursor-pointer hover:bg-gradient-to-bl from-pink-400 to-violet-400 hover:text-white hover:text rounded-lg text-base">Healthcare</li></Link>
                <Link href="/industries/travelagency"><li className="px-5 py-3 flex items-center gap-5 cursor-pointer hover:bg-gradient-to-bl from-pink-400 to-violet-400 hover:text-white hover:text rounded-lg text-base">Travel Agency</li></Link>
                <Link href="/industries/hospitality"><li className="px-5 py-3 flex items-center gap-5 cursor-pointer hover:bg-gradient-to-bl from-pink-400 to-violet-400 hover:text-white hover:text rounded-lg text-base">Hospitality</li></Link>
                <Link href="/industries/manufacturing"><li className="px-5 py-3 flex items-center gap-5 cursor-pointer hover:bg-gradient-to-bl from-pink-400 to-violet-400 hover:text-white hover:text rounded-lg text-base">Manufacturing</li></Link>
                <Link href="/industries/retail"><li className="px-5 py-3 flex items-center gap-5 cursor-pointer hover:bg-gradient-to-bl from-pink-400 to-violet-400 hover:text-white hover:text rounded-lg text-base">Retail</li></Link>
                <Link href="/industries/supplychainandlogistic"><li className="px-5 py-3 flex items-center gap-5 cursor-pointer hover:bg-gradient-to-bl from-pink-400 to-violet-400 hover:text-white hover:text rounded-lg text-base">Supply Chain And Logistic</li></Link>
                <Link href="/industries/mediaandentertainment"><li className="px-5 py-3 flex items-center gap-5 cursor-pointer hover:bg-gradient-to-bl from-pink-400 to-violet-400 hover:text-white hover:text rounded-lg text-base">Media And Entertainment</li></Link>
                <Link href="/industries/realestate"><li className="px-5 py-3 flex items-center gap-5 cursor-pointer hover:bg-gradient-to-bl from-pink-400 to-violet-400 hover:text-white hover:text rounded-lg text-base">Real Estate</li></Link>
              </ul>
            </li>

            <Link href="/contactus">
              <li className="bg-gradient-to-r from-pink-700 to-violet-700 inline-block bg-clip-text hover:text-transparent font-normal p-3 text-lg md:block">
                Contact Us
              </li>
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
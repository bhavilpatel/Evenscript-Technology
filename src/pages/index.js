import React from 'react'
import { ArrowIcon, PhoneIcon, LocationIcon } from '../component/icons'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

// import gif from '../Assets/Home/main.webm'
import UiUx from '../Assets/Home/UiUxDesigning.webp'
import Web from '../Assets/Home/WebDevelopment.webp'
import App from '../Assets/Home/MobileAppDevelopment.webp'
import About from '../Assets/Home/About.webp'
import Goal from '../Assets/Home/Goal.webp'
import WhyChooseUs from '../Assets/Home/WhyChooseUs.webp'
import WhyChooseUs2 from '../Assets/Home/WhyChooseUs2.webp'


function index() {

  const mainImageLoader = ({ src }) => {
    return `https://cdn.dribbble.com/users/205136/screenshots/2582152/ae-fun.gif`;
  }

  const mainImageLoader2 = ({ src }) => {
    return `https://i.pinimg.com/originals/89/36/b9/8936b9cdfdde99b4bef0417f7eacffce.gif`;
  }
  const card = [
    {
      id: 1,
      img: "https://evenscript.com/wp-content/uploads/2022/09/homeicon2.png",
      title: "Streamed Process",
      details: "In order to boost up the brand recognition we aim for the perfection in everything such as analysis, designs, development, reviewing, & understanding security concerns of the project.",
    },
    {
      id: 2,
      img: "https://evenscript.com/wp-content/uploads/2022/09/homeicon1.png",
      title: "Innovation Model",
      details: "The most effective and convenient way to attain gains in business is by devising innovative strategies.Our team of professionals focusing upon the innovations on various models.",
    },
    {
      id: 3,
      img: "https://evenscript.com/wp-content/uploads/2022/09/homeicon3.png",
      title: "Dedicated Support",
      details: "By developing & implementing the functional system & strategies for blooming the client’s business. With the team of dedicated professionals, we are geared up to bring solution.",
    },
  ]

  const wedo = [
    {
      id: 1,
      img: UiUx,
      name: "UI-UX Designing",
      href: "/services/ui_uxdesigning"
    },
    {
      id: 2,
      img: Web,
      name: "Website Development",
      href: "/services/websitedevelopment"
    },
    {
      id: 3,
      img: App,
      name: "Mobile App Development",
      href: "/services/mobileappdevelopment"
    }
  ]

  return (
    <div className="mt-[90px] justify-center animate-slideUpEnter">
      <Head>
        <title>Homepage - Even Script</title>
        <meta name="description" content="EvenScript is the best UI-UX Designing &amp; Website Development Company in Ahmedabad that builds brand of your business across the globe with unique designing solutions." />
        <link rel="canonical" href="https://evenscript.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Homepage | Even Script" />
        <meta property="og:description" content="EvenScript is the best UI-UX Designing &amp; Website Development Company in Ahmedabad that builds brand of your business across the globe with unique designing solutions." />
        <meta property="og:url" content="https://evenscript.com/" />
        <meta property="og:site_name" content="Even Script" />
        <meta property="article:publisher" content="https://www.facebook.com/Evenscript-104525715757883/" />
        <meta property="article:modified_time" content="2023-01-28T06:58:56+00:00" />
        <meta property="og:image" content="https://img1.wsimg.com/isteam/stock/DxRYKJo" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@hr_re95928686" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="7 minutes" />
      </Head>
      <div className="flex flex-wrap flex-col justify-center items-center">
        <div className=" w-[98%] md:w-[85%] lg:w-[75%]">
          <div className="relative w-[100%] h-[500px] flex flex-wrap flex-col justify-center items-center">
            <Image className=" w-[100%] h-[500px] hidden md:block rounded-xl" loader={mainImageLoader} src="https://cdn.dribbble.com/users/205136/screenshots/2582152/ae-fun.gif" alt="" width={1000} height={300} />
            <Image className=" w-[100%] h-[500px] md:hidden rounded-xl" loader={mainImageLoader2} src="https://i.pinimg.com/originals/89/36/b9/8936b9cdfdde99b4bef0417f7eacffce.gif" alt="" width={1000} height={300} />

            <div className="absolute flex flex-wrap bg-black/50 w-[100%] h-[500px] justify-center items-center text-center flex-col rounded-xl">
              <div className="lg:text-4xl md:text-3xl text-2xl font-semibold text-fuchsia-500">Growth With Us</div>
              <div className="lg:text-3xl md:text-2xl text-xl font-bold text-white mt-3"><span className="underline underline-offset-8 decoration-2 ">Provide</span> <span className="underline underline-offset-8 decoration-2 ">Business</span> <span className="underline underline-offset-8 decoration-2 ">Solutions</span></div>
              <div className="text-xl mt-7 flex flex-wrap w-[90%] sm:w-[70%] text-fuchsia-400">We are the front runners in implementing & integrating the latest technologies that perceive your brand through disciplined case studies, tools & resources.</div>
              <div className="flex flex-wrap justify-center items-center gap-5">
                <div className="flex flex-wrap justify-center items-center"><Link href="/contactus"><button className="mt-5 rounded-lg text-xl px-3 py-1 hover:ease-in-out duration-500 hover:animate-jump hover:bg-fuchsia-400/50 active:bg-violet-900 bg-white/30 text-white">Let’s Discuss</button></Link></div>
                <div className="flex flex-wrap justify-center items-center"><Link href="/aboutus/portfolio"><button className="mt-5 rounded-lg text-xl px-3 py-1 hover:ease-in-out duration-500 hover:animate-jump  hover:bg-fuchsia-400/50 active:bg-violet-900 bg-white/30 text-white">Explore Our Work</button></Link></div>
              </div>
            </div>
          </div>

          <div className=" flex flex-wrap mt-7 justify-around rounded-2xl ">
            {card.map((cards, index) => (
              <div key={index} className="mt-5 w-[95%] md:w-[48%] lg:w-[31%]  h-auto p-10 bg-[#f3f9fe] flex flex-wrap justify-between hover rounded-xl">
                <div className="underline underline-offset-8 decoration-1 text-2xl">{cards.title}</div>
                <div className="text-lg mt-5 ">{cards.details}</div>
              </div>
            ))}
          </div>

          <div className=" flex flex-wrap w-[100%] gap-3 mt-14">
            <div className="w-fit bg-violet-200/50 rounded-xl px-3 py-1 text-xl sm:text-xl lg:text-2xl font-medium text-center">About Us</div>
            <div className="lg:justify-between justify-center flex flex-wrap items-center">
              <div className="w-[100%] lg:w-[45%]"><Image className="w-[100%] rounded-xl" src={About} alt={About} width={1000} height={1000} /></div>
              <div className="lg:w-[45%] w-[90%] flex flex-wrap">
                <div className="text-xl font-bold mt-5">We Help Our Clients to Achieve Their Business Goal</div>
                <div className="flex flex-wrap justify-center">
                  <div className="text-lg mt-10">Evenscript technology is a strong team of professionals, each with expertise in their skills to deliver fast and reliable solutions. In the modern world of internet, we build strong business relationships with clients around the world, helping them leverage technology to take their business to the next level.</div>
                  <div className="text-lg mt-5">Our motto is to deliver finest it business solutions to our customers. We have team of creative thinkers, professional developers and experienced managers who always ready to bring something innovative for our clients.</div>
                  <div className="text-lg mt-5">Offer a perfect sky to brand for building their presence in this digital world with our visionary service.</div>
                </div>
              </div>
            </div>
          </div>

          <div className=" mt-14 w-[100%] flex flex-wrap justify-center">
            <div className="w-fit bg-violet-200/50 rounded-xl px-3 py-1 text-xl sm:text-xl lg:text-2xl font-medium text-center">What We Do</div>
            <div className="flex flex-wrap justify-between w-[90%]">
              <div className="text-2xl font-bold mt-5 md:w-[45%] w-[100%]">What Services we Provide for Our Customers Business</div>
              <div className="mt-5 text-xl md:w-[45%] w-[100%]">We are Web, App development & mobile app development company that can turn your ideas into the reality for your business.</div>
            </div>

            <div className=" flex flex-wrap justify-around w-[100%]">
              {wedo.map((cards, index) => (
                <div key={index} className="group mt-10 relative block shadow-[1px_1px_5px_-1px] overflow-hidden rounded-xl transition-all duration-500 w-[300px] ease-in-out hover:-translate-y-5 p-3">
                  <Image className="rounded-md" src={cards.img} alt={cards.name} width={1000} height={300} />
                  <div className="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-white dark:bg-slate-900 p-4 rounded shadow dark:shadow-gray-700">
                    <Link href={cards.href}><div className="hover:text-primary-600 text-lg transition duration-500 font-medium">{cards.name}</div></Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 w-[100%] justify-center flex flex-wrap">
            <div className=" bg-gradient-to-r from-[#ff00d4] to-[#00ddff] p-8 rounded-3xl w-[98%] justify-between flex flex-wrap items-center">
              <div className="text-2xl font-semibold text-white ">Request a Schedule For Free Quotes</div>
              <div><Link href="/contactus"><button className="bg-blue-800 hover:bg-white hover:-translate-x-3 hover:text-black ease-in-out duration-500 text-white px-5 py-3 rounded-xl font-semibold mt-5 sm:mt-0">REQUEST A SCHEDULE</button></Link></div>
            </div>
          </div>

          <div className="relative mt-14 w-[100%] justify-center">
            <div className="w-fit bg-violet-200/50 rounded-xl px-3 py-1 text-xl sm:text-xl lg:text-2xl font-medium text-center">Why Choose Us</div>
            <div className="relative group mt-5"><Image className="h-[500px] w-[100%] hidden md:block rounded-2xl" src={WhyChooseUs} alt="" width={1000} height={300} />
              <Image className=" h-[500px] w-[100%] md:hidden rounded-2xl" src={WhyChooseUs2} alt="" width={1000} height={300} />

              <div className="absolute rounded-2xl flex flex-col flex-wrap justify-center text-center items-center bg-black/70 w-[100%] h-[500px] -mt-[500px] text-white">
                <div className="md:text-3xl text-xl font-bold w-[75%]">We adore our employees as well as to our clients for the more exposure.</div>
                <div className="md:text-xl text-lg mt-5 w-[75%] md:w-[70%]">Belief of Evenscript says that , Each person who is engaged with us are been proven as an asset for the company. Choosing us will encourage to render you our expertise.</div>
                <div className="flex-wrap justify-center gap-5">
                  <div className="mt-10 bg-blue-900 rounded-lg px-10 py-4">
                    <div>24/7 Support Team</div>
                    <div className="flex gap-4 text-white items-center"><span><PhoneIcon className="h-6 w-8" /></span><button>+91 70169 01114</button></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-32 vs:mt-40 2vs:mt-28 w-[100%] justify-center">
            <div className="w-fit bg-violet-200/50 rounded-xl px-3 py-1 text-xl sm:text-xl lg:text-2xl font-medium text-center">Our Main Goal</div>
            <div className="flex flex-wrap gap-6 items-center justify-center mt-5">
              <div className="w-[100%] lg:w-[48%]"><Image className="w-[100%] rounded-full" src={Goal} alt={Goal} width={1000} height={1000} /></div>
              <div className="w-[95%] lg:w-[48%]">
                <div className="flex-wrap text-xl lg:text-2xl font-extrabold mt-10">Creating a Business with Authentic Integrity</div>
                <div className="mt-10">We partner with our clients to develop their marketing plans, and set up winning strategies to generate and convert leads. From designing, developing, and optimizing websites, to increasing sales through tactical digital marketing activities,</div>
              </div>
              <div className="flex flex-wrap lg:justify-between justify-center">
                <div className="w-[95%] lg:w-[45%]">
                  <div className="text-3xl mt-5  font-semibold">Strategic vision</div>
                  <div className="mt-2 text-xl">We design for clear & unique brand communication. We will ensure a perfect support after delivering our services and products.</div>
                </div>
                <div className="w-[95%] lg:w-[45%]">
                  <div className="text-3xl mt-5  font-semibold">Our Mission</div>
                  <div className="mt-2 text-xl">Our mission is to be partner with our clients to develop their marketing plans, and set up winning strategies to generate and convert leads.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div>
  )
}
export default index
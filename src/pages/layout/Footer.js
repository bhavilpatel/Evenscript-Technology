import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import logo from "../../Assets/logo.svg"
import { InstagramIcon, FacebookIcon, TwitterIcon, LinkedinIcon, ArrowIcon2, LocationIcon, PhoneIcon, MailIcon } from '@/component/icons'

function Footer() {
    return (
        <div className="bg-black/80 mt-7 flex flex-wrap flex-col justify-center items-center">

            <div className="items-center justify-between w-[90%] md:w-[85%] lg:w-[78%]">
                <div className=" flex flex-wrap justify-between">
                    <div className="w-[300px] mt-8">
                        <Link href="/">
                            <li className="p-3 relative text-3xl font-bold flex items-center gap-3">
                                <Image className="h-10 w-10" src={logo} alt={logo} />
                                <span className="text-3xl text-white ">
                                    <span className="text-4xl">E</span>VEN
                                    <span className="text-4xl">S</span>CRIPT
                                </span>
                            </li>
                        </Link>

                        <div className="text-white/80 text-lg font-extralight mt-7 leading-6">With custom software development services being our core area of expertise, we can help your business to reach its full potential with our application solutions.</div>

                        <div className="flex justify-between gap-5 mt-5">
                            <div className="hover:bg-gradient-to-tl from-[#feda75] via-[#962fbf] to-[#fa7e1e] hover:text-white w-[40px] rounded-md p-1 bg-white"><a href="https://instagram.com/evenscripttechnology?igshid=YmMyMTA2M2Y="><InstagramIcon /></a></div>
                            <div className="hover:bg-gradient-to-t to-[#17A9FD] from-[#0165E1] hover:text-white w-[40px] rounded-md p-1 bg-white"><a href="https://www.facebook.com/profile.php?id=100088717251908&notif_id=1680596965032763&notif_t=page_user_activity&ref=notif"><FacebookIcon /></a></div>
                            <div className="hover:bg-[#1D9BF0] hover:text-white w-[40px] rounded-md p-1 bg-white"><a href="https://twitter.com/hr_re95928686"><TwitterIcon /></a></div>
                            <div className="hover:bg-[#0A66C2] hover:text-white w-[40px] rounded-md p-1 bg-white"><a href="https://www.linkedin.com/company/evenscript-technology-pvt-ltd/"><LinkedinIcon /></a></div>
                        </div>
                    </div>

                    <div className="text-white/50 mt-10">
                        <div className=" text-3xl text-white">Quick Links</div>
                        <div>
                            <ul className="mt-7 flex flex-wrap gap-10 md:gap-0 flex-row md:flex-col text-white/70">
                                <div>
                                    <li className="bg-gradient-to-tl from-[#f02fc2] to-[#6094ea] bg-clip-text hover:text-transparent hover:font-bold mt-5 h-7 font-semibold text-lg">
                                        <Link className="flex text-xl" href="/aboutus/portfolio">
                                            <div className="myDIV">Portfolio</div>
                                            <div className="hide"><ArrowIcon2 /></div>
                                        </Link>
                                    </li>

                                    <li className="bg-gradient-to-tl from-[#f02fc2] to-[#6094ea] bg-clip-text hover:text-transparent hover:font-bold mt-5 h-7 font-semibold text-lg">
                                        <Link className="flex text-xl" href="/aboutus/aboutus">
                                            <div className="myDIV">About Us</div>
                                            <div className="hide"><ArrowIcon2 /></div>
                                        </Link>
                                    </li>
                                </div>

                                <div>
                                    <li className="bg-gradient-to-tl from-[#f02fc2] to-[#6094ea] bg-clip-text hover:text-transparent hover:font-bold mt-5 h-7 font-semibold text-lg">
                                        <Link className="flex text-xl" href="/aboutus/career">
                                            <div className="myDIV">Career</div>
                                            <div className="hide"><ArrowIcon2 /></div>
                                        </Link>
                                    </li>

                                    <li className="bg-gradient-to-tl from-[#f02fc2] to-[#6094ea] bg-clip-text hover:text-transparent hover:font-bold mt-5 h-7 font-semibold text-lg">
                                        <Link className="myDIV flex text-xl" href="/contactus">
                                            <div className="myDIV">Contact Us</div>
                                            <div className="hide"><ArrowIcon2 /></div>
                                        </Link>
                                    </li>

                                </div>
                            </ul>
                        </div>
                    </div>

                    <div className="text-white w-[300px] md:w-[98%] lg:w-[300px]">
                        <div className="text-3xl mt-10">Contact</div>
                        <div className="flex flex-wrap flex-col md:flex-row lg:flex-col gap-5 mt-10">
                            <div className="flex flex-row text-lg w-[98%] md:w-[50%] lg:w-[98%] gap-5"><LocationIcon />D-708, PNTC building, B/H Titanium City Centre,  Prahladnagar road.  Ahmedabad 380015</div>
                            <div>
                                <div className="flex flex-row items-center text-lg gap-5"><PhoneIcon />+91 70169 01114</div>
                                <div className="flex flex-row items-center text-xl gap-5 mt-5"><MailIcon />sales@evenscript.com</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <div><hr /></div>
                    <div className="flex flex-wrap justify-between py-10">
                        <div className="text-center text-white ">© 2023 Evenscript. All Rights Reserved.</div>
                        <div className="flex flex-wrap justify-between gap-10 text-white">
                            <div><Link href="/terms&conditions" className="hover:text-blue-500">Terms & Conditions</Link></div>
                            <div><Link href="/privacy&policy" className="hover:text-blue-500">Privacy & Policy</Link></div>
                        </div>
                    </div>
                </div>

            </div>
        </ div>
    )
}

export default Footer
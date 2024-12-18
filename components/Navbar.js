import React from 'react'
import Image from 'next/image'
import { Julius_Sans_One } from 'next/font/google'

const julius_sans_one = Julius_Sans_One({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

const Navbar = () => {
  return (
        <div className="flex flex-row lg:justify-between items-center gap-5 pb-8 lg:pb-10">
            <div className='flex flex-row items-center justify-center pl-8 lg:pl-10'>
              <div className='w-9 lg:w-[40px]'>
                <Image
                  src="/assets/atom-icon-svgrepo-com.svg"
                  width={40}
                  height={40}
                  alt="logo"
                />
              </div>
              <div>
                <h1 className={"text-lg lg:text-xl " + julius_sans_one.className}>&nbsp;Genisys</h1> 
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
                {/* <p>Courses</p>
                <p>About Us</p>
                <p>Teacher</p>
                <p>Pricing</p>
                <p>Careers</p>
                <p>Blog</p> */}
            </div>
            {/* <button className='btn bg-white text-[#7270dd] border-none hover:bg-[#7270dd] hover:text-white capitalize rounded-full'>
                Get Started
            </button> */}
            <div>
              {/* Placeholder per il flex align */}
            </div>
        </div>
  )
}

export default Navbar
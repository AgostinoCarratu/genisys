import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='shadow-box'>
        <div className="py-3 flex flex-row lg:justify-between items-center gap-5">
            <div className='pl-3'>
              <Image
                src="/assets/logo-con-testo.png"
                width={120}
                height={80}
                alt="logo"
              />
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
    </div>
  )
}

export default Navbar
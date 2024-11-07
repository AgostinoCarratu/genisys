import React from 'react'
import Image from 'next/image'
import { Julius_Sans_One } from 'next/font/google'


const Splashscreen = ({ isVisible }) => {

  return (
    // fixed inset-0 flex items-center justify-center bg-white transition-opacity duration-500 z-50
    <div className={'fixed inset-0 flex items-center justify-center bg-white transition-opacity duration-700 z-50'}>
        <div className='w-[40px] lg:w-[40px]'>
        <Image
            src="/assets/atom-icon-svgrepo-com.svg"
            width={40}
            height={40}
            alt="logo genisys"
        />
        </div>
        <div>
        <h1 className={"text-lg lg:text-xl "}>&nbsp;Genisys</h1> 
        </div>
    </div>
  )
}

export default Splashscreen

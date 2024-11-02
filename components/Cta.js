import React from 'react'

const Cta = () => {
  return (
    <div className='container mx-auto flex flex-col gap-5 items-center justify-center py-20'>
            <p className=' text-xl md:text-2xl lg:text-4xl font-medium text-center'>Get a free trial lesson today</p>
            <p className='text-base sm:text-lg lg:text-2xl font-medium text-center'>Start fulfilling your language dreams with our school</p>
            <div className="flex flex-col md:flex-row gap-3 lg:gap-10 items-center mt-5">
                <input type="text" className='text-sm sm:text-base p-3 px-6 rounded-full w-72 lg:w-96 outline-none bg-[#f8fafe]' placeholder='enter a email' />
                <button className='text-sm sm:text-base p-3 px-6 text-white hover:opacity-70 bg-primary_dark rounded-full border-none w-36 lg:w-44 capitalize'>Send</button>
            </div>
    </div>
  )
}

export default Cta
import React from 'react'
import Image from 'next/image'

const Cta = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row justify-center items-center max-w-[1200px] mx-auto'>
      <div className='w-[260px] lg:w-[400px]'>
        <Image
          src="/assets/sustainability.png"
          height={400}
          width={400}
          alt="Picture of the author"
        />
      </div>
      <div className='container max-w-[600px] mx-auto flex flex-col gap-5 items-left justify-center'>
              <p className=' text-slate-800 lg:text-left text-3xl sm:text-3xl md:text-5xl lg:text-5xl font-bold'>Sei pronto a fare un passo verso la <span className='text-primary_dark_seablue'>sostenibilità</span></p>
              <p className='text-base sm:text-lg lg:text-xl font-light lg:text-left'>Inserisci la tua mail e ricevi <span className='text-primary_dark_seablue font-bold'>gratuitamente</span> una consulenza dai nostri esperti!</p>
              <div className="flex flex-col md:flex-row gap-5 lg:gap-10 items-center mt-5">
                  <input type="text" className='text-sm sm:text-base lg:text-lg p-3 px-6 rounded-full w-72 lg:w-96 outline-none bg-[#f8fafe]' placeholder='Inserisci la tua email' />
                  <button className='text-sm lg:text-lg sm:text-base p-3 px-6 text-white hover:opacity-70 bg-primary_dark_seablue rounded-full border-none w-72 lg:w-44 capitalize'>Contattaci</button>
              </div>
      </div>
    </div>
  )
}

export default Cta
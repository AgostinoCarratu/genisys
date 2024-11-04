import React from 'react'
import Image from 'next/image'

const Cta = () => {
  return (
    <div className='flex lg:flex-row justify-center items-center gap-20 max-w-[1200px] mx-auto'>
      <div className='lg:w-[800px]'>
        <Image
          src="/assets/sustainability.png"
          height={600}
          width={600}
          className="w-full h-full object-cover"
          alt="Picture of the author"
        />
      </div>
      <div className='container mx-auto flex flex-col gap-5 items-left justify-center'>
              <p className=' text-slate-800 lg:text-left text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold'>Sei pronto a fare un passo verso la <span className='text-primary_dark_seablue'>sostenibilità</span></p>
              <p className='text-base sm:text-lg lg:text-2xl font-light lg:text-left'>Inserisci la tua mail e ricevi <span className='text-primary_dark_seablue font-bold'>gratuitamente</span> una consulenza dai nostri esperti!</p>
              <div className="flex flex-col md:flex-row gap-3 lg:gap-10 items-center mt-5">
                  <input type="text" className='text-sm sm:text-base lg:text-xl p-3 px-6 rounded-full w-72 lg:w-96 outline-none bg-[#f8fafe]' placeholder='Inserisci la tua email' />
                  <button className='text-sm lg:text-xl sm:text-base p-3 px-6 text-white hover:opacity-70 bg-primary_dark_seablue rounded-full border-none w-36 lg:w-44 capitalize'>Contattaci</button>
              </div>
      </div>
    </div>
  )
}

export default Cta
import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import Image from "next/image";
import { Julius_Sans_One } from 'next/font/google'

const julius_sans_one = Julius_Sans_One({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 px-10 items-start justify-center max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center lg:items-start gap-5">
        <div className='flex flex-row items-center'>
          <div>
            <Image
              src="/assets/atom-icon-svgrepo-com.svg"
              width={40}
              height={40}
              alt="logo"
            />
          </div>
          <div>
            <h1 className={"text-xl " + julius_sans_one.className}>&nbsp;Genisys</h1> 
          </div>
        </div>
          <p className="text-center lg:text-start">Via Risorgimento 74 <br/> Montoro (AV), 83025</p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-3">
          <p className="text-xl font-medium">Info Legali</p>
          <p className="text-base">Termini e condizioni</p>
          <p className="text-base">Attribuzioni</p>
        </div>
        <div className="flex flex-col items-center justify-center lg:items-start gap-3">
          <p className="text-xl font-medium">Contattaci</p>
          <p className="text-base">Supporto</p>
          <p className="text-base">Contatti</p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-3">
          <p className="text-xl font-medium">Prodotti</p>
          <p className="text-base">Corsi</p>
          <p className="text-base">Blog</p>
        </div>
        <div className="flex items-center gap-5">
                <BsFacebook className="text-3xl text-slate-600"/>
                <BsTwitter className="text-3xl text-slate-600"/>
                <BsInstagram className="text-3xl text-slate-600"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;

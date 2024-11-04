import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-primary_green_transparent mx-auto mb-10 lg:m-8 rounded-2xl py-10 px-16 ">
      <Navbar/>
      <div className="mx-auto py-16 max-w-[1200px]">
        <div className="px-0 lg:px-0 rounded-3xl">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
            <div className="max-w-[650px] flex flex-grow flex-col items-center lg:items-start gap-5 lg:gap-10">
              <p className="text-slate-800 text-center lg:text-left text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-bold">
                La chiave per il <br className="flex"/> tuo <span className="text-primary_green">successo </span> <br className="flex" /> sostenibile
              </p>
              <p className="text-center lg:text-left text-sm sm:text-base lg:text-xl text-gray-500">
                Consulenze e soluzioni per aziende pronte ad <br  className="hidden lg:flex"/> <span className="font-semibold">investire nel futuro</span>
              </p>
              <button className="text-xl py-4 px-6 text-white hover:opacity-70 bg-secondary_dark rounded-full border-none w-36 lg:w-52">Affidati a noi</button>
            </div>
            <div className="px-10 lg:px-0">
              <Image
                src="/assets/hero-genisys.png"
                width={600}
                height={600}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

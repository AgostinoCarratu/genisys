import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="mx-auto max-w-[1200px]">
      <Navbar/>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-3 mx-10">
            <div className="max-w-[600px] flex flex-grow flex-col items-center lg:items-start gap-5 lg:gap-10">
              <p className="text-center lg:text-left text-slate-800 lg:leading-[1.1] text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold">
                La chiave per il <br className="flex"/> tuo <span className="text-primary_green">successo </span> <br className="flex" /> sostenibile
              </p>

              <p className="text-base text-center sm:text-lg lg:text-2xl font-light lg:text-left text-slate-800">
                Consulenze e soluzioni per aziende pronte ad <br  className="hidden lg:flex"/> <span className="font-semibold">investire nel futuro</span>
              </p>
              <button className="text-sm lg:text-lg py-2 lg:py-3 px-6 text-white hover:opacity-70 bg-secondary_dark rounded-full border-none lg:w-52">Affidati a noi</button>
            </div>
            <div className="lg:w-[450px]">
              <Image
                src="/assets/hero-1.png"
                width={520}
                height={520}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
    </>
  );
};

export default Hero;

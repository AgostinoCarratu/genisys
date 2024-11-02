import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="mx-auto my-10 ">
      <div className="px-0 lg:px-0 rounded-3xl">
        <Navbar />
        <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
          <div className="max-w-[650px] flex flex-grow flex-col items-center lg:items-start gap-5 lg:gap-10">
            <p className="text-slate-800 text-center lg:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              La chiave per <br className="hidden"/> il tuo successo <br className="hidden" /> sostenibile
            </p>
            <p className="text-center lg:text-left text-sm sm:text-base lg:text-lg text-gray-500">
              Consulenze e soluzioni per aziende <br  className="sm:hidden"/> pronte ad investire nel futuro
            </p>
            <button className="text-sm p-3 text-white hover:opacity-70 bg-secondary_dark rounded-full border-none w-36 lg:w-44">Affidati a noi</button>
          </div>
          <div className="px-10 lg:px-0">
            <Image
              src="/assets/plant-small-cropped.png"
              width={700}
              height={700}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

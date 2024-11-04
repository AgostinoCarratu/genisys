import React from "react";
import Image from "next/image";

const Mission = () => {
  return (
    <div className="container max-w-[1200px] mx-auto">
      <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-slate-800 text-center">
        LA NOSTRA MISSION
      </p>

      <div className="flex flex-col lg:flex-row lg:justify-between gap-20 py-10 lg:py-20">
        <div className="min-w-[350px] min-h-[350px] rounded-lg">
          <Image
            src="/assets/mission-tree.svg"
            height={350}
            width={350}
            alt="Picture of the author"
          />
        </div>
        <div className="flex flex-col gap-5 justify-center items-start">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-800 text-center font-semibold">La sostenibilità al primo posto</p>
          <p className=" text-base font-light sm:text-lg md:text-2xl lg:text-lg">
          Siamo pionieri nella consulenza e nello sviluppo di progetti innovativi e miriamo a:
          {/* <ul>
            <li>1. Rendere il mondo un posto migliore</li>
            <li>1. Rendere il mondo un posto migliore</li>
            <li>1. Rendere il mondo un posto migliore</li>
          </ul> */}
          
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;

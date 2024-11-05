import React from "react";
import Image from "next/image";

const Mission = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-20 max-w-[1200px] mx-auto">


      {/* Div del testo */}
      <div className="flex flex-col lg:items-start gap-6">
        <p className="text-left text-3xl sm:text-xl md:text-2xl lg:text-6xl font-bold text-slate-800 lg:text-left">
          La nostra mission e la nostra <span className="text-primary_green">cultura</span>
        </p>
        <div className="flex flex-col gap-5 justify-center items-start">
        <div className="text-base sm:text-lg lg:text-2xl font-light lg:text-left">
        <p className="leading-small lg:leading-normal mb-2">Siamo pionieri nella consulenza e nello sviluppo di progetti innovativi e miriamo a:</p>
        <ol className="list-decimal pl-12 leading-relaxed">
          <li className="pl-2 lg:pl-6">Rendere il mondo un posto <span className="font-semibold text-primary_dark">migliore</span></li>
          <li className="pl-2 lg:pl-6">Preservare l'<span className="font-semibold text-primary_green">integrità</span> del nostro pianeta</li>
          <li className="pl-2 lg:pl-6">Favorire la <span className="font-semibold text-primary_dark_seablue">prosperità</span> di ambiente e aziende</li>
        </ol>
      </div>
        </div>
      </div>

            {/* Div dell'immagine */}
        <div className="w-[200px] lg:w-[420px] rounded-lg">
        <Image
          src="/assets/mission-sustainability.png"
          height={420}
          width={420}
          alt="Picture of the author"
        />
      </div>
      
    </div>
  );
};

export default Mission;

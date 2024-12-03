import React from "react";
import Image from "next/image";

const Values = () => {
  return (
    <div className="container max-w-[1100px] mx-auto">
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-slate-600 text-center">
        PERCHÉ SCEGLIERE NOI
      </p>
      <p className=" text-2xl lg:text-4xl font-semibold text-slate-800 text-center mt-3">
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 pt-8 lg:pt-20">
        <div className="flex flex-col gap-3 lg:gap-5 items-center">
          <div className="w-28 sm:w-30 lg:w-32">
            <Image
                src="/assets/values-complete.svg"
                width={140}
                height={140}
                alt="Picture of the author"
            />
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-800 font-semibold">Consulenza completa</p>
          <p className="text-base lg:text-lg text-gray-500 text-center">
            Supportiamo i nostri clienti dalla valutazione del pacchetto più adatto all&apos;azienda fino alla verifica dei risultati ottenuti
          </p>
        </div>
        <div className="flex flex-col gap-3 lg:gap-5 items-center">
          <div className="w-28 sm:w-30 lg:w-32">
            <Image
                src="/assets/values-experts.svg"
                width={140}
                height={140}
                alt="Picture of the author"
            />
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-800 font-semibold">Tecnici esperti</p>
          <p className="text-base lg:text-lg text-gray-500 text-center">
            Il nostro team  è composto da figure professionali con anni di esperienza nel settore dello sviluppo sostenibile
          </p>
        </div>
        <div className="flex flex-col gap-3 lg:gap-5 items-center">
          <div className="w-28 sm:w-30 lg:w-32">
            <Image
                src="/assets/values-social.svg"
                width={140}
                height={140}
                alt="Picture of the author"
            />
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-800 font-semibold">Pacchetto social
          </p>
          <p className="text-base lg:text-lgi text-gray-500 text-center">
            Valorizziamo l&apos;impegno delle aziende partner attraverso contenuti social e articoli su testate giornalistiche accreditate
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;

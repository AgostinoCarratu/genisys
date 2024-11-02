import React from "react";

const Values = () => {
  return (
    <div className="container mx-auto py-10">
      <p className="text-base lg:text-xl font-medium text-gray-500 text-center">
        PERCHÉ SCEGLIERE NOI
      </p>
      <p className=" text-2xl lg:text-4xl font-semibold text-gray-500 text-center mt-3">
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-20">
        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/v1.svg" alt="v1" />
          <p className="text-xl font-semibold">Consulenza completa</p>
          <p className="text-gray-500 text-center">
            Dalla valutazione del pacchetto <br /> più adatto all'azienda <br /> 
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/v2.svg" alt="v1" />
          <p className="text-xl font-semibold">Tecnici esperti</p>
          <p className="text-gray-500 text-center">
            Il nostro team  <br /> your speaking skills and just get <br /> a
            lot of positive emotions!
          </p>
        </div> <div className="flex flex-col gap-5 items-center">
          <img src="/assets/v3.svg" alt="v1" />
          <p className="text-xl font-semibold">Pacchetto social
          </p>
          <p className="text-gray-500 text-center">
            In our school you will practice <br /> your speaking skills and just get <br /> a
            lot of positive emotions!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;

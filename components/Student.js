import React from "react";
import Image from "next/image";

const Student = () => {
  return (
    <div className="container mx-auto max-w-[1100px]">
      <p className="text-base lg:text-4xl font-medium text-gray-500 text-center">
        LA NOSTRA MISSION
      </p>

      <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5 py-10 lg:py-20">
        <div className="w-12 h-8 rounded-lg">
          <Image
            src="/assets/unnamed.jpg"
            height={100}
            width={100}
            alt="Picture of the author"
          />
        </div>
        <div className="flex flex-col gap-5 items-start">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Martin Watson</p>
          <div className="flex items-center gap-2">
            <img src="/assets/uk.svg" alt="itersfgjds" />
            <p className="text-gray-500">English teacher</p>
          </div>
          <p className=" text-base sm:text-lg md:text-2xl lg:text-3xl">
            There is no way I could have made the same <br /> progress learning Spanish
            without using Lingua. <br /> The best part is now learning Spanish has <br />
            become one of my biggest hobbies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Student;

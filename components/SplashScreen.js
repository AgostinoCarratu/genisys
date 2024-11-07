"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Julius_Sans_One } from 'next/font/google'

const julius_sans_one = Julius_Sans_One({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1400); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#fff5f1] transition-opacity duration-2000 z-50">
      <div className="animate-fade-in flex flex-col items-center">
        {/* Replace with your logo */}
        <div className="w-[100px] h-[100px] rounded-full animate-bounce">
          <Image
            src="/assets/atom-icon-svgrepo-com.svg"
            width={100}
            height={100}
            alt="logo"
          />
        </div>
        <div className="mt-4">
            <h1 className={"text-4xl " + julius_sans_one.className}>Genisys</h1>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
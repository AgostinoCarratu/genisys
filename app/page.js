import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Values from "@/components/Values";
import Mission from "@/components/Mission";
import Navbar from "@/components/Navbar";

import Image from "next/image";
import MoreInfoModal from "@/components/MoreInfoModal";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <section className="bg-primary_green_transparent pt-6 pb-8 lg:pt-8 rounded-b-[50px] lg:pb-16 lg:rounded-b-[100px] drop-shadow-lg">
        <Hero/>    
      </section>

      <section className="px-10 py-12 lg:py-16">
        <Values/>
      </section>

      <section className="px-10 py-12 bg-primary_sunglow_transparent lg:py-16">
        <Mission/>
      </section>

      <section className="py-12 px-10 bg-primary_skyblue_transparent lg:py-16">
        <Cta/>
      </section>

      <section className="bg-primary_dark_seablue text-white py-12 lg:py-16">
        <Footer/>       
      </section>


      {/* <MoreInfoModal/> 
      Questa si deve aggiungere dopo. Devo vedere il fatto della Disclosure di headlessui*/}
    </>
  );
}

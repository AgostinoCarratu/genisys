import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Values from "@/components/Values";
import Teacher from "@/components/Teachers";
import Student from "@/components/Student";

import Image from "next/image";
import MoreInfoModal from "@/components/MoreInfoModal";


export default function Home() {
  return (
    <>
      <Hero/>
      <Values/>
      <Student/>
      <Cta/>
      {/* <MoreInfoModal/> 
      Questa si deve aggiungere dopo. Devo vedere il fatto della Disclosure di headlessui*/}
    </>
  );
}

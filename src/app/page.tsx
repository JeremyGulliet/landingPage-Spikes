import Features from "@/components/features/Features";
import Hero from "@/components/hero/Hero";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import SectionBis from "@/components/sectionBis/SectionBis";
import Image from "next/image";


export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <Image
        alt="Background"
        src="/background.jpg"
        width={1440}
        height={1160}
        quality={100}
        className="absolute w-full h-full z-0"
      />
      <main className=" flex  flex-col items-center z-10 text-[#ECECEC]">
        <div className="flex flex-col px-5 pb-20 gap-20">
          <Header />
          <Hero />
        </div>
        <div className="flex justify-center items-center w-full py-[60px] px-5 gap-10">
          <Image
            alt="Logo-Title"
            src="/Logo-Title.png"
            width={1440}
            height={200}
            quality={100} />
        </div>
        <Features />
        <SectionBis />
        <Footer />
      </main>
    </div>
  );
}

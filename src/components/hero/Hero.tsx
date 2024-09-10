import Image from "next/image";
import HeroButtons from "./HeroButtons";
import HeroTitle from "./HeroTitle";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center gap-20 pt-12">
      <HeroTitle />
      <HeroButtons />
      <div className="w-[960px] h-[472px] rounded-[24px]">
        <Image alt="Hero" src="/ImageWrapper.png" width={960} height={472} />
      </div>
    </section>
  );
}
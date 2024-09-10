import Image from "next/image";
import HeroButtons from "./HeroButtons";
import HeroTitle from "./HeroTitle";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center gap-10 xl:gap-20 md:pt-12">
      <HeroTitle />
      <HeroButtons />
      <div className="xl:w-[960px] xl:h-[472px] rounded-[24px]">
        <Image alt="Hero" src="/ImageWrapper.png" width={960} height={472} />
      </div>
    </section>
  );
}
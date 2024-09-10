

export default function HeroTitle() {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <h6 className=" text-center text-[#F2F4F8] w-[417.62px] h-[45.81px] rounded-[61.91px] border-2 border-white/30 py-2.5 px-5 ">
        We just raised $20M in Series B. Learn more
      </h6>
      <div className="flex flex-col justify-center items-center w-[960px] h-[242px] gap-6">
        <h1 className=" text-center text-[80px] leading-[80px] font-medium text-transparent bg-clip-text bg-gradient-to-br from-[#ECECEC] from-10% to-[#ECECEC00]/20 w-max">
          Modern analytics <br />
          for the modern world
        </h1>
        <p className="max-w-[600px] text-lg leading-7 text-center text-transparent bg-clip-text bg-[#ECECECA6]/65">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
      </div>
     
    </div>
  );
}
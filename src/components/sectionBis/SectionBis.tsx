import { Button } from "../ui/button";

export default function SectionBis() {
    return (
      <div className="flex flex-col justify-center items-center w-[1440px] h-[560px] py-[60px] px-5  border-[#0B0121]">
        <div className="flex justify-center w-[1200px] h-[440px] rounded-[20px] p-[60px] gap-4 shadow-inner shadow-white/50 drop-shadow-xl">
          <div className="flex flex-col justify-center w-[768px] h-[320px] gap-6 ">
            <h1 className="text-5xl font-bold leading-[57px] text-center ">
              Our powerful analytics provides invaluable insights.
            </h1>
            <p className="text-lg leading-7 text-center">
              Unlock the power of data with our cutting-edge analytics product.
              Get instant insights with our user-friendly Analytics Dashboard,
              and take advantage of our innovative digital credit tokens to
              reward your customers and incentivize engagement.
            </p>
            <div className="flex justify-center items-center">
              <Button className="w-[197px] h-[48px] rounded-[60px] border border-[#ECECEC] py-3 px-6 leading-6 hover:bg-[#ECECEC]/50 ">
                Download the app
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
}

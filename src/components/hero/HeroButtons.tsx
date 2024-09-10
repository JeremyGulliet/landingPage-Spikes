import { Button } from "../ui/button";

export default function HeroButtons() {
  return (
      <div className="flex justify-center items-center xl:max-w-[394px] xl:max-h-[64px] xl:pt-4 gap-4">
        <Button className="xl:w-[197px] xl:h-[48px] rounded-[60px] py-3 px-6 gap-2 bg-[#ECECEC] hover:bg-[#ECECEC]/50 text-[#0B081C] leading-6">
          Download the app
        </Button>
        <Button className="xl:w-[181px] xl:h-[48px] rounded-[60px] py-3 px-6 bg-transparent hover:bg-[#ECECEC]/50 border border-[#ECECEC] leading-6">
          Talk to an expert
        </Button>
      </div>
    
  );
}
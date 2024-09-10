import { Button } from "../ui/button";

export default function HeroButtons() {
  return (
      <div className="flex justify-center items-center max-w-[394px] max-h-[64px] pt-4 gap-4">
        <Button className="w-[197px] h-[48px] rounded-[60px] py-3 px-6 gap-2 bg-[#ECECEC] hover:bg-[#ECECEC]/50 text-[#0B081C] leading-6">
          Download the app
        </Button>
        <Button className="w-[181px] h-[48px] rounded-[60px] py-3 px-6 bg-transparent hover:bg-[#ECECEC]/50 border border-[#ECECEC] leading-6">
          Talk to an expert
        </Button>
      </div>
    
  );
}
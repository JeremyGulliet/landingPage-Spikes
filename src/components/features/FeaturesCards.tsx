/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function FeaturesCards() {
    return (
      <div className="flex flex-col justify-center items-center p-[10px] gap-20">
        <div className="flex justify-center items-center max-w-[1180px] gap-6">
          <div className="flex flex-col justify-center w-[578px] h-[372px] rounded-[20px] overflow-hidden border-none bg-[#0B0121] p-[60px] gap-4 shadow-inner shadow-white/50 drop-shadow-xl">
            <div className="shadow-2xl shadow-[#591DDDBF]/75 w-[50px] h-[50px]">
              <Image
                alt="icon"
                src="/Icons/Icon-Image.png"
                width={50}
                height={50}
              />
            </div>

            <div className="flex flex-col gap-[10px] text-[#ECECEC]">
              <h1 className="text-medium text-[32px] leading-10 ">
                Analytics Dashboard
              </h1>
              <p className="text-sm leading-5">
                Our Analytics Dashboard provides a clear and intuitive interface
                for you to easily analyze your data. From customizable graphs to
                real-time data updates, our dashboard offers everything you need
                to gain valuable insights.
              </p>
              <div className="flex pt-4 gap-4">
                <a className="flex rounded-[4px] gap-2 font-medium underline leading-6 cursor-pointer">
                  View dashboard
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center w-[578px] h-[372px] rounded-[20px] overflow-hidden border-none bg-[#0B0121] p-[60px] gap-4 shadow-inner shadow-white/50 drop-shadow-xl">
            <div className="shadow-2xl shadow-[#591DDDBF]/75 w-[50px] h-[50px]">
              <Image
                alt="icon"
                src="/Icons/Icon-Image2.png"
                width={50}
                height={50}
              />
            </div>

            <div className="flex flex-col gap-[10px] text-[#ECECEC]">
              <h1 className="text-medium text-[32px] leading-10 ">
                Digital Credit Tokens
              </h1>
              <p className="text-sm leading-5">
                Reward your customers and incentivize engagement with our
                innovative digital credit tokens. Our tokens can be customized
                to match your branding, and are a flexible and scalable way to
                drive customer loyalty and encourage repeat business.
              </p>
              <div className="flex pt-4 gap-4">
                <a className="flex rounded-[4px] gap-2 font-medium underline leading-6 cursor-pointer">
                  View tokens
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center w-[1180px] h-[422px] rounded-[20px] overflow-hidden border-none bg-[#0B0121] p-[60px] gap-4 shadow-inner shadow-white/50 drop-shadow-xl">
          <div className="flex flex-col w-[460px] h-[302px] gap-6">
            <div className="shadow-2xl shadow-[#C925ABBF]/75 w-[50px] h-[50px]">
              <Image
                alt="icon"
                src="/Icons/Icon-Image3.png"
                width={50}
                height={50}
              />
            </div>
            <div className="flex flex-col gap-[10px] text-[#ECECEC]">
              <h1 className="text-medium text-[32px] leading-10 ">
                Code collaboration
              </h1>
              <p className="text-sm leading-5">
                Our advanced code synchronization technology ensures that your
                data is always up-to-date and accurate, no matter where it's
                coming from. Whether you're integrating data from multiple
                sources or working with a team of developers, our
                synchronization technology makes it easy to collaborate and
                ensure that your data is consistent and reliable.
              </p>
              <div className="flex pt-4 gap-4">
                <a className="flex rounded-[4px] gap-2 font-medium underline leading-6 cursor-pointer">
                  View code collaboration
                </a>
              </div>
            </div>
          </div>
          <div className="flex w-[467px] h-[300px] rounded-[20px]">
            <Image
              alt="icon"
              src="/Image.png"
              width={467}
              height={302}
              className="rounded-[20px] shadow-inner shadow-white/50 drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    );
}
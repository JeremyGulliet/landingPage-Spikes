import Image from "next/image";

export default function Footer() {
    return (
      <footer className="flex justify-center items-center w-[1440px] h-[466px] py-[64px] px-5">
        <div className="flex w-[1200px] h-[338px] p-6">
          <div className="flex w-[1152px] h-[290px] gap-6">
            <div className="flex flex-col w-[462px] h-[290px] gap-10">
              <div className="flex flex-col w-[462px] h-[123px] gap-4">
                <h3 className="text-medium text-2xl leading-7">Contact</h3>
              </div>
              <div className="flex flex-col gap-[6px] text-white">
                <p className="font-light text-lg leading-5">
                  Work inquires: work@vaultflow.com
                </p>
                <p className="font-light text-lg leading-5">
                  PR and speaking: press@vaultflow.com
                </p>
                <p className="font-light text-lg leading-5">
                  New business: newbusiness@vaultflow.com
                </p>
              </div>
              <div className="flex flex-col w-[206px] h-[67px] gap-4">
                <h3 className="text-medium text-2xl leading-7 text-white">
                  Careers
                </h3>
                <p className="font-light text-lg leading-5 text-white">
                  Careers@vaultflow.com
                </p>
              </div>
              <p className="font-light leading-5 text-[#939393]">
                © 2023 Vaultflow. All Rights Reserved.
              </p>
            </div>
            <div className="flex flex-col w-[462px] h-[252px] gap-10">
              <div className="flex flex-col w-[462px] h-[89px] gap-4">
                <h3 className="text-medium text-2xl leading-7">Adress</h3>
                <div className="flex w-[230px] h-[44px]">
                  <p className="font-light text-lg leading-5 text-white">
                    398 11th Street, Floor 2 San Francisco, CA 94103
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-[462px] h-[123px] gap-4">
                <h3 className="text-medium text-2xl leading-7">Social</h3>
                <div className="flex flex-col w-[462px] h-[78px] gap-[6px]">
                  <p className="font-light text-lg leading-5 text-white">
                    Twitter
                  </p>
                  <p className="font-light text-lg leading-5 text-white">
                    Instagram
                  </p>
                  <p className="font-light text-lg leading-5 text-white">
                    Tik Tok
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-end items-end w-[180px] h-[290px]">
              <div className="flex w-[138px] h-[22px] gap-[10px]">
                <Image alt="Logo" src="/LogoFooter.png" width={138} height={22} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}
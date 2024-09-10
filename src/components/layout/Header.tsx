import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

export default function Header() {
    
    
    return (
      <header className="flex justify-between items-center pt-[30px]">
        <div className="flex justify-between items-center w-[1379px] h-[72px] rounded-[25px] px-[40px] bg-[#0B081C80]/50">
          <div className="flex justify-center items-center w-[138px] h-[22px] gap-[10px]">
            <Image
              src="/Logo.png"
              alt="logo"
              width={100}
              height={100}
              className="size-6"
            />
            <p className="font-bold text-2xl leading-5 tracking-tight">
              Vaultflow
            </p>
          </div>
          <nav className="flex justify-center items-center gap-8">
            <ul className="flex justify-center items-center w-[336px] h-[72px] gap-8">
              <li className="transition ease-in-out duration-150 hover:scale-105 hover:opacity-50">
                <Link href="#Features" className="leading-6">
                  Features
                </Link>
              </li>
              <li className="transition ease-in-out duration-150 hover:scale-105 hover:opacity-50">
                <Link href="#pricing" className="leading-6">
                  Pricing
                </Link>
              </li>
              <li className="transition ease-in-out duration-150 hover:scale-105 hover:opacity-50">
                <Link href="#AboutUs" className="leading-6">
                  About us
                </Link>
              </li>
            </ul>
          </nav>
          <Button className="w-[189px] h-[40px] bg-[#ECECEC] rounded-[50px] border border-[#ECECEC] py-2 px-5 text-[#0B081C] leading-6 hover:bg-[#ECECEC]/50 ">
            Download the app
          </Button>
        </div>
      </header>
    );
}
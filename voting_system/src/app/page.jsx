"use client"
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { Pacifico } from "next/font/google"

import localFont from "next/font/local"
import Link from "next/link";

import { LoginForm } from "@/components/ui/LoginForm";

const montserrat = Montserrat({
  weight: "800",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
})

const Fontatica = localFont({
  src: "./fonts/Fontatica4F.woff2"
});

const Croogla = localFont({
  src: "./fonts/Croogla4F.woff2"
})



export default function Home() {
  
  return (
    <div className="relative bg-radial-[at_50%_75%] from-indigo-900 to-blue-200 to-90% h-[100%] w-[100%] mt-0 flex">
      {/*grid */}
      <div className="grid grid-rows-[30vh_50vh_20vh] gap-0 h-[100%] w-[100%]">
        {/* 1 and 2 */}
        <div className=" flex-col col-span-2 ">
            <div className="pt-10 flex mx-auto items-center justify-center">
              <h1 className={`text-gray-200 ${Fontatica.className} antialiased tracking-widest text-8xl text-center  text-shadow-lg`}>AKATAKYIE</h1>
            
              <Image
                  className="mx-5"
                  src="/owass_crest.png" 
                  alt="owass"
                  width={100}
                  height={100}
              />
            </div>
            <div className="w-24 h-px bg-gray-200 mx-auto my-3"></div>

            <h2 className={` text-gray-200 text-shadow-lg text-center text-2xl mt-2  ${Croogla.className} p-3  mx-auto w-[30%]`}>
                  Opoku Ware Old Students Association
            </h2>         
        </div>
        {/* 3 and 4 */}
        <div className=" flex col-span-2 justify-center items-center ">
            <div className="block ">
              <h1 className={`text-gray-200 ${Fontatica.className} antialiased tracking-widest text-7xl text-shadow-lg pt-10  `}>
                E -VOTING
              </h1>
              
              <LoginForm/>
            </div>
          
          <div className=" w-[40%] h-full relative mt-15">
            <Image 
              src="/3d2.png" 
              alt="vote sign"
              fill 
            />
          </div>
        </div>
        {/* 5 and 6 */}
        <div className="col-span-2 flex justify-center items-center ">
                <h1 className={`text-white text-xl font-semi-bold ${Croogla.className} mt-6 mx-8`}>Reliable </h1>
      
                <h1 className={`text-white text-xl font-semi-bold ${Croogla.className} mt-6 mx-8`}>Secure </h1>
         
                <h1 className={`text-white text-xl font-semi-bold ${Croogla.className} mt-6 mx-8`}>Efficient </h1>
        </div>
      </div>
        
          
      </div>
  );
}

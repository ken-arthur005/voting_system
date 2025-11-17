"use client"

import  { generalLinks, menuLinks } from "./list";

import Image from "next/image"

import Navbar from "./components/Navbar";
import DashboardMain from "./components/Dashboard";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  weight: "300",
  subsets: ["latin"],
});

const Dashboard = () => {
  return (
    <div className="grid grid-cols-[15vw_85vw] grid-rows-[10vh_90vh]">
            {/* Sidebar */}
            <div className="row-span-2 rounded-2xl mx-4 my-4 border-1 bg-gray-100 grid grid-rows-[15%_45%_40%] ">
              {/* logo */}
              <div className={`p-5  flex ${montserrat.className} antialiased`}>
                <Image
                  className="h-[50px]"
                  src="/owass_crest.png" 
                  alt="owass"
                  width={50}
                  height={50}
                />
                
                <h2 className={` mx-2.5  font-semibold`}>
                  Akatakyie E-voting platform
                </h2>
              </div>

              {/* content */}
              <div className={`flex-col ${montserrat.className} antialiased ml-6 justify-center items-end`}>
                <h1 className=" my-5 text-sm">Menu</h1>
                {menuLinks.map((i)=>{
                  const Icon = i.icon
                  return (
                    <ul key={i.id} className="flex my-5 text-gray-500 hover:text-black hover:font-semibold"><Icon size={20} className="mr-2"/><li>{i.name}</li></ul>
                  )
                })}
      
              </div>

              {/* footer */}
              <div className={`p-5 flex-col ${montserrat.className} antialiased ml-2 my-auto items-end`}>
                <h1 className="my-5 text-sm">General</h1>
                {
                  generalLinks.map((i)=>{
                    const Icon = i.icon
                    return (
                      <ul key={i.id} className="flex my-5 text-gray-500 hover:text-black hover:font-semibold"><Icon size={20} className="mr-2"/><li>{i.name}</li></ul>
                    )
                  })
                }
              </div>
                    
                
            </div>

            {/* NAVBAR */}
            <Navbar/>

            {/* THE MAIN SECTION */}
            <DashboardMain/>
    
    </div>
    
  )
}

export default Dashboard
"use client"

import { MdOutlineAnalytics } from "react-icons/md";
import { HiHandThumbUp } from "react-icons/hi2";
import { IoIosPeople } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { IoIosNotificationsOutline } from "react-icons/io";

import Image from "next/image"
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
                <div className="flex my-5"><MdOutlineAnalytics size={20} className="mr-2"/><h2>Analytics</h2></div>
                <div className="flex my-5"><HiHandThumbUp size={20} className="mr-2 "/><h2>Elections</h2></div>
                <div className="flex my-5"><IoIosPeople  size={20} className="mr-2 "/><h2>Candidate and Portfolio Management</h2></div>
              </div>

              {/* footer */}
              <div className={`p-5 flex-col ${montserrat.className} antialiased ml-2 my-auto items-end`}>
                <h1 className="my-5 text-sm">General</h1>
                <div className="flex my-5"><IoSettingsOutline size={20} className="mr-2"/><h2>Settings</h2></div>
                <div className="flex my-5"><IoIosLogOut size={20} className="mr-2 "/><h2>Logout</h2></div>
              </div>
                    
                
            </div>

            {/* NAVBAR */}
            <div className="rounded-2xl  border-2 bg-gray-200 mr-4 mb-2 mt-4  items-center flex justify-between">
                {/*Search bar */}
                <div className=" rounded-full bg-white ml-5 w-[20%] h-[50%] flex items-center">
                  <CiSearch size={20} className="mx-4"/>
                  <input type="text" id="name" size={25} className={`h-[60%] ${montserrat.className}`} />
                </div>

                
              {/*USER */}

              <div className="flex mr-5 items-center">


                <div className="">
                  <IoIosNotificationsOutline size={25} className="mx-2" />
                </div>
                <div className="rounded-full p-1 bg-amber-300 mx-2">
                  <Avatar>
                    <AvatarImage src="/messi.png" />
                    <AvatarFallback>LM</AvatarFallback>
                  </Avatar>
                </div>
    
                <div className={`${montserrat.className} mr-2`}>
                  <h2 className="text-xs font-semibold">Lionel Messi</h2>
                  <h3 className="text-xs">Admin</h3>
                </div>
              </div>
              

            </div>

            {/* THE MAIN SECTION */}
            <div className="rounded-2xl border-2 bg-gray-200 mr-4 mb-4 mt-2">
                 
                   
            </div>
    
    
    </div>
    
  )
}

export default Dashboard
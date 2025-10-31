"use client"

import { MdOutlineAnalytics } from "react-icons/md";
import { HiHandThumbUp } from "react-icons/hi2";
import { IoIosPeople } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

import Image from "next/image"
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: "300",
  subsets: ["latin"],
});

const Dashboard = () => {
  return (
    <div className="grid grid-cols-[15vw_85vw] grid-rows-[20vh_80vh]">
            {/* Sidebar */}
            <div className="row-span-2 rounded-2xl mx-4 my-4 border-1 bg-gray-100 grid grid-rows-[20%_40%_40%] ">
              {/* logo */}
              <div className="p-5 ml-3">
                <Image
                  className=""
                  src="/owass_crest.png" 
                  alt="owass"
                  width={100}
                  height={100}
                />
              </div>

              {/* content */}
              <div className={`p-5 flex-col ${montserrat.className} antialiased ml-2 my-auto justify-center items-end`}>
                <h1 className="font-semibold my-5">Menu</h1>
                <div className="flex my-5"><MdOutlineAnalytics size={20} className="mr-2"/><h2>Analytics</h2></div>
                <div className="flex my-5"><HiHandThumbUp size={20} className="mr-2 "/><h2>Elections</h2></div>
                <div className="flex my-5"><IoIosPeople  size={20} className="mr-2 "/><h2>Candidate and Portfolio Management</h2></div>
              </div>

              {/* footer */}
              <div className={`p-5 flex-col ${montserrat.className} antialiased ml-2 my-auto items-end`}>
                <h1 className="font-semibold my-5">General</h1>
                <div className="flex my-5"><IoSettingsOutline size={20} className="mr-2"/><h2>Settings</h2></div>
                <div className="flex my-5"><IoIosLogOut size={20} className="mr-2 "/><h2>Logout</h2></div>
              </div>
                    
                
            </div>

            {/* NAVBAR */}
            <div className="rounded-2xl  border-2 bg-gray-200 mr-4 mb-2 mt-4">
                
                   
            </div>

            {/* THE MAIN SECTION */}
            <div className="rounded-2xl border-2 bg-gray-200 mr-4 mb-4 mt-2">
                 
                   
            </div>
    
    
    </div>
    
  )
}

export default Dashboard
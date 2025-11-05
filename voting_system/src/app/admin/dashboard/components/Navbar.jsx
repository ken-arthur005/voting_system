
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: "300",
  subsets: ["latin"],
});

import { CiSearch } from "react-icons/ci";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { IoIosNotificationsOutline } from "react-icons/io";


const Navbar = () => {
    return (
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

    )




}

export default Navbar
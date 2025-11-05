import { MdOutlineAnalytics } from "react-icons/md";
import { HiHandThumbUp } from "react-icons/hi2";
import { IoIosPeople } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { IoIosNotificationsOutline } from "react-icons/io";


export const menuLinks = [
    {
        id: 1,
        name: "Analytics",
        icon: MdOutlineAnalytics
    },
    {
        id: 2,
        name: "Elections",
        icon: HiHandThumbUp
    },
    {
        id: 3,
        name: "Candidate and Portfolio Management",
        icon: IoIosPeople
    },
]

export const generalLinks = [
    {
        id: 1,
        name: "Settings",
        icon: IoSettingsOutline
    },
    {
        id: 2,
        name: "Logout",
        icon: IoIosLogOut
    },
]

 


import Image from "next/image";
import { Montserrat } from "next/font/google";
import { Pacifico } from "next/font/google"
import { Button } from "@/components/ui/button"


const montserrat = Montserrat({
  weight: "800",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
})

export default function Home() {
  return (
    <div className="relative bg-radial-[at_50%_75%] from-indigo-900 via-blue-200 to-[#131515] to-90% h-[100vh] w-[100vw] mt-0 flex">
      {/*grid */}
      <div className="grid grid-rows-[30vh_50vh_20vh] grid-cols-[40vw_60vw] gap-0 h-[100vh] w-[100vw]">
        {/* 1 and 2 */}
        <div className="col-span-2 flex-col">
          <h1 className={`text-gray-200 ${montserrat.className} antialiased tracking-widest text-8xl text-center pt-10 text-shadow-lg`}>AKATAKYIE</h1>

            <h2 className={` text-gray-200 text-shadow-lg text-center text-2xl mt-2  ${pacifico.className}
                backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/5 
                border border-white/30 rounded-2xl p-3 shadow-[0_8px_32px_rgba(0,0,0,0.1)] mx-auto w-[30%]`}
            >
                  Opoku Ware Old Students Association
            </h2>         
        </div>
        {/* 3 and 4 */}
        <div className=" flex col-span-2 justify-center items-center ">
            <div className="block ">
              <h1 className={`text-gray-200 ${montserrat.className} antialiased tracking-widest text-7xl text-shadow-lg pt-10  `}>
                E -VOTING
              </h1>
              <Button size="lg" className={`${montserrat.className} mt-6
                backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/5 
                border border-white/30 rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.1)]
                hover:bg-white/30 hover:shadow-[0_12px_48px_rgba(0,0,0,0.2)]
                transition-all duration-300 ease-in-out
                text-shadow-lg
                `}
              > 
                <h1 className={`text-white text-3xl font-bold`}>SIGN IN </h1>
              </Button>
            </div>
          
          <div className=" w-[40%] h-full relative">
            <Image 
              src="/3d2.png" 
              alt="vote sign"
              fill 
            />
          </div>
        </div>
        {/* 5 and 6 */}
        <div className="col-span-2 flex justify-center items-center ">
          <Button size="lg" 
                className={`${montserrat.className} mt-6 mx-4
                backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/5 
                border border-white/30 rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.1)]
                `}
          > 
                <h1 className={`text-white text-2xl font-semi-bold`}>Reliable </h1>
          </Button>
          <Button size="lg" className={`${montserrat.className} mt-6 mx-4
                backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/5 
                border border-white/30 rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.1)]
                `}
          > 
                <h1 className={`text-white text-2xl font-semi-bold`}>Secure </h1>
          </Button>
          <Button size="lg" className={`${montserrat.className} mt-6 mx-4
                backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/5 
                border border-white/30 rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.1)]
                `}
          > 
                <h1 className={`text-white text-xl font-semi-bold`}>Efficient </h1>
          </Button>
          
        </div>
      </div>
        
          
      </div>
  );
}

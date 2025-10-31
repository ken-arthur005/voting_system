"use client"

import {
    Sidebar,
    SidebarProvider,
} from "@/components/ui/sidebar"


const Dashboard = () => {
  return (
    <div className="grid grid-cols-[20vw_80vw] grid-rows-[20vw_80vw]">
        <SidebarProvider>
            <Sidebar className="col-span-2 w-[20vw] rounded-2xl my-3 ml-3">
                
                    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                      
                    </header>
                    <div className="flex flex-1 flex-col gap-4 p-4">
                    
                    
                    </div>
                
            </Sidebar>
        </SidebarProvider>
    </div>
    
  )
}

export default Dashboard
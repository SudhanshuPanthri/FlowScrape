import React from "react";
import Logo from "@/components/Logo";

const Layout=({children}:{children:React.ReactNode})=>{
    return(
        <div className="flex flex-col items-center justify-center h-screen gap-10">
            <Logo fontSize="text-2xl" iconSize={20} />
            {children}
        </div>
    )
}

export default Layout;
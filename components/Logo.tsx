import {cn} from "@/lib/utils";
import {SquareDashedMousePointer} from "lucide-react";
import Link from "next/link";

type LogoProps={
    fontSize:string,
    iconSize:number
}

const Logo=({fontSize,iconSize}:LogoProps)=>{
    return(
        <Link href="" className={cn("text-2xl font-extrabold flex items-center gap-2",fontSize)}>
            <div className="rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 p-2">
                <SquareDashedMousePointer size={iconSize} className="stroke-white"/>
            </div>
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                Flow
            </span>
            <span className="text-stone-700 dark:text-stone-300">
                Scrape
            </span>
        </Link>
    )
}

export default Logo;
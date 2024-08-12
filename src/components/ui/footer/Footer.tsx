import { titleFont } from "@/config/fonts"
import Link from "next/link"

export const Footer = () => {
  return (
    <div className="flex w-full justify-center text-xs mb-10">
        Footer
    
    <Link
        href='/'

    >
        <span className={`${titleFont.className} antialiased font-bold `}>| Teslo</span>
        <span>| Shop</span>
        <span>©{new Date().getFullYear()} </span>
    </Link>

    <Link
        href='/'
        className="mx-3"
    >
        Privacidad y legal 
    </Link>
    
    <Link
        href='/'
        className="mx-3"
    >
        Ubicaciones 
    </Link>
    

    </div>
  )
}



"use client"
import Image from "next/image";
import { signOut } from "next-auth/react";
import logo from "../../public/logo.jpg";
import { poppinsNormal } from "./style";

export default function Header() {
    return (
        <div className="bg-blue-800 px-5 md:px-10 py-[1.5] flex justify-between items-center h-[43px] text-white">
            <Image src={logo} alt="logo-image" width={70} height={40} className="rounded-md" />
            <button className={`${poppinsNormal.className} bg-green-600 hover:bg-green-500  text-white text-sm px-4 py-1 rounded-md`} onClick={() => signOut()}>
                Sign Out
            </button>
        </div>
    );
};
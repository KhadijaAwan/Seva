"use client";
import Header from "@/components/header";
import { poppinsNormal } from "@/components/style";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
    const router = useRouter();
    const { data: session, status } = useSession()

    useEffect(() => {
        if (status !== "loading" && !session) {
            router.push('/');
        }
    }, [session, status, router]);

    return (
        <>
            <Header />
            <div className={`w-[90%] md:w-[500px] h-max p-8 my-[15%] bg-blue-50 rounded-md mx-auto text-blue-800 ${poppinsNormal.className}`}>
                Welcome to Seva! You have login to your account.
            </div>
        </>
    )
}
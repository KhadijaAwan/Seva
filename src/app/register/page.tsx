"use client";
import Link from 'next/link';
import Image from "next/image";
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/components/context';
import logo from "../../../public/logo.jpg";
import { ButtonSection } from '@/components/buttons';
import { LabelText } from '@/components/labelText';
import { InputText } from '@/components/inputText';
import { background, authCard, linkStyle, flexColumn, poppinsMinor } from "@/components/style";

const Register = () => {
    const router = useRouter();
    const { userDetails, setUserDetails } = useUser();

    const submitData = async (e: FormEvent) => {
        e.preventDefault();
        try {
            let response = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userDetails),
            });

            response = await response.json();
            console.log("Response from server: ", response);
            setUserDetails({
                email: "",
                password: "",
            });
            router.push("/");
        } catch (error) {
            console.error(`Failed to add user: `, error);

        }
    };

    return (
        <div className={`${background}`}>
            <div className={`${authCard}`}>
                <div className="flex justify-center mb-6">
                    <Image src={logo} alt="logo-image" width={110} height={90} className="rounded-md" />
                </div>
                <form onSubmit={submitData}>
                    <div className="mb-4">
                        <LabelText labelTitle={"Email"} />
                        <InputText inputType={"email"} />
                    </div>
                    <div className="mb-4">
                        <LabelText labelTitle={"Password"} />
                        <InputText inputType={"password"} />
                    </div>
                    <div className={`${flexColumn}`}>
                        <ButtonSection buttonTitle={'Register'} />

                        <Link href="/" className={`${linkStyle}`}>Already Have an Account? <strong className={`ml-1 ${poppinsMinor.className}`}>Login</strong></Link>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default Register;
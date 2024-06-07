"use client";
import Image from "next/image";
import { useUser } from "@/components/context";
import { ButtonSection } from "@/components/buttons";
import { LabelText } from "@/components/labelText";
import { signIn } from "next-auth/react";
import { InputText } from "@/components/inputText";
import logo from "../../public/logo.jpg";
import Link from "next/link";
import { background, authCard, linkStyle, flexColumn, poppinsMinor } from "@/components/style";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const { userDetails } = useUser();

  const submitData = async (event: any) => {
    event.preventDefault();
    const result = await signIn("credentials", {
      email: userDetails.email,
      password: userDetails.password,
      redirect: false,
    });
    if (result) {
      router.push("/home");
    } else {
      console.error("Failed to sign in:", result);
    }
  }

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
            <ButtonSection buttonTitle={'Login'} />

            <Link href="/register" className={`${linkStyle}`}>Don't Have an Account? <strong className={`ml-1 ${poppinsMinor.className}`}>Register</strong></Link>
          </div>
        </form>
      </div>
    </div>
  );
};
"use client";
import { useUser } from "@/components/context";
import { poppinsNormal } from "./style";

export const InputText = ({ inputType }: { inputType: "email" | "password" }) => {
    const { userDetails, setUserDetails } = useUser();

    return (
        <input
            type={inputType}
            value={userDetails[inputType]}
            onChange={(e) =>
                setUserDetails((prevState) => ({
                    ...prevState,
                    [inputType]: e.target.value,
                }))
            }
            className={`mt-1 p-2 w-full border rounded-md text-sm focus:outline-none focus:border-2 focus:border-blue-400 ${poppinsNormal.className}`}
        />
    );
};
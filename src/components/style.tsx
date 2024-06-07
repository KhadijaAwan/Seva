import { Poppins } from "next/font/google";
export const poppinsMinor = Poppins({ subsets: ["latin"], weight: "500" });
export const poppinsNormal = Poppins({ subsets: ["latin-ext"], weight: "400" });
export const linkStyle = `mt-8 text-center text-white ${poppinsNormal.className}`;
export const flexColumn = "flex flex-col";
export const background = "min-h-screen flex items-center justify-center bg-gray-50";
export const authCard = "max-w-md w-full p-6 bg-blue-600 rounded-lg shadow-md";
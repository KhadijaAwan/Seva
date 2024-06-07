import { poppinsMinor } from "./style";

export const ButtonSection = ({ buttonTitle }: { buttonTitle: string }) => {
    return (
        <button
            type="submit"
            className={`${poppinsMinor.className} bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900`}
        >
            {buttonTitle}
        </button>
    );
};
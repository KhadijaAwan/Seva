import { poppinsMinor } from "./style";

export const LabelText = ({ labelTitle }: { labelTitle: string }) => {
    return (
        <label
            htmlFor={labelTitle}
            className={`block text-sm ${poppinsMinor.className} text-white mb-1`}
        >
            {labelTitle}
        </label>
    );
};
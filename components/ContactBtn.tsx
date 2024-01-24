"use client";

import { useRouter } from "next/navigation";
import { IoCallSharp } from "react-icons/io5";

export const ContactBtn = () => {
    const router = useRouter();
    const handleOpen = () => {
        router.push("/?modal=t", { scroll: false });
    };
    return (
        <button
            className="z-20 flex gap-2 items-center fixed bottom-4 right-4 p-4 bg-violet-500 text-white rounded-3xl hover:bg-violet-800 hover:cursor-pointer"
            type="button"
            onClick={handleOpen}
        >
            <span className="text-2xl text-green-300">
                <IoCallSharp />
            </span>
            Contact Me
        </button>
    );
};

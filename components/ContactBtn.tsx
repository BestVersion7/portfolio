"use client";

import { useRouter } from "next/navigation";

export const ContactBtn = () => {
    const router = useRouter();
    const handleOpen = () => {
        router.push("/?modal=t", { scroll: false });
    };
    return (
        <button
            className="fixed bottom-4 right-4 text-xl p-4 bg-violet-500 text-white rounded-3xl hover:bg-violet-800 hover:cursor-pointer"
            type="button"
            onClick={handleOpen}
        >
            Contact Me
        </button>
    );
};

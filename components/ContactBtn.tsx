"use client";

import { useRouter } from "next/navigation";
import { IoCallSharp } from "react-icons/io5";
import { ContactForm } from "./ContactForm";
import { useSearchParams } from "next/navigation";

export const ContactBtn = () => {
    const router = useRouter();
    const modalOpen = useSearchParams().get("modal");
    const handleOpen = () => {
        router.push("?modal=t", { scroll: false });
    };
    return (
        <div>
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
            {modalOpen === "t" && (
                <div
                    className="relative z-10"
                    aria-labelledby="modal-title"
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                    <div className="fixed inset-0 z-10 grid items-center justify-center text-center ">
                        <div className=" bg-orange-200 rounded-lg shadow-lg w-72 h-[350px] max-w-md px-3 flex flex-col justify-center">
                            <h3
                                className="text-xl font-semibold  text-gray-900"
                                id="modal-title"
                            >
                                Contact me
                            </h3>

                            <ContactForm />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export const ContactForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const msgRef = useRef(null);

    const [completeForm, setCompleteForm] = useState(false);

    const router = useRouter();
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setCompleteForm(true);
    };

    const handleClose = () => {
        router.push("/", { scroll: false });
    };
    return (
        <>
            {completeForm ? (
                <div className=" h-[260px] w-[210px]">
                    <p>
                        Your message has been sent. Please expect a response in
                        2-3 days.
                    </p>
                    <button
                        onClick={handleClose}
                        type="button"
                        className=" rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:cursor-pointer"
                    >
                        Close
                    </button>
                </div>
            ) : (
                <form className="text-center w-full">
                    <label>Name:</label>
                    <br />
                    <input placeholder="Name" type="text" ref={nameRef} />
                    <br />
                    <label>Email:</label>
                    <br />
                    <input placeholder="Email" type="text" ref={emailRef} />
                    <br />
                    <label>Message:</label>
                    <br />
                    <textarea
                        placeholder="Message"
                        className="w-full h-24"
                        ref={msgRef}
                    />

                    <div className="flex justify-center gap-1">
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="  rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 hover:cursor-pointer"
                        >
                            Send
                        </button>
                        <button
                            onClick={handleClose}
                            type="button"
                            className=" rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:cursor-pointer"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            )}
        </>
    );
};

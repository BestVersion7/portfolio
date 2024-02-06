"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export const ContactForm = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const msgRef = useRef<HTMLTextAreaElement>(null);

    const [completeForm, setCompleteForm] = useState(false);

    const router = useRouter();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await fetch("/api/contact", {
            method: "post",
            body: JSON.stringify({
                name: nameRef.current?.value,
                email: emailRef.current?.value,
                message: msgRef.current?.value,
            }),
        });
        setCompleteForm(true);
    };

    const handleClose = () => {
        router.push(window.location.pathname, { scroll: false });
    };
    return (
        <div>
            {completeForm ? (
                <div>
                    <p>
                        Your message has been sent. Please expect a response in
                        2-3 days.
                    </p>
                    <button
                        onClick={handleClose}
                        type="button"
                        className=" rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 "
                    >
                        Close
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <br />
                    <input
                        className="px-3 w-full"
                        placeholder="Name"
                        type="text"
                        ref={nameRef}
                    />
                    <br />
                    <label>Email:</label>
                    <br />
                    <input
                        className="px-3 w-full"
                        placeholder="Email"
                        type="text"
                        ref={emailRef}
                    />
                    <br />
                    <label>Message:</label>
                    <br />
                    <textarea
                        placeholder="Message"
                        className="w-full px-3"
                        rows={5}
                        ref={msgRef}
                    />

                    <div className="flex justify-center gap-1">
                        <button
                            type="submit"
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
        </div>
    );
};

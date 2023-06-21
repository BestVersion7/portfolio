"use client";

// import { useRef } from "react";
// import { useRouter } from "next/router";

const url2 = `https://hunterkf.com/api/comment?API_KEY=`;

async function postData(url = "", data = {}) {
    // const data2 = await fetch(url, {
    //     method: "POST",
    //     // mode: "cors",
    //     // headers: {
    //     //     "Content-Type": "application/json",
    //     // },

    //     body: JSON.stringify({ comment_body: "fdslkj" }),
    // });
    const data2 = await fetch(url2);
    const data3 = await data2.json();
    console.log(data3)
    return res.json(data3);
}

const AddForm = () => {
    // const inputRef = useRef();

    const handleSubmit = async (e) => {
        await postData(url2);
    };
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            {/* <textarea
                ref={inputRef}
                name="s"
                id="4"
                cols="30"
                rows="2"
            ></textarea> */}
            <button onClick={handleSubmit} type="submit">
                Submit
            </button>
        </form>
    );
};

export default AddForm;

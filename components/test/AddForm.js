// "use client";

// // import { useRef } from "react";
// // import { useRouter } from "next/router";

// const url2 = `https://hunterkf.com/api/comment?API_KEY=5795TRGFYU7876554GFW`;

// async function postData(url = "", data = {}) {
//     // const data2 = await fetch(url, {
//     //     method: "POST",
//     //     // mode: "cors",
//     // headers: {
//     //     "Content-Type": "application/json",
//     // },

//     //     body: JSON.stringify({ comment_body: "fdslkj" }),
//     // });
//     const data2 = await fetch(url2, {
//         method: "GET",
//         mode: "cors",
//         headers: {
//             "Content-Type": "application/json",
//             // "Access-Control-Allow-Origin": "*",
//         },
//     });
//     const data3 = await data2.json();
//     console.log(data3);
//     return res.json(data3);
// }

// const AddForm = () => {
//     // const inputRef = useRef();

//     const options = {
//         method: "GET",
//         // mode: "no-cors",
//         headers: {
//             "Content-Type": "application/json",
//             "Access-Control-Allow-Origin": "*",
//         },
//     };
//     const handleSubmit = async (e) => {
//         const data2 = await fetch(url2, { options });
//         const data = await data2.json();
//         console.log(data);
//     };
//     return (
//         <form onSubmit={(e) => e.preventDefault()}>
//             {/* <textarea
//                 ref={inputRef}
//                 name="s"
//                 id="4"
//                 cols="30"
//                 rows="2"
//             ></textarea> */}
//             <button onClick={handleSubmit} type="submit">
//                 Submit
//             </button>
//         </form>
//     );
// };

// export default AddForm;

"use client";

const url = "https://randomuser.me/api/";
const url2 = "https://hunterkf.com/api/comment?API_KEY=";
const options = {
    method: "GET",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
    },
};
const getData = async () => {
    const data2 = await fetch(
        "url"
    );
    const data = await data2.json();
    console.log(data);
};

const AddForm = () => {
    const handleClick = () => {
        getData();
    };
    return (
        <div>
            <button onClick={handleClick}>X</button>
        </div>
    );
};

export default AddForm;

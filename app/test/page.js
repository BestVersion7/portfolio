// const getComments = async () => {
//     const data2 = await fetch(
//         `https://hunterkf.com/api/comment?API_KEY=${process.env.API_KEY}`
//         // { cache: "no-store" }
//     );
//     const data = await data2.json();
//     return data;
// };

import AddForm from "@/components/test/AddForm";

export default async function TestPage() {
    // const sam = await getComments();
    // console.log(sam)
    return (
        <div>
            {/* <AddForm /> */}
            {/* {sam.map((item, index) => (
                <p key={index}>{item.comment_body}</p>
            ))} */}
        </div>
    );
}

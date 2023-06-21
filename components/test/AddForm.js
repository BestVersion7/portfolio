"use client";

// const handleForm = async (comment) => {
//     const data2 = await fetch(
//         `https://hunterkf.com/api/comment&API_KEY=${process.env.API_KEY}`,
//         { headers: { "Content-Type": "application/json" } }
//     );
// };

const AddForm = () => {
    const handleSubmit = e => {
        console.log('f')
    }
    return (
        <form>
            <textarea name="s" id="4" cols="30" rows="2"></textarea>
            <button onClick={handleSubmit} type="submit">
                Submit
            </button>
        </form>
    );
};

export default AddForm;

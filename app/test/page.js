const getComments = async () => {
    const data2 = await fetch(
        `https://hunterkf.com/api/comment&API_KEY=${process.env.API_KEY}`
    );
    const data = await data2.json();
    return data;
};

export default function TestPage() {
    console.log('data');
    return <div>This is a test Page fetch</div>;
}

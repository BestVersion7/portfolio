export async function generateStaticParams() {
    return [{ id: "1" }, { id: "2" }];
}

const PD = ({ params }) => {
    // console.log(params);
    return <h1>hello there</h1>;
};

export default PD;

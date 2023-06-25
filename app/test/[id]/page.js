export async function generateStaticParams() {
    return [{ pd: "1" }, { pd: "2" }];
}

const PD = ({ params }) => {
    // console.log(params);
    return <h1>hello there</h1>;
};

export default PD;

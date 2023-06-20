export default function Id() {
    return <div>yo there</div>;
}

export const getStaticProps = () => {
    return {
        props: {},
    };
};

export const getStaticPaths = () => {
    const paths = [{ params: { id: '1' } }];
    return {
        paths,
        fallback: false,
    };
};

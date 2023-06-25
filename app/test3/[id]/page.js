export async function generateStaticParams() {
    const results = await fetch("https://www.hunterkf.com/api/article", {
        next: { revalidate: 36000 },
        headers: {
            authorization: process.env.NEXT_PUBLIC_API_KEY,
        },
    });
    const data = await results.json();

    return data.map((item) => ({
        id: item.article_id.toString(),
    }));
}

async function getArticleById(article_id) {
    const results = await fetch(
        `https://www.hunterkf.com/api/article?article_id=${article_id}`,
        {
            next: { revalidate: 36000 },
            headers: {
                authorization: process.env.NEXT_PUBLIC_API_KEY,
            },
        }
    );
    const data = await results.json();
    return data;
}

const PD2 = async ({ params }) => {
    const data = await getArticleById(params.id);

    return <h1>hello there {data.article_post}</h1>;
};

export default PD2;

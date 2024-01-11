type IQuote = { quote: string; author: string };

export const Quote = ({ quote, author }: IQuote) => {
    return (
        <article className=" flex max-w-xs  flex-col gap-4 text-center pt-8 pb-4  m-auto italic text-xl text-fuchsia-700 font-bold tracking-wider">
            <span>{quote}</span>
            <span className=" text-blue-500">-{author}</span>
        </article>
    );
};

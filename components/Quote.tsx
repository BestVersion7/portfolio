type IQuote = { quote: string; author: string };

import { string } from "prop-types";
export const Quote = ({ quote, author }: IQuote) => {
    return (
        <p className="quote">
            <i>
                {quote} -{author}
            </i>
        </p>
    );
};

Quote.propTypes = {
    quote: string.isRequired,
    author: string.isRequired,
};

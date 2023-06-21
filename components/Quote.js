import { string } from "prop-types";
export const Quote = ({ quote, author }) => {
    return (
        <p className="quote">
            <i>
                {quote} <br />-{author}
            </i>
        </p>
    );
};

Quote.propTypes = {
    quote: string.isRequired,
    author: string.isRequired,
};

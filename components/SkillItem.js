import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { IconContext } from "react-icons";
import { string, number } from "prop-types";

export const SkillItem = ({ name, starFill, starHalf, star }) => {
    const starsFill = [];
    const starsHalf = [];
    const stars = [];
    for (let i = 1; i <= starFill; i++) {
        starsFill.push(<BsStarFill key={i} />);
    }
    for (let i = 1; i <= starHalf; i++) {
        starsHalf.push(<BsStarHalf key={i} />);
    }
    for (let i = 0; i < star; i++) {
        stars.push(<BsStar key={i} />);
    }
    return (
        <div className="section-skills-item-mapped">
            <span>{name} </span>
            <span className="section-skills-item-mapped-icon">
                <IconContext.Provider
                    value={{ size: "1em", color: "darkorange" }}
                >
                    {starsFill}
                    {starsHalf}
                    {stars}
                </IconContext.Provider>
            </span>
        </div>
    );
};

SkillItem.propTypes = {
    name: string.isRequired,
    starFill: number.isRequired,
    starHalf: number.isRequired,
    star: number.isRequired,
};

import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

export type ISkill = {
    skillName: string,
    starFill: number,
    starHalf: number,
    star: number
}

export const SkillItem = (skill: ISkill) => {
    const { skillName, starFill, starHalf, star } = skill
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
            <span>{skillName} </span>
            <span>
                <div style={{ color: "darkorange" }}>
                    {starsFill}
                    {starsHalf}
                    {stars}
                </div>
            </span>
        </div>
    );
};
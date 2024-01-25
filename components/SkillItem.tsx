import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

export type ISkill = {
    skillName: string;
    starFill: number;
    starHalf: number;
    star: number;
};

export const SkillItem = (skill: ISkill) => {
    const { skillName, starFill, starHalf, star } = skill;
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
        // bg-gradient-to-r from-slate-900  to-slate-700
        // flex justify-between
        <div className="shadow-md border border-dotted border-violet-600 px-3 py-2 rounded-md my-1 flex items-center justify-between">
            <span>{skillName} </span>
            <span className="flex text-orange-500">
                {starsFill}
                {starsHalf}
                {stars}
            </span>
        </div>
    );
};

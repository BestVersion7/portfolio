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
        <div className=" flex justify-between border-2 shadow-sm border-solid border-blue-300 px-3 py-2 rounded-md my-1 items-center bg-gradient-to-r from-slate-900  to-slate-700  text-white font-semibold hover:cursor-pointer hover:from-slate-500 hover:to-slate-300">
            <span>{skillName} </span>
            <span className="flex text-orange-300">
                {starsFill}
                {starsHalf}
                {stars}
            </span>
        </div>
    );
};

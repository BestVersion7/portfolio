import { SkillItem } from "./SkillItem";

type SkillType = {
    skillName: string;
    starFill: number;
    starHalf: number;
    star: number;
};

export const SkillItemMap = (props: {
    title: string;
    skillArray: SkillType[];
}) => {
    return (
        <div>
            {/* className="md:grid md:gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 */}
            <h3 className="text-blue-600 font-semibold tracking-wider text-lg pt-2">
                {props.title}
            </h3>
            <div className="grid gap-1 sm:gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {props.skillArray.map(
                    ({ skillName, star, starFill, starHalf }, i) => {
                        return (
                            <SkillItem
                                key={i}
                                skillName={skillName}
                                starFill={starFill}
                                starHalf={starHalf}
                                star={star}
                            />
                        );
                    }
                )}
            </div>
        </div>
    );
};

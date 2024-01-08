import {
    toolSkills,
    thirdParties,
    creativeSkills,
    webDevelopmentSkills,
    businessSkills,
} from "./data/skills";
import { SkillItem } from "./SkillItem";

const SkillPage = () => {
    return (
        <>
            <h3>Business Skills</h3>
            <div className="md:grid md:gap-5 md:grid-cols-2 lg:grid-cols-3">
                {businessSkills.map(
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

            <h3>Full-Stack Web Development</h3>
            <div className="md:grid md:gap-5 md:grid-cols-2 lg:grid-cols-3">
                {webDevelopmentSkills.map(
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
            <h3>Third-Party APIs</h3>
            <div className="md:grid md:gap-5 md:grid-cols-2 lg:grid-cols-3">
                {thirdParties.map(
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
            <h3>Creativity</h3>
            <div className="md:grid md:gap-5 md:grid-cols-2 lg:grid-cols-3">
                {creativeSkills.map(
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
            <h3>Tools</h3>
            <div className="md:grid md:gap-5 md:grid-cols-2 lg:grid-cols-3">
                {toolSkills.map(
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
        </>
    );
};

export default SkillPage;

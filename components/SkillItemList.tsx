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
            <div className="section-skills-item">
                {businessSkills.map(({ skillName, star, starFill, starHalf }, i) => {
                    return (
                        <SkillItem
                            key={i}
                            skillName={skillName}
                            starFill={starFill}
                            starHalf={starHalf}
                            star={star}
                        />
                    );
                })}
            </div>

            <h3>Full-Stack Web Development</h3>
            <div className="section-skills-item">
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
            <div className="section-skills-item">
                {thirdParties.map(({ skillName, star, starFill, starHalf }, i) => {
                    return (
                        <SkillItem
                            key={i}
                            skillName={skillName}
                            starFill={starFill}
                            starHalf={starHalf}
                            star={star}
                        />
                    );
                })}
            </div>
            <h3>Creativity</h3>
            <div className="section-skills-item">
                {creativeSkills.map(({ skillName, star, starFill, starHalf }, i) => {
                    return (
                        <SkillItem
                            key={i}
                            skillName={skillName}
                            starFill={starFill}
                            starHalf={starHalf}
                            star={star}
                        />
                    );
                })}
            </div>
            <h3>Tools</h3>
            <div className="section-skills-item">
                {toolSkills.map(({ skillName, star, starFill, starHalf }, i) => {
                    return (
                        <SkillItem
                            key={i}
                            skillName={skillName}
                            starFill={starFill}
                            starHalf={starHalf}
                            star={star}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default SkillPage;

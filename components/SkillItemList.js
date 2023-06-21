import {
    toolSkills,
    thirdParties,
    webDevelopmentSkills,
    businessSkills,
} from "./data/skills";
import { SkillItem } from "./SkillItem";

const SkillPage = () => {
    return (
        <>
            <h3>Business Skills</h3>
            <div className="section-skills-item">
                {businessSkills.map(({ name, star, starFill, starHalf }, i) => {
                    return (
                        <SkillItem
                            key={i}
                            name={name}
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
                    ({ name, star, starFill, starHalf }, i) => {
                        return (
                            <SkillItem
                                key={i}
                                name={name}
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
                {thirdParties.map(({ name, star, starFill, starHalf }, i) => {
                    return (
                        <SkillItem
                            key={i}
                            name={name}
                            starFill={starFill}
                            starHalf={starHalf}
                            star={star}
                        />
                    );
                })}
            </div>
            <h3>Tools</h3>
            <div className="section-skills-item">
                {toolSkills.map(({ name, star, starFill, starHalf }, i) => {
                    return (
                        <SkillItem
                            key={i}
                            name={name}
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

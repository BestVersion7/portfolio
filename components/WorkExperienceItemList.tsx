import { WorkExperienceItem } from "./WorkExperienceItem";
import { workExperience } from "./data/workExperience";

const WorkExperienceItemList = () => {
    return (
        <div>
            {workExperience.map(({ Company, Position, Date, Summary }, i) => {
                return (
                    <WorkExperienceItem
                        key={i}
                        company={Company}
                        position={Position}
                        date={Date}
                        summary={Summary}
                    />
                );
            })}
        </div>
    );
};

export default WorkExperienceItemList;

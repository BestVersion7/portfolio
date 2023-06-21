import { string } from "prop-types";

export const WorkExperienceItem = ({ company, position, summary, date }) => {
    return (
        <div className="section-work-container-items">
            <div>
                {company}
                <br /> {date}
            </div>
            <div>
                <b>{position}</b> <br /> {summary}
            </div>
            <br />
        </div>
    );
};

WorkExperienceItem.propTypes = {
    company: string.isRequired,
    date: string.isRequired,
    position: string.isRequired,
    summary: string.isRequired,
};

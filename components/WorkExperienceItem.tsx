type IWorkExperience = {
    company: string,
    position: string,
    summary: string,
    date: string
}

export const WorkExperienceItem = (workExperience: IWorkExperience) => {
    const { company, position, summary, date } = workExperience
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
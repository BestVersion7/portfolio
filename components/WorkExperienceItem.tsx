type IWorkExperience = {
    company: string;
    position: string;
    summary: string;
    date: string;
};

export const WorkExperienceItem = (workExperience: IWorkExperience) => {
    const { company, position, summary, date } = workExperience;
    return (
        <article className="shadow-md rounded-lg border-red-200 border  px-3 py-2 my-2  md:grid md:grid-cols-[300px,_1fr] lg:grid-cols-[400px,_1fr]">
            {/* <div className="grid grid-cols-[120px,_1fr] gap-4"> */}
            <div className="text-center font-medium sm:text-left">
                <span className="px-3  text-purple-50 bg-orange-600 rounded-lg">
                    {position}
                </span>
                <p>{company}</p>
                <p>{date}</p>
            </div>
            <div>
                <p>{summary}</p>
            </div>
        </article>
    );
};

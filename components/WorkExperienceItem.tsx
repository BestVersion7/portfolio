type IWorkExperience = {
    company: string;
    position: string;
    summary: string;
    date: string;
};

export const WorkExperienceItem = (workExperience: IWorkExperience) => {
    const { company, position, summary, date } = workExperience;
    return (
        <article className=" border-2 border-blue-500 border-solid shadow-md rounded-lg  bg-emerald-100  px-3 py-2 my-2 hover:cursor-pointer hover:bg-slate-200 md:grid md:grid-cols-[300px,_1fr] lg:grid-cols-[400px,_1fr]">
            {/* <div className="grid grid-cols-[120px,_1fr] gap-4"> */}
            <div className=" font-medium text-xl">
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

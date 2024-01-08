type IWorkExperience = {
    company: string;
    position: string;
    summary: string;
    date: string;
};

export const WorkExperienceItem = (workExperience: IWorkExperience) => {
    const { company, position, summary, date } = workExperience;
    return (
        <div className="text-xl border-2 border-blue-500 border-solid shadow-md rounded-lg  bg-white  px-3 py-2 my-2 hover:cursor-pointer hover:bg-slate-200 md:grid md:grid-cols-[300px,_1fr] lg:grid-cols-[400px,_1fr]">
            {/* <div className="grid grid-cols-[120px,_1fr] gap-4"> */}
            <div className="text-blue-700 font-medium ">
                <p className="text-red-600 ">{position}</p>
                <p>{company}</p>
                <p>{date}</p>
            </div>
            <div>
                <p>{summary}</p>
            </div>
        </div>
    );
};

type IProject = {
    title: string;
    url_link: string;
    gitHubLink: string;
    url_image: string;
    technologiesUsed: string;
    description: string;
    autoplay?: boolean;
};

export const ProjectItem = (props: IProject) => {
    return (
        <article className="border border-slate-800 px-1 sm:px-3 py-4 flex gap-2 flex-col  rounded-2xl shadow-md">
            <h2 className="  tracking-wider ">{props.title}</h2>

            <h3>Link to Project</h3>
            <span>
                <a
                    className="break-all underline px-2 py-1 bg-yellow-300 tracking-wider hover:bg-yellow-400"
                    href={props.url_link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {props.url_link}
                </a>
            </span>

            <h3>Link to Code: </h3>
            <span>
                <a
                    className="break-all underline hover:bg-yellow-400"
                    href={props.gitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {props.gitHubLink}
                </a>
            </span>

            <h3>Technologies Used:</h3>
            <span>{props.technologiesUsed}</span>

            <video
                controls
                muted
                autoPlay={props.autoplay}
                className="border-2 border-black"
            >
                <source type="video/mp4" src={props.url_image} /> Your browser
                does not support playing this video
            </video>

            <p className=" px-2 h-40 overflow-y-scroll py-2 ">
                <span className="text-orange-600 text-lg font-bold">
                    Description:
                </span>{" "}
                {props.description}
            </p>
        </article>
    );
};

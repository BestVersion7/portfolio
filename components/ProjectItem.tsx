type IProject = {
    title: string;
    url_link: string;
    gitHubLink: string;
    url_image: string;
    technologiesUsed: string;
    description: string;
};

export const ProjectItem = (props: IProject) => {
    return (
        <article className="border border-slate-800 px-1 sm:px-3 py-4 flex gap-2 flex-col  rounded-2xl shadow-md">
            <h2 className="  tracking-wider ">{props.title}</h2>

            <p className="   ">
                <b>Link to Project: </b> <br />
                <a
                    className="break-all underline px-2 py-1 bg-yellow-300 tracking-wider hover:bg-yellow-400"
                    href={props.url_link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {props.url_link}
                </a>
            </p>

            <p className="  ">
                <b>Link to Code: </b> <br />
                <a
                    className="break-all underline hover:bg-yellow-400"
                    href={props.gitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {props.gitHubLink}
                </a>
            </p>
            <p className="px-4 py-2  ">
                <b>Technologies Used:</b> <br />
                <span>{props.technologiesUsed}</span>
            </p>
            <video controls muted autoPlay className="">
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

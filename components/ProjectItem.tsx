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
        <article className="border-2 border-slate-800 border-solid bg-orange-300 px-1 sm:px-3 py-4 flex gap-2 flex-col  rounded-2xl shadow-md">
            <h2 className="  tracking-wider  border-black">{props.title}</h2>

            <p className=" bg-pink-100  border border-solid border-black shadow-md rounded-md">
                <b>Link to Project: </b> <br />
                <a
                    className="break-all underline "
                    href={props.url_link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {props.url_link}
                </a>
            </p>
            <p className="px-4 py-2  bg-gray-50 border border-solid border-black shadow-md rounded-md">
                <b>Technologies Used:</b> <br />
                <span>{props.technologiesUsed}</span>
            </p>
            <p className="  bg-gray-50 border border-solid border-black shadow-md rounded-md">
                <b>Link to Code: </b> <br />
                <a
                    className="break-all underline"
                    href={props.gitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {props.gitHubLink}
                </a>
            </p>
            <video controls muted autoPlay className="">
                <source type="video/mp4" src={props.url_image} /> Your browser
                does not support playing this video
            </video>

            <p className=" px-2 h-40 overflow-y-scroll py-2 bg-gray-50 border border-solid border-black shadow-md rounded-md">
                Description: {props.description}
            </p>
        </article>
    );
};

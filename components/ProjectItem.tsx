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
        <article className="card px-5 py-4">
            <h2>{props.title}</h2>
            <p>
                <b>Link to Project: </b>
                <a
                    className="break-words"
                    href={props.url_link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {props.url_link}
                </a>
            </p>
            <p>
                <b>Link to Code: </b>
                <a
                    className="break-words"
                    href={props.gitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {props.gitHubLink}
                </a>
            </p>
            <video controls muted autoPlay className="project-image">
                <source type="video/mp4" src={props.url_image} /> Your browser
                does not support playing this video
            </video>
            <p>
                <b>Technologies Used:</b> {props.technologiesUsed}
            </p>
            <p>
                <b>Description:</b> {props.description}
            </p>
        </article>
    );
};

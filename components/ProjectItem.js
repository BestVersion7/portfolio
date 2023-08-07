import Image from "next/image";

export const ProjectItem = (props) => {
    return (
        <article className="section-projects-web-items">
            <h2>{props.title}</h2>
            <p>
                <b>Link to Project: </b>
                <a
                    style={{ wordWrap: "break-word" }}
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
                    style={{ wordWrap: "break-word" }}
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

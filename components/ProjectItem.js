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
            <Image
                src={props.url_image}
                alt={props.title}
                height={400}
                width={400}
                quality={100}
                className="project-image"
                sizes="100vw, (min-width: 768px) 50vw"
            />
            <p>
                <b>Technologies Used:</b> {props.technologiesUsed}
            </p>
            <p>
                <b>Description:</b> {props.description}
            </p>
        </article>
    );
};

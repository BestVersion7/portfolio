import { string } from "prop-types";
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
                width="100%"
                height="100%"
                layout="responsive"
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

ProjectItem.propTypes = {
    title: string.isRequired,
    url_link: string.isRequired,
    url_image: string.isRequired,
    description: string.isRequired,
    technologiesUsed: string.isRequired,
    gitHubLink: string.isRequired,
};

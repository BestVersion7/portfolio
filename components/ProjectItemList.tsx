import { webProjects } from "./data/projects";
import { ProjectItem } from "./ProjectItem";

const ProjectItemList = () => {
    return (
        <div className="text-center grid gap-4 lg:grid-cols-2">
            {webProjects.map((item, i) => {
                return (
                    <ProjectItem
                        key={i}
                        title={item.title}
                        url_image={item.url_image}
                        url_link={item.url_link}
                        description={item.description}
                        technologiesUsed={item.technologiesUsed}
                        gitHubLink={item.gitHubLink}
                    />
                );
            })}
        </div>
    );
};

export default ProjectItemList;

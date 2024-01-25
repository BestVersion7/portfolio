import { ProjectItem } from "@/components/ProjectItem";
import ProjectItemList from "@/components/ProjectItemList";
import { webProjects } from "@/components/data/projects";

export default function ProjectPage() {
    return (
        <main className="flex flex-col gap-3">
            <h2>My Projects</h2>

            {webProjects.map((item, index) => (
                <ProjectItem key={index} {...item} autoplay={false} />
            ))}
        </main>
    );
}

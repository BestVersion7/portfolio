import Profile from "./profile/page";
import Skill from "./skill/page";
import Landing from "@/components/Landing";
import { Quote } from "@/components/Quote";
import ProjectItemList from "@/components/ProjectItemList";
const awsLine = `psql --host=xxx.comxxxx --port=5432 --username=postgres --password --dbname=xxx`;

export default function Home() {
    return (
        <div>
            <br /> <Landing />
            <br />
            <Profile /> <br />
            <Skill />
            <br />
            <section className="section-projects">
                <br /> <h2>Passion Projects: </h2>
                <Quote
                    quote="The secret to getting ahead is getting started."
                    author="Mark Twain"
                />
                <ProjectItemList /> <br />
                <br />
                <br />
            </section>
            <br />
        </div>
    );
}

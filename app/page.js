import Profile from "./profile/page";
import Skill from "./skill/page";
import Project from "./project/page";
import Landing from "@/components/Landing";

export default function Home() {
    return (
        <div>
            <br />
            <Landing />
            <br />
            <Profile /> <br />
            <Skill />
            <br />
            <Project />
            <br />
        </div>
    );
}

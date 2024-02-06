import ProjectItemList from "@/components/ProjectItemList";
import WorkExperienceItemList from "@/components/WorkExperienceItemList";
import { SummaryWImage } from "@/components/SummaryWImage";
import { SkillItemMap } from "@/components/SkillItemMap";
import {
    businessSkills,
    webDevelopmentSkills,
    thirdParties,
    creativeSkills,
    toolSkills,
} from "@/components/data/skills";

export default function Home() {
    return (
        <main>
            <h2>My Story</h2>

            <section className=" mt-2 grid gap-3 lg:grid-cols-2 ">
                <SummaryWImage
                    img="https://res.cloudinary.com/crimson-flamingo/image/upload/v1704991935/1104%20profile/me2.png"
                    title1="Summary:"
                    desc="I am a self-taught full stack web developer with a background in finance. In the past 4+ years, I have worked in the accounting departments for startups and large corporations Besides work, I enjoy learning tech and built my first website in 2019. My current favorite technologies include Next.js, Tailwindcss, Postgres, Prisma, Stripe and more."
                />
                <SummaryWImage
                    img="https://res.cloudinary.com/crimson-flamingo/image/upload/v1704991935/1104%20profile/suffolk2.webp"
                    title1="Education:"
                    desc="I graduated Suffolk University in May 2019 located in Boston, MA. During my time here, I got to meet diverse and interesting people. Through class and on my own, I developed websites, mobile apps, and designed database structures. I was inspired to learn more about web development after."
                />
            </section>

            <br />

            <section>
                <h2>Work Experience</h2>
                <WorkExperienceItemList />
            </section>
            <br />

            <section>
                <h2>Skills and Abilities</h2>
                <div className="">
                    <SkillItemMap
                        title="Business Skills"
                        skillArray={businessSkills}
                    />
                    <SkillItemMap
                        title="Development Skills"
                        skillArray={webDevelopmentSkills}
                    />
                    <SkillItemMap
                        title="Api/Authentication"
                        skillArray={thirdParties}
                    />
                    <SkillItemMap
                        title="Creativity"
                        skillArray={creativeSkills}
                    />
                    <SkillItemMap title="Tools" skillArray={toolSkills} />
                </div>
            </section>

            <br />
            <section>
                <h2>Passion Projects: </h2>
                <ProjectItemList />
            </section>
            <br />
        </main>
    );
}

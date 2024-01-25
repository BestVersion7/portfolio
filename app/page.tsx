import ProjectItemList from "@/components/ProjectItemList";
import WorkExperienceItemList from "@/components/WorkExperienceItemList";
import { SummaryWImage } from "@/components/SummaryWImage";
import { ContactBtn } from "@/components/ContactBtn";
import { ContactForm } from "@/components/ContactForm";
import { SkillItemMap } from "@/components/SkillItemMap";
import {
    businessSkills,
    webDevelopmentSkills,
    thirdParties,
    creativeSkills,
    toolSkills,
} from "@/components/data/skills";

export default function Home({
    searchParams,
}: {
    searchParams: { modal: "t" | "f" };
}) {
    return (
        <main>
            {/* this is the fixed contact btn */}
            {searchParams.modal === "t" && (
                <div
                    className="relative z-10"
                    aria-labelledby="modal-title"
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                    <div className="fixed inset-0 z-10 grid items-center justify-center text-center m-3">
                        <div className=" bg-blue-100  max-w-md py-2 px-3">
                            <h3
                                className="text-base font-semibold  text-gray-900"
                                id="modal-title"
                            >
                                Contact me
                            </h3>

                            <ContactForm />
                        </div>
                    </div>
                </div>
            )}
            <ContactBtn />

            <h2>My Story</h2>

            <section className=" mt-2 grid gap-3 lg:grid-cols-2 ">
                <SummaryWImage
                    img="https://res.cloudinary.com/crimson-flamingo/image/upload/v1704991935/1104%20profile/me2.png"
                    title1="Summary:"
                    desc="I am a
                    self-taught full stack web developer with a background in
                    finance. In the past 3+ years, I have worked in the
                    accounting departments for startups and large corporations.
                    Besides work, I enjoy building websites and learning new
                    technologies. My current favorite technology stack is
                    Next.js (with amazing SSR load times and SEO), TailwindCSS
                    (for fast and consistent styling pattern), Prisma (for
                    building api logic and connecting with database), Postgres
                    (for their award winning database and I love SQL), and
                    StripeJS (every monetized needs this)."
                />
                <SummaryWImage
                    img="https://res.cloudinary.com/crimson-flamingo/image/upload/v1704991935/1104%20profile/suffolk2.webp"
                    title1="Education:"
                    desc="I graduated Suffolk University in May 2019 located in Boston,
                    MA. During my time here, I got to meet diverse and
                    interesting people. Through class and my own studies, I got
                    hands on experience building mobile apps, consulting,
                    designing database architecture. My favorite class that has
                    shaped my long lusting journey of learning include database
                    classes, intro to programming class, intro to javascript
                    class."
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

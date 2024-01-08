import { Quote } from "@/components/Quote";
import ProjectItemList from "@/components/ProjectItemList";
import WorkExperienceItemList from "@/components/WorkExperienceItemList";
import Image from "next/image";
import suffolk from "@/public/suffolk.png";
import SkillItemList from "@/components/SkillItemList";

export default function Home() {
    return (
        <main className="mx-2 md:mx-5">
            <section>
                <div className="text-center">
                    <p className="mt-3 bg-blue-100 py-2 text-2xl dropshadow">
                        Hi I'm Hunter. Welcome!
                    </p>

                    <h2>My Story</h2>
                    <article>
                        <Image
                            height={150}
                            width={150}
                            src="https://res.cloudinary.com/crimson-flamingo/image/upload/v1603662887/1104%20profile/me.png"
                            alt="hunter"
                            className=""
                        />
                        <p>
                            I am self-taught full stack web developer with a
                            background in finance. In the past 3+ years, I have
                            worked in the accounting departments for startups
                            and large corporations. Besides work, I enjoy
                            building websites and learning new technologies.
                        </p>
                    </article>

                    <article className="section-profile-about">
                        <Image
                            height={150}
                            width={150}
                            src={suffolk}
                            alt="suffolk"
                            className=""
                        />
                        <p>
                            I graduated Suffolk University in May 2019 located
                            in Boston, MA. During my time here, I got to meet
                            diverse and interesting people. Through class and my
                            own studies, I got hands on experience building
                            mobile apps, consulting, designing database
                            architecture, and more!
                        </p>
                    </article>
                </div>

                <section>
                    <h2>Work Experience</h2>
                    <Quote
                        quote="Protons give an atom its identity, electrons its personality."
                        author="Bill Bryson"
                    />
                    <WorkExperienceItemList />
                </section>
            </section>

            <section className="section-skills">
                <h2>Skills and Abilities</h2>
                <Quote
                    quote="The reason I've been able to be so financially successful is that my focus has never, ever for one minute been money"
                    author="Oprah"
                />
                <SkillItemList />
            </section>
            <section className="section-projects">
                <h2>Passion Projects: </h2>
                <Quote
                    quote="The secret to getting ahead is getting started."
                    author="Mark Twain"
                />
                <ProjectItemList />
            </section>
        </main>
    );
}

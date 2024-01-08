import { Quote } from "@/components/Quote";
import ProjectItemList from "@/components/ProjectItemList";
import WorkExperienceItemList from "@/components/WorkExperienceItemList";
import Image from "next/image";
import suffolk from "@/public/suffolk.png";
import SkillItemList from "@/components/SkillItemList";

export default function Home() {
    return (
        <main>
            <section className="section-profile">
                <div className="text-center">
                    <p className=" text-green-900 text-3xl ">
                        Hi I'm Hunter. Welcome to my site!
                    </p>
                    <hr />
                    <h2>My Story</h2>
                    <article className="section-profile-about">
                        <Image
                            height={150}
                            width={150}
                            src="https://res.cloudinary.com/crimson-flamingo/image/upload/v1603662887/1104%20profile/me.png"
                            alt="hunter"
                            className="rounded-full"
                        />
                        <p>
                            I am self-taught full stack web developer with a
                            background in finance. In the past 3+ years, I have
                            worked in the accounting departments for startups
                            and large corporations. Besides work, I enjoy
                            building websites and learning new technologies.
                            Scroll down to see my projects!
                        </p>
                    </article>
                    <article className="section-profile-about">
                        <Image
                            height={150}
                            width={150}
                            src={suffolk}
                            alt="suffolk"
                            className="rounded-full"
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
                <br /> <h2>Skills and Abilities</h2>
                <Quote
                    quote="The reason I've been able to be so financially successful is that my focus has never, ever for one minute been money"
                    author="Oprah"
                />
                <SkillItemList />
                <br />
                <br />
                <br />
            </section>
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
        </main>
    );
}

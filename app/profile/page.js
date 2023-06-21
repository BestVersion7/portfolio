import WorkExperienceItemList from "@/components/WorkExperienceItemList";
import { Quote } from "@/components/Quote";
import Image from "next/image";
import suffolk from "@/public/suffolk.png";

export const metadata = {
    title: "Profile",
};

const ProfilePage = () => {
    return (
        <section className="section-profile">
            <div id="section-profile-id">
                <br /> <h1>Profile</h1>
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
                        worked in the accounting departments for startups and
                        large corporations. Besides work, I enjoy building
                        websites and learning new technologies. Scroll down to
                        see my projects!
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
                        I graduated Suffolk University in May 2019 located in
                        Boston, MA. During my time here, I got to meet diverse
                        and interesting people. Through class and my own
                        studies, I got hands on experience building mobile apps,
                        consulting, designing database architecture, and more!
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
    );
};

export default ProfilePage;

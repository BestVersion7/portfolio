import SkillItemList from "@/components/SkillItemList";
import { Quote } from "@/components/Quote";

export const metadata = {
    title: "Skill",
};

const SkillPage = () => {
    return (
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
    );
};

export default SkillPage;

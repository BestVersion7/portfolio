import Image from "next/image";

type props = {
    img: string;
    title1: string;
    desc: string;
};

export const SummaryWImage = (props: props) => {
    return (
        <article className="flex items-center flex-col sm:flex-row border rounded-xl border-black border-solid bg-blue-50 ">
            <Image
                height={150}
                width={150}
                src={props.img}
                alt="hunter"
                className=" rounded-full border-black border-2 m-2 shadow-md "
            />
            <p className="px-2 py-3">
                <span className="font-semibold text-xl tracking-widest text-orange-600">
                    {props.title1}
                </span>
                <br />
                {props.desc}
            </p>
        </article>
    );
};

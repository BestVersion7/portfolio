import Image from "next/image";

type props = {
    img: string;
    title1: string;
    desc: string;
};

export const SummaryWImage = (props: props) => {
    return (
        <article className=" text-center py-4 grid grid-rows-[160px,100px] overflow-y-scroll border rounded-xl border-black border-solid bg-blue-50">
            <div>
                <Image
                    height={150}
                    width={150}
                    src={props.img}
                    alt="hunter"
                    className="m-auto rounded-full border-black border-2  shadow-md "
                />
            </div>
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

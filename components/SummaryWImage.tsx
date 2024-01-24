import Image from "next/image";

type props = {
    img: string;
    title1: string;
    desc: string;
};

export const SummaryWImage = (props: props) => {
    // md:grid md:grid-cols-[auto,_1fr] md:gap-2 border border-black px-2
    // <article className=" text-center py-4 grid grid-rows-[160px,100px] overflow-y-scroll border rounded-xl border-black border-solid bg-blue-50">
    return (
        <article className="flex flex-col md:grid md:grid-cols-[auto,_1fr]">
            <div className="relative m-auto w-32 h-32">
                <Image
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    // height={150}
                    // width={150}
                    fill
                    priority={true}
                    src={props.img}
                    alt="hunter"
                    className="object-contain  rounded-full border-black border-2  shadow-md "
                />
            </div>
            <p className="px-2 py-3">
                <span className="font-semibold text-xl tracking-widest text-orange-600">
                    {props.title1}
                </span>
                <span className="text-sm">{props.desc}</span>
            </p>
        </article>
    );
};

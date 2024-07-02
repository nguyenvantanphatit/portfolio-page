import React from 'react'
export type Projects = {
    id: number;
    image: string;
    label: string;
};
const projects: Projects[] = [
    {
        id: 1,
        image: '/images/skill/nextjs.svg',
        label: "NextJs"
    },
    {
        id: 2,
        image: '/images/skill/react.svg',
        label: "ReactJs"
    },
    {
        id: 3,
        image: '/images/skill/javascript.svg',
        label: "Javascript"
    },
    {
        id: 4,
        image: '/images/skill/typescript.svg',
        label: "Typecript"
    },
    {
        id: 5,
        image: '/images/skill/html.svg',
        label: "Html"
    },
]
export default function Projects() {
    return (
        <>
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-4 mx-auto container">
               {projects.map((item) => (
                <div
                    key={item.id}
                    className="animate_top group relative rounded-lg border border-stroke bg-white p-8 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none"
                >
                    <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
                        Phổ Biến
                    </div>
                    <h3 className="mb-7.5 text-2xl font-bold text-black dark:text-white">
                        {item.label} Platform
                    </h3>
                    <div className="border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                        <img src={item.image} alt={`Brand ${item.id}`} />
                    </div>
                </div>
            ))}
            </div>
        </>
    )
}

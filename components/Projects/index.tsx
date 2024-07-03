import React from 'react'
export type Projects = {
    id: number;
    image: string;
    label: string;
};
const projects = [
    {
        id: 1,
        image: '/images/skill/nextjs.svg',
        label: "Echo Medi Website",
        time: "02/2024 - 2024",
        tech: "NextJs, NodeJs, Mysql, Tailwind CSS",
        role: "FE, BE",
        sizeMember: 3
    },
    {
        id: 2,
        image: '/images/skill/react.svg',
        label: "Luna Project",
        time: "11/2023 - 1/2024",
        tech: "ReactJs, NodeJs, Mysql, Antd",
        role: "FE, BE",
        sizeMember: 6
    },
    {
        id: 3,
        image: '/images/skill/javascript.svg',
        label: "Dohbo Janpan",
        time: "08/2023 - 10/2023",
        tech: "Angular, Antd",
        role: "FE",
        sizeMember: 6
    },
    {
        id: 4,
        image: '/images/skill/typescript.svg',
        label: "Viet Japan Digital Connect Platform",
        time: "06/2023 - 07/2023",
        tech: "ReactJs, NodeJs, Mysql, Antd",
        role: "FE, BE",
        sizeMember: 4

    },
    {
        id: 5,
        image: '/images/skill/html.svg',
        label: "Profile",
        time: "07/2024",
        role: "FE",
        sizeMember: 1
    },
]
export default function Projects() {
    return (
        <>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className="grid grid-cols-1 gap-4 xl:grid-cols-4">
                    {projects.map((item) => (
                        <div
                            key={item.id}
                            className="animate_top group relative rounded-lg border border-stroke bg-white p-8 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none"
                        >
                            <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
                                Phổ Biến
                            </div>
                            <h3 className="mb-7.5 text-2xl font-bold text-black dark:text-white">
                                {item.label}
                            </h3>
                            <div className="border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                                <img src={item.image} alt={`Brand ${item.id}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

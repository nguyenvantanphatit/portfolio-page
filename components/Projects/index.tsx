import React from 'react'
export type Projects = {
    id: number;
    image: string;
    label: string;
    time: string;
    tech: string;
    role: string;
    live_demo: string;
    desc: string;
    sizeMember: number;
};
const projects: Projects[] = [
    {
        id: 1,
        image: '/images/skill/nextjs.svg',
        label: "Echo Medi Website",
        time: "02/2024 - 2024",
        tech: "NextJs, NodeJs, Mysql, Tailwind CSS",
        role: "FE, BE",
        live_demo: "https://echomedi.com",
        desc: "",
        sizeMember: 3

    },
    {
        id: 1,
        image: '/images/skill/nextjs.svg',
        label: "Echo Medi Blog",
        time: "02/2024 - 2024",
        tech: "NextJs, NodeJs, Mysql, Tailwind CSS",
        role: "FE, BE",
        live_demo: "https://suckhoe.echomedi.com",
        desc: "",
        sizeMember: 1

    },
    {
        id: 1,
        image: '/images/skill/nextjs.svg',
        label: "Wheel Of Fortune",
        time: "02/2024 - 2024",
        tech: "NextJs, Tailwind CSS",
        role: "FE, BE",
        live_demo: "https://luckyechomedi.vercel.app",
        desc: "",
        sizeMember: 1

    },
    {
        id: 2,
        image: '/images/skill/react.svg',
        label: "Luna Project",
        time: "11/2023 - 1/2024",
        tech: "ReactJs, NodeJs, Mysql, Antd",
        role: "FE, BE",
        live_demo: "",
        desc: "",
        sizeMember: 6
    },
    {
        id: 3,
        image: '/images/skill/javascript.svg',
        label: "Dohbo Janpan",
        time: "08/2023 - 10/2023",
        tech: "Angular, Antd",
        role: "FE",
        live_demo: "",
        desc: "",
        sizeMember: 6
    },
    {
        id: 4,
        image: '/images/skill/typescript.svg',
        label: "VJP Connect Platform",
        time: "06/2023 - 07/2023",
        tech: "ReactJs, NodeJs, Mysql, Antd",
        role: "FE, BE",
        live_demo: "https://www.vjp-connect.com",
        desc: "",
        sizeMember: 4

    },
    {
        id: 5,
        image: '/images/skill/html.svg',
        label: "Portfolio Page",
        time: "07/2024",
        tech: "NextJs, Tailwind CSS",
        role: "FE",
        live_demo: "https://tanphat-profile.netlify.app",
        desc: "",
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
                            className="animate_top group relative rounded-lg border border-stroke bg-white shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none"
                        >
                            <div className="block overflow-hidden">
                                <img src="https://pagedone.io/asset/uploads/1695365240.png" alt="Card image" />
                            </div>
                            <div className="p-4">
                                <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500">{item.label}</h4>
                                <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mb-5">{item.tech}</p>
                                <div className='space-x-4'>
                                    {item.live_demo && (
                                        <button className="bg-indigo-600 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold">
                                            <a href={item.live_demo}>
                                                Live Demo
                                            </a>
                                        </button>
                                    )}
                                    <button className="bg-indigo-600 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold">Read More</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

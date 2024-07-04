"use client";
import { motion } from "framer-motion";
import React, { useState } from 'react'
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
        image: '/images/projects/echomedi.png',
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
        image: '/images/projects/echomedi-blog.png',
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
        image: '/images/projects/echomedi.png',
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
        image: '/images/projects/echomedi.png',
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
        image: '/images/projects/dohbo.png',
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
        image: '/images/projects/vjp-connect-platform.png',
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
        image: '/images/projects/echomedi.png',
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
    const detectMob = () => {
        const toMatch = [
            /Android/i,
            /webOS/i,
            /iPhone/i,
            /iPad/i,
            /iPod/i,
            /BlackBerry/i,
            /Windows Phone/i
        ];
    
        return toMatch.some((toMatchItem) => {
            return navigator.userAgent.match(toMatchItem);
        });
    }
    const [showLoadAllButton, setShowLoadAllButton] = useState(true);
    const [showHideButton, setShowHideButton] = useState(false);
    const [cnt, setCnt] = useState(detectMob() ? 2 : 4);
    const handleLoadAll = () => {
        setCnt(-1);
        setShowLoadAllButton(false);
        setShowHideButton(true);
    };

    const handleHide = () => {
        setCnt(detectMob() ? 2 : 8);
        setShowLoadAllButton(true);
        setShowHideButton(false);
    };
    return (
        <>
            <div className='bg-slate-50 pt-10' id="projects">
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    <motion.div
                        variants={{
                            hidden: {
                                opacity: 0,
                                x: 20,
                            },

                            visible: {
                                opacity: 1,
                                x: 0,
                            },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 1, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="animate_right w-full"
                    >
                        <div className="grid grid-cols-1 gap-6 xl:grid-cols-4">
                            {projects.slice(0, cnt == -1 ? projects.length : cnt).map((item) => (
                                <div
                                    key={item.id}
                                    className="animate_top group relative rounded-2xl border border-stroke bg-white shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none"
                                >
                                    <div className="block overflow-hidden h-1/2  rounded-t-2xl">
                                        <img src={item.image} alt="Card image" className='object-cover' />
                                    </div>
                                    <div className="p-4">
                                        <h4 className="text-base font-semibold text-gray-900 mb-[2px] capitalize transition-all duration-500">{item.label}</h4>
                                        <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 pb-2">{item.tech}</p>
                                        <div className='flex items-center justify-between mb-8'>
                                            {item.live_demo && (
                                                <button className="bg-white rounded-full py-2 px-5 text-xs text-[#4F46FF] font-semibold border border-[#4F46FF] hover:bg-indigo-700 hover:text-white">
                                                    <a href={item.live_demo}>
                                                        Live Demo
                                                    </a>
                                                </button>
                                            )}
                                            <button className="bg-indigo-600 hover:bg-indigo-700 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold">Read More</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {showLoadAllButton && cnt !== projects.length && cnt !== -1 &&
                            <div className="flex justify-center items-center mt-4 ">
                                <button
                                    type="button"
                                    onClick={handleLoadAll}
                                    className="rounded-2xl mt-2 border border-gray-200 bg-white px-4 py-2 group transition-all duration-500 transform hover:scale-105"
                                >
                                    Load All
                                </button>
                            </div>
                        }
                        {showHideButton &&
                            <div className="flex justify-center mt-4">
                                <button
                                    type="button"
                                    onClick={handleHide}
                                    className="rounded-2xl mt-2 border border-gray-200 bg-white px-4 py-2 group transition-all duration-500 transform hover:scale-105"
                                >
                                    Hide
                                </button>
                            </div>
                        }
                    </motion.div>
                </div>
            </div>
        </>
    )
}

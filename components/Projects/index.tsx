"use client";
import { motion } from "framer-motion";
import React, { useState } from 'react'
import Modal from "../Modal/Modal";
import { Project } from "@/types/projects";
const projects: Project[] = [
    {
        id: 1,
        image: '/images/projects/echomedi.png',
        label: "Echo Medi Website",
        time: "02/2024 - 2024",
        tech: "NextJs, NodeJs, Mysql, Tailwind CSS",
        role: "FE, BE",
        live_demo: "https://echomedi.com",
        desc: [
            "Implemented Next.js and Tailwind CSS to develop an efficient and responsive UI that enhances the user experience for scheduling appointments, viewing test results, and purchasing products online.",
            "Integrated VNPay and Momo for online payments to ensure a fast and secure payment process, providing reliable transactions for users.",
            "Utilized FPT SMS Brandname to send OTPs for user authentication, improving security and user experience."
        ],
        sizeMember: 2

    },
    {
        id: 1,
        image: '/images/projects/echomedi-blog.png',
        label: "Echo Medi Blog",
        time: "02/2024 - 2024",
        tech: "NextJs, NodeJs, Mysql, Tailwind CSS",
        role: "FE, BE",
        live_demo: "https://suckhoe.echomedi.com",
        desc: [
            "A blog dedicated to providing health care information and updates through engaging articles and resources.",
        ],
        sizeMember: 1

    },
    // {
    //     id: 2,
    //     image: '/images/projects/luckyechomedi.png',
    //     label: "Wheel Of Fortune",
    //     time: "02/2024 - 2024",
    //     tech: "NextJs, Tailwind CSS",
    //     role: "FE, BE",
    //     live_demo: "https://luckyechomedi.vercel.app",
    //     desc: [
    //         "A blog dedicated to providing health care information and updates through engaging articles and resources.",
    //     ],
    //     sizeMember: 1

    // },
    {
        id: 3,
        image: '/images/projects/echomedi.png',
        label: "Luna Project",
        time: "11/2023 - 1/2024",
        tech: "ReactJs, NodeJs, Mysql, Antd",
        role: "FE, BE",
        live_demo: "",
        desc: [
            "Using ReactJS and Ant Design (Antd) for the front end to build a user-friendly interface that manages client information, staff, products, quotations, purchase orders, production, and payments. The backend is powered by Node.js for handling API requests and MySQL for storing and managing all relevant data.",
            "Leveraging socket.io to enable real-time tracking of quotations, monitor production progress, and notify purchase orders (PO) upon completion to facilitate timely delivery.",
            "Implementing drag-and-drop technology for creating products and tasks, and enabling real-time chat between staff and purchase orders (PO) to enhance collaboration and efficiency"
        ],
        sizeMember: 6
    },
    {
        id: 4,
        image: '/images/projects/dohbo.png',
        label: "Dohbo Janpan",
        time: "08/2023 - 10/2023",
        tech: "Angular, Antd",
        role: "FE",
        live_demo: "",
        desc: [
            "Use ZaloPay to process gift code promotions for customers, achieving seamless and efficient handling of promotional offers.",
            "Using Angular to fix layout issues, implement hide and show features for history, and manage lottery features and forms, achieving an improved user experience and enhanced functionality",
        ],
        sizeMember: 6
    },
    {
        id: 5,
        image: '/images/projects/vjp-connect-platform.png',
        label: "VJP Connect Platform",
        time: "06/2023 - 07/2023",
        tech: "ReactJs, NodeJs, Mysql, Antd",
        role: "FE, BE",
        live_demo: "https://www.vjp-connect.com",
        desc: [
            "A platform specializing in promoting businesses, finding partners, and connecting experts between Vietnam and Japan across various fields using multilingual support with i18n. Utilizing ReactJS for the frontend, Node.js for the backend, MySQL for the database, and Ant Design for UI components.",
        ],
        sizeMember: 4
    },
    {
        id: 6,
        image: '/images/projects/portfoliopage.png',
        label: "Portfolio Page",
        time: "07/2024 - Present",
        tech: "NextJs, Tailwind CSS",
        role: "FE",
        live_demo: "https://portfolio-page-it.vercel.app",
        desc: [
            "Using Next.js, I built a responsive portfolio website to showcase my projects and skills.",
        ],
        sizeMember: 1
    },
]
const Projects = () => {
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
    const [showModal, setshowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const handleReadMore = (project: Project) => {
        setSelectedProject(project);
        setshowModal(true);
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
                        <div className="mb-8 text-center">
                            <h1 className="text-4xl text-gray-900 text-center font-bold">Your Projects</h1>
                        </div>
                        <div className="grid grid-cols-1 gap-6 xl:grid-cols-4">
                            {projects.slice(0, cnt == -1 ? projects.length : cnt).map((item) => (
                                <div
                                    key={item.id}
                                    className="animate_top group relative rounded-2xl border border-stroke bg-white shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none"
                                >
                                    <div className="block overflow-hidden rounded-t-2xl">
                                        <img src={item.image} alt="Card image" className='object-cover' />
                                    </div>
                                    <div className="p-4">
                                        <h4 className="text-base font-semibold text-gray-900 mb-[2px] capitalize transition-all duration-500">{item.label}</h4>
                                        <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 pb-2">{item.tech}</p>
                                        <div className='flex items-center justify-between'>
                                            {item.live_demo && (
                                                <button className="bg-white rounded-full py-2 px-5 text-xs text-[#4F46FF] font-semibold border border-[#4F46FF] hover:bg-indigo-700 hover:text-white">
                                                    <a href={item.live_demo}>
                                                        Live Demo
                                                    </a>
                                                </button>
                                            )}
                                            <button onClick={() => handleReadMore(item)} className="bg-indigo-600 hover:bg-indigo-700 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold">Read More</button>
                                            {selectedProject && (
                                                <Modal
                                                    showCloseButton
                                                    visibleModal={showModal}
                                                    wrapperClassName="!w-[340px] md:!w-[1000px]"
                                                    contentClassName="!min-h-[0]"
                                                    onClose={() => setshowModal(false)}
                                                >
                                                    <div>
                                                        <p className="text-2xl text-center mb-4 font-bold mt-2 text-[#4F46FF]">{selectedProject.label}</p>
                                                        <div className="text-lg text-start px-4 w-[320px] md:w-full mt-4">
                                                            <p className="font-semibold">Duration: {selectedProject.time}</p>
                                                            <p className="font-semibold">Team size: {selectedProject.sizeMember} members</p>
                                                            <p className="font-semibold">Role: {selectedProject.role}</p>
                                                        </div>
                                                        <div className="text-lg text-start px-4 w-[320px] md:w-full">
                                                            <p className="font-semibold">Technologies Used: {selectedProject.tech}</p>
                                                        </div>
                                                        <div className="text-lg text-start px-4 w-[320px] md:w-full">
                                                            <p className="font-semibold">Project Description:</p>
                                                            <ul className="list-disc list-inside">
                                                                {selectedProject.desc.map((item, index) => (
                                                                    <li className="text-justify" key={index}>{item}</li>
                                                                ))}
                                                            </ul>
                                                        </div>

                                                        
                                                    </div>
                                                </Modal>
                                            )}
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
export default Projects;
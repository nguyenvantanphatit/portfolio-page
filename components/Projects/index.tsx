"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react';
import Modal from "../Modal/Modal";
import { Project } from "@/types/projects";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css';
import 'swiper/css/pagination';
import { detectMob } from "@/utils/detectMob";
import { dataProjects } from "@/utils/data";
const Projects: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        setIsMobile(detectMob());
    }, []);
    const handleReadMore = (project: Project): void => {
        setSelectedProject(project);
        setShowModal(true);
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
                        {isMobile ? (
                            <Swiper
                                slidesPerView={1.3}
                                spaceBetween={20}
                                pagination={{ clickable: true }}
                                modules={[Pagination]}
                                className="mySwiper slide"
                            >
                                {dataProjects.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div
                                            className="animate_top group relative rounded-2xl border border-stroke bg-white shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none"
                                        >
                                            <div className="block overflow-hidden rounded-t-2xl">
                                                <img src={item.image} alt="Card image" className='object-cover w-full' />
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
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        ) : (
                            <div className="grid grid-cols-1 gap-6 xl:grid-cols-4">
                                {dataProjects.map((item) => (
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
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {selectedProject && (
                            <Modal
                                showCloseButton
                                visibleModal={showModal}
                                wrapperClassName="!w-[340px] md:!w-[1000px]"
                                contentClassName="!min-h-[0]"
                                onClose={() => setShowModal(false)}
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
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Projects;

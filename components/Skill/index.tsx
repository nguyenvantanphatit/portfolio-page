"use client";
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import { detectMob } from '@/utils/detectMob';
import { dataBrand } from '@/utils/data';


export default function Skill() {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        setIsMobile(detectMob());
    }, []);
    const transformData = (contributions) => {
        const today = new Date();
        const threeMonthsAgo = new Date(today.setMonth(today.getMonth() - 8));

        return contributions.filter(day => {
            const date = new Date(day.date);
            return date >= threeMonthsAgo;
        });
    };
    const transformDataMobile = (contributions) => {
        const today = new Date();
        const threeMonthsAgo = new Date(today.setMonth(today.getMonth() - 3));
        return contributions.filter(day => {
            const date = new Date(day.date);
            return date >= threeMonthsAgo;
        });
    };
    return (
        <>
            <div className='flex justify-between flex-col md:flex-row items-center bg-slate-50 py-10'>
                <div className='w-full md:w-1/2'>
                    <motion.div
                        variants={{
                            hidden: {
                                opacity: 0,
                                x: -20,
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
                        className="animate_left w-full"
                    >
                        <div className="my-10 text-center" id='skill'>
                            <h1 className="text-4xl text-gray-900 text-center font-bold">Your Skills</h1>
                        </div>
                    </motion.div>
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
                        <>
                            {isMobile ? (
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={5}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Pagination]}
                                    className="mySwiper slide"
                                >
                                    {
                                        dataBrand.map((item, index) => (
                                            <SwiperSlide >
                                                <a href="#">
                                                    <img src={item.image} alt={`Brand ${item.id}`} className='h-10 px-2 rounded-md' />
                                                </a>
                                                <h5 className="text-center py-2 text-gray-900 text-base font-semibold leading-relaxed ">{item.label}</h5>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            ) : (
                                <div className="grid grid-cols-3 gap-4 xl:grid-cols-5  px-4 sm:px-8">

                                    {dataBrand.map((item) => (
                                        <div key={item.id} className='pt-2 w-full rounded-2xl border border-gray-200 hover:border-indigo-600 hover:bg-blue-50 transition-all duration-700 ease-in-out flex-col justify-start items-center inline-flex'>
                                            <a href="#">
                                                <img src={item.image} alt={`Brand ${item.id}`} className='h-10 px-2 rounded-md' />
                                            </a>
                                            <h5 className="text-center py-2 text-gray-900 text-base font-semibold leading-relaxed ">{item.label}</h5>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>

                    </motion.div>
                </div>
                <div className="system w-full md:w-3/5 mt-12">
                    <div className="system__orbit system__orbit--sun">
                        <img src="/images/skill/nextjs.svg" alt="Sun" className="system__icon system__icon--sun" />
                    </div>
                    <div className="system__orbit system__orbit--mercury">
                        <div className="system__planet system__planet--mercury">
                            <img src="/images/skill/react.svg" alt="Mercury" />
                        </div>
                    </div>
                    <div className="system__orbit system__orbit--venus">
                        <div className="system__planet system__planet--venus">
                            <img src="/images/skill/typescript.svg" alt="Venus" />
                        </div>
                    </div>
                    <div className="system__orbit system__orbit--earth">
                        <div className="system__planet system__planet--earth">
                            <img src="/images/skill/javascript.svg" alt="Earth" />
                        </div>
                    </div>
                    <div className="system__orbit system__orbit--mars">
                        <div className="system__planet system__planet--mars">
                            <img src="/images/skill/angular.svg" alt="Mars" />
                        </div>
                    </div>
                    <div className="system__orbit system__orbit--jupiter">
                        <div className="system__planet system__planet--jupiter">
                            <img src="/images/skill/tailwind-css.svg" alt="Jupiter" />
                        </div>
                    </div>
                </div>

            </div>
            <section className="w-full xl:py-24 lg:py-20 py-12 bg-slate-50 border-b border-gray-300">
                <div className="w-full max-w-7xl px-6 lg:px-8 mx-auto  hidden md:flex">
                    <GitHubCalendar
                        username="nguyenvantanphatit"
                        blockSize={25}
                        blockMargin={10}
                        fontSize={16}
                        transformData={transformData}
                    />
                </div>
                <div className="w-full max-w-7xl px-6 lg:px-8 mx-auto flex md:hidden">
                    <GitHubCalendar
                        username="nguyenvantanphatit"
                        blockSize={25}
                        blockMargin={10}
                        fontSize={16}
                        transformData={transformDataMobile}
                    />
                </div>
            </section>
        </>
    )
}

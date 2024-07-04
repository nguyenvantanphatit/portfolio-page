"use client";
import React from 'react'
import { motion } from "framer-motion";
export type DataBrand = {
    id: number;
    image: string;
    label: string;
};
const dataBrand: DataBrand[] = [
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
        image: '/images/skill/angular.svg',
        label: "Angular"
    },
    {
        id: 4,
        image: '/images/skill/nodejs.svg',
        label: "NodeJs"
    },
    {
        id: 5,
        image: '/images/skill/typescript.svg',
        label: "Typecript"
    },
    {
        id: 6,
        image: '/images/skill/javascript.svg',
        label: "Javascript"
    },

    {
        id: 7,
        image: '/images/skill/html.svg',
        label: "Html"
    },
    {
        id: 8,
        image: '/images/skill/css.svg',
        label: "Css"
    },
    {
        id: 9,
        image: '/images/skill/sass.svg',
        label: "Sass"
    },
    {
        id: 10,
        image: '/images/skill/antd.svg',
        label: "Ant Design"
    },
    {
        id: 11,
        image: '/images/skill/tailwind-css.svg',
        label: "Tailwind Css"
    },
    {
        id: 12,
        image: '/images/skill/redux.svg',
        label: "Redux"
    },


]
export default function Demo() {
    return (
        <>
            <div className='flex justify-between flex-col md:flex-row items-center bg-slate-50 py-10'>
                <div className="system w-full md:w-1/2">
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
                            <img src="/images/skill/angular.svg" alt="Venus" />
                        </div>
                    </div>
                    <div className="system__orbit system__orbit--earth">
                        <div className="system__planet system__planet--earth">
                            <img src="/images/skill/nodejs.svg" alt="Earth" />
                        </div>
                    </div>
                    <div className="system__orbit system__orbit--mars">
                        <div className="system__planet system__planet--mars">
                            <img src="/images/skill/typescript.svg" alt="Mars" />
                        </div>
                    </div>
                    <div className="system__orbit system__orbit--jupiter">
                        <div className="system__planet system__planet--jupiter">
                            <img src="/images/skill/javascript.svg" alt="Jupiter" />
                        </div>
                    </div>
                </div>
                <div>
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
                    <div className="my-10 text-center">
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
                    <div className="grid grid-cols-3 gap-4 xl:grid-cols-6  px-4 sm:px-6 lg:px-8">
                        {dataBrand.map((item) => (
                            <div key={item.id} className='pt-2 w-full rounded-2xl border border-gray-200 hover:border-indigo-600 hover:bg-blue-50 transition-all duration-700 ease-in-out flex-col justify-start items-center inline-flex'>
                                <a href="#">
                                    <img src={item.image} alt={`Brand ${item.id}`} className='h-10 px-2 rounded-md' />
                                </a>
                                <h5 className="text-center py-2 text-gray-900 text-base font-semibold leading-relaxed ">{item.label}</h5>
                            </div>
                        ))}
                    </div>
                </motion.div>
                </div>
            </div>
        </>
    )
}

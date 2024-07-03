"use client";
import { motion } from "framer-motion";
import React from 'react'

export default function Projects() {
    return (
        <>
            <div className='bg-slate-50'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
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
                        <div className="text-center py-8">
                            <h1 className="text-4xl text-gray-900 text-center font-bold">About Me</h1>
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
                        <div className="grid grid-cols-1 gap-6 xl:grid-cols-4">
                            Helo
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

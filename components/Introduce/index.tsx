"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
export default function Introduce() {
    const colors = [
        '#ffad00',
        '#01c5c4',
        '#ffa5a5',
        '#d789d7',
        '#f09ae9',
        '#e7305b',
        '#303960'
    ];
    const [colorIndex, setColorIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        document.documentElement.style.setProperty('--golden-glow', colors[colorIndex]);
    }, [colorIndex]);
    return (
        <>
            <div className='bg-slate-50'>
                <div className='w-full max-w-7xl px-5 lg:px-8 mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10'>
                    <div className="wrapper">
                        <div className="rings">
                            <div className="ring ring1">
                                <div className="ring ring2">
                                    <div className="ring ring3">
                                        <div className="ring ring4"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-manrope font-bold text-4xl text-gray-900 mb-1 max-sm:text-center" id='introduce'>Introduce</h3>
                        <p className="font-normal text-base leading-7 text-gray-500  max-sm:text-center">Welcome to my space! My name is  Nguyen Van Tan Phat.
                            <br className="hidden sm:block"></br>
                            I'm a Front-End Developer with many years of experience developing web applications using modern technologies such as React.js, Next.js, and Angular. I also have extensive knowledge of Node.js, which helps me build comprehensive and optimized web applications. I have worked on real projects such as landing pages, e-commerce, news, and dashboards.
                        </p>
                        <div className='mt-4 items-center justify-center md:justify-start hidden md:flex'>
                            <a href="/pdf/CV_Nguyen_Van_Tan_Phat_Developer.pdf">
                                <button className='button-dowload-cv rounded-full '>
                                    Dowload CV
                                </button>
                            </a>
                        </div>
                        <div className='mt-4 items-center justify-center md:justify-start flex md:hidden'>
                            <a href="/pdf/CV_Nguyen_Van_Tan_Phat_Developer.pdf">
                                <button className='button-dowload-cv-mobile rounded-full '>
                                    Dowload CV
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

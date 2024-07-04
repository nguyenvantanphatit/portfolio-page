"use client";
import React from 'react'
export default function About() {
    return (
        <>
            <div className="header">
                <svg className="header__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1337.97 684.43">
                    <path className="header__shape bigSquare" fill="#16d5d1" d="M546.519 349.271l86.383-56.098 56.097 86.383-86.383 56.098z" />
                    <path className="header__shape triangle" fill="none" stroke="#ff4676" stroke-width="8" d="M372.15 462.17L321 434.58l-4.88 56.16z" />
                    <circle className="header__shape bigCircle" fill="#ff4676" cx="1076.52" cy="262.17" r="59" />
                    <path className="header__shape littleSquare" fill="#ffe430" d="M285.523 262.61l12.372-53.59 53.59 12.372-12.372 53.59z" />
                    <circle className="header__shape hoop" fill="none" stroke="#ffe430" stroke-width="13" cx="905.52" cy="447.17" r="45" />
                    <circle className="header__shape littleCircle" fill="#0f1c70" cx="1036.52" cy="203.17" r="27" />
                </svg>
                <h3 className="header__title">Front End Develop</h3>
            </div>
            <div>
            <section className="w-full xl:py-24 lg:py-20 py-12 bg-slate-50 border-b border-gray-300">
                <div className="w-full max-w-7xl px-6 lg:px-8 mx-auto items-center flex justify-center">
                    <div className="system">
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
                        {/* <div className="system__orbit system__orbit--saturn">
                            <div className="system__planet system__planet--saturn">
                                <img src="/images/skill/html.svg" alt="Saturn" />
                            </div>
                        </div>
                        <div className="system__orbit system__orbit--uranus">
                            <div className="system__planet system__planet--uranus">
                                <img src="/images/skill/css.svg" alt="Uranus" />
                            </div>
                        </div>
                        <div className="system__orbit system__orbit--neptune">
                            <div className="system__planet system__planet--neptune">
                                <img src="/images/skill/sass.svg" alt="Neptune" />
                            </div>
                        </div>
                        <div className="system__orbit system__orbit--pluto">
                            <div className="system__planet system__planet--pluto">
                                <img src="/images/skill/tailwind-css.svg" alt="Pluto" />
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
            </div>
        </>
    )
}

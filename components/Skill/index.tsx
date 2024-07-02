import React from 'react'
const dataBrand = [
    {
        id: 1,
        image: '/images/skill/nextjs.svg',
    },
    {
        id: 2,
        image: '/images/skill/react.svg',
    },
    {
        id: 3,
        image: '/images/skill/javascript.svg',
    },
    {
        id: 4,
        image: '/images/skill/typescript.svg',
    },
    {
        id: 5,
        image: '/images/skill/html.svg',
    },
    {
        id: 6,
        image: '/images/skill/css.svg',
    },
    {
        id: 7,
        image: '/images/skill/sass.svg',
    },
    {
        id: 8,
        image: '/images/skill/antd.svg',
    },
    {
        id: 9,
        image: '/images/skill/tailwind-css.svg',
    },
    {
        id: 10,
        image: '/images/skill/redux.svg',
    },
    {
        id: 11,
        image: '/images/skill/nodejs.svg',
    },
    {
        id: 12,
        image: '/images/skill/angular.svg',
    },
    {
        id: 13,
        image: '/images/skill/nodejs.svg',
    },
    {
        id: 14,
        image: '/images/skill/nodejs.svg',
    }
]
export default function Skill() {
    return (
        <section className="py-24 ">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-20 text-center">
                    <span className="text-indigo-600 text-center font-medium mb-4 block">OUR PARTNERS</span>
                    <h1 className="text-4xl text-gray-900 text-center font-bold">We work with the best partners</h1>
                </div>
                <div className="grid grid-cols-3 gap-8 xl:grid-cols-6">
                    {dataBrand.map((item) => (
                        <a
                            key={item.id}
                            href="#"
                            className="flex justify-center items-center border border-solid border-gray-200 shadow-sm h-16 rounded-2xl"
                        >
                            <img src={item.image} alt={`Brand ${item.id}`} className='p-2'/>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

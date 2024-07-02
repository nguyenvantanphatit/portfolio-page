import React from 'react'
const dataBrand = [
    {
        id: 1,
        image: '/images/brand/brand-07.svg',
    },
    {
        id: 2,
        image: '/images/brand/brand-08.svg',
    },
    {
        id: 3,
        image: '/images/brand/brand-09.svg',
    },
    {
        id: 4,
        image: '/images/brand/brand-10.svg',
    },
    {
        id: 5,
        image: '/images/brand/brand-11.svg',
    },
    {
        id: 6,
        image: '/images/brand/brand-12.svg',
    },
    {
        id: 7,
        image: '/images/brand/brand-07.svg',
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
                            className="flex justify-center items-center border border-solid border-gray-200 shadow-sm h-24 rounded-2xl"
                        >
                            <img src={item.image} alt={`Brand ${item.id}`} />
                        </a>
                    ))}
                </div>
            </div>
        </section>

    )
}

import React from 'react'
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
        image: '/images/skill/javascript.svg',
        label: "Javascript"
    },
    {
        id: 4,
        image: '/images/skill/typescript.svg',
        label: "Typecript"
    },
    {
        id: 5,
        image: '/images/skill/html.svg',
        label: "Html"
    },
    {
        id: 6,
        image: '/images/skill/css.svg',
        label: "Css"
    },
    {
        id: 7,
        image: '/images/skill/sass.svg',
        label: "Sass"
    },
    {
        id: 8,
        image: '/images/skill/antd.svg',
        label: "Ant Design"
    },
    {
        id: 9,
        image: '/images/skill/tailwind-css.svg',
        label: "Tailwind Css"
    },
    {
        id: 10,
        image: '/images/skill/redux.svg',
        label: "Redux"
    },
    {
        id: 11,
        image: '/images/skill/nodejs.svg',
        label: "NodeJs"
    },
    {
        id: 12,
        image: '/images/skill/angular.svg',
        label: "Angular"
    },
    {
        id: 13,
        image: '/images/skill/nodejs.svg',
        label: "NextJs"
    },
    {
        id: 14,
        image: '/images/skill/nodejs.svg',
        label: "NextJs"
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
                        <div key={item.id} className='w-full p-6 rounded-2xl border border-gray-200 hover:border-indigo-600 hover:bg-blue-50 transition-all duration-700 ease-in-out flex-col justify-start items-center gap-3 inline-flex'>
                            <a

                                href="#"
                            >
                                <img src={item.image} alt={`Brand ${item.id}`} />
                            </a>
                            <h5 className="text-center text-gray-900 text-base font-semibold leading-relaxed">Slack</h5>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

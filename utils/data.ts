import { Project } from "@/types/projects";
import { DataSkill } from "@/types/skill";

export const dataProjects: Project[] = [
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
        id: 2, // sửa id trùng lặp
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
        sizeMember: 3
    },
    {
        id: 4,
        image: '/images/projects/dohbo.png',
        label: "Dohbo Japan",
        time: "08/2023 - 10/2023",
        tech: "Angular, Antd",
        role: "FE",
        live_demo: "",
        desc: [
            "Use ZaloPay to process gift code promotions for customers, achieving seamless and efficient handling of promotional offers.",
            "Using Angular to fix layout issues, implement hide and show features for history, and manage lottery features and forms, achieving an improved user experience and enhanced functionality",
        ],
        sizeMember: 4
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
        sizeMember: 2
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
];


export const dataBrand: DataSkill[] = [
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
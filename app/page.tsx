import dynamic from 'next/dynamic';
import { Metadata } from "next";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Skill from "@/components/Skill";
import Introduce from '@/components/Introduce';
const Projects = dynamic(() => import('@/components/Projects'), { ssr: false });
export const metadata: Metadata = {
  title: "Tấn Phát",
  description: "Tấn Phát Software Engineer",
  keywords: "Tấn Phát Software Engineer",
  authors: [{ name: "Tấn Phát Team" }],
  openGraph: {
    title: "Tấn Phát",
    description: "Tấn Phát Software Engineer",
    url: "https://echomedi-page.vercel.app",
    type: "website",
    images: [
      {
        url: 'https://res.cloudinary.com/dq49gyq1g/image/upload/v1720057490/aqfvydnqjwbzhoniyio9.png',
        width: 850,
        height: 650,
        alt: 'Tấn Phát Software Engineer'
      }
    ]
  },
};


export default function Home() {
  return (
    <main>
      <Introduce />
      <Skill />
      <About />
      <Projects /> 
      <Contact />
    </main>
  );
}

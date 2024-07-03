import { Metadata } from "next";
import Skill from "@/components/Skill";
import Projects from "@/components/Projects"
import Contact from "@/components/Contact";
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
        url: '/images/banner/profile.png',
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
      <Skill />
      <Projects /> 
      <Contact />
    </main>
  );
}

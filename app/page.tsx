import { Metadata } from "next";
import Skill from "@/components/Skill";
import Projects from "@/components/Projects"
import Contact from "@/components/Contact";
export const metadata: Metadata = {
  title: "ECHO MEDI Bác Sĩ Gia Đình",
  description: "ECHO MEDI Bác Sĩ Gia Đình",
  keywords: "bác sĩ, gia đình, y tế, chăm sóc sức khỏe",
  authors: [{ name: "ECHO MEDI Team" }],
  openGraph: {
    title: "ECHO MEDI",
    description: "ECHO MEDI Bác Sĩ Gia Đình",
    url: "https://echomedi-page.vercel.app",
    type: "website",
    images: [
      {
        url: 'https://api.echomedi.com/uploads/1_e78911f4ec.png',
        width: 850,
        height: 650,
        alt: 'ECHO MEDI Bác Sĩ Gia Đình'
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

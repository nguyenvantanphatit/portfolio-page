import { Metadata } from "next";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import Testimonial from "@/components/Testimonial";
import Service from "@/components/Service";
import Procedure from "@/components/Procedure";
import BookingForm from "@/components/Booking/Booking";
import Address from "@/components/Address";
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
      <Hero />
      <Service />
      <Contact />
      <Procedure />
      <Testimonial />
      <FAQ />
      <BookingForm />
      <Address />
    </main>
  );
}

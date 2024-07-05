import dynamic from 'next/dynamic';
import { Metadata } from "next";
import Contact from "@/components/Contact";
import Skill from "@/components/Skill";
import Introduce from '@/components/Introduce';
const Projects = dynamic(() => import('@/components/Projects'), { ssr: false });
export const metadata: Metadata = {
  title: "Tấn Phát",
  description: "Tấn Phát Software Engineer",
  keywords: "Tấn Phát Software Engineer",
  authors: [{ name: "Tấn Phát Team" }],
  metadataBase: new URL('https://echomedi-page.vercel.app'),
  openGraph: {
    title: "Tấn Phát",
    description: "Tấn Phát Software Engineer",
    url: "https://echomedi-page.vercel.app",
    siteName: 'Tấn Phát Software Engineer',
    type: "website",
    locale: 'en_US',
    images: [
      {
        url: 'https://res.cloudinary.com/dq49gyq1g/image/upload/v1720057490/aqfvydnqjwbzhoniyio9.png',
        width: 850,
        height: 650,
        alt: 'Tấn Phát Software Engineer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tấn Phát Software Engineer',
    description: 'Tấn Phát Software Engineer',
    siteId: '1467726470533754880',
    creator: '@your_twitter_handle',
    creatorId: '1467726470533754880',
    images: ['https://res.cloudinary.com/dq49gyq1g/image/upload/v1720057490/aqfvydnqjwbzhoniyio9.png'], 
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


export default function Home() {
  return (
    <main>
      <Introduce />
      <Skill />
      <Projects /> 
      <Contact />
    </main>
  );
}


import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";
import Head from "next/head";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon1.png" />
      </Head>
      <body>
        {/* <Header /> */}
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

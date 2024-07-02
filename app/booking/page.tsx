import type { NextPage } from "next";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import BookingForm from "../../components/Booking/Booking"
const Booking: NextPage = () => {
  return (
    <>
       <Head>
        <title>ECHO MEDI - Đặt lịch khám</title>
        <meta name="description" content="Đặt lịch khám cùng ECHO MEDI" />
        <meta name="keywords" content="bác sĩ, gia đình, y tế, chăm sóc sức khỏe" />
        <meta name="author" content="ECHO MEDI Team" />
        
        <meta property="og:title" content="ECHO MEDI" />
        <meta property="og:description" content="ECHO MEDI Bác Sĩ Gia Đình" />
        <meta property="og:url" content="https://echomedi.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/path/to/your/image.jpg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content="ECHO MEDI" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon1.png" />
      </Head>
      <BookingForm />
      <Toaster position="bottom-center" />
    </>
  );
};

export default Booking;

"use client"
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
export const SliderData = [
  {
    image:
      "https://d3e4m6b6rxmux9.cloudfront.net/Whats_App_Image_2024_01_02_at_10_00_13_32f2ab59_d855754bcb.jpg",
  },
  {
    image:
      "https://d3e4m6b6rxmux9.cloudfront.net/Whats_App_Image_2024_01_02_at_10_00_13_32f2ab59_d855754bcb.jpg",
  },
  {
    image:
      "https://d3e4m6b6rxmux9.cloudfront.net/Whats_App_Image_2024_01_02_at_10_00_13_32f2ab59_d855754bcb.jpg",
  },
  {
    image:
      "https://d3e4m6b6rxmux9.cloudfront.net/Whats_App_Image_2024_01_02_at_10_00_13_32f2ab59_d855754bcb.jpg",
  },
  {
    image:
      "https://d3e4m6b6rxmux9.cloudfront.net/Whats_App_Image_2024_01_02_at_10_00_13_32f2ab59_d855754bcb.jpg",
  },
];

export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#d3efc7" offset="20%" />
      <stop stop-color="white" offset="50%" />
      <stop stop-color="#d3efc7" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#d3efc7" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const Slider = () => {
  const [isClient, setIsClient] = useState(false);
  const locale = "vi";

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div id="home">
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {SliderData.map((slide : any, index : any) => (
          <SwiperSlide key={index}>
            <div className="full-w mx-auto z-1 mt-25" data-carousel="slide" >
              <div className="relative flex justify-center">
                {locale == "vi" ?
                  <div>
                    <div className="md:hidden">
                      <Image
                        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(window.innerWidth, window.innerWidth / 1.6))}`}
                        alt="Echo Medi banner" src="https://d3e4m6b6rxmux9.cloudfront.net/Whats_App_Image_2024_01_02_at_10_00_13_32f2ab59_d855754bcb.jpg" width={window.innerWidth} height={window.innerWidth / 1.6} />
                    </div>
                    <div className="hidden md:inline-flex lg:hidden">
                      <Image
                        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(window.innerWidth, window.innerWidth / 1.6))}`}
                        alt="Echo Medi banner" src="https://d3e4m6b6rxmux9.cloudfront.net/BANNER_VI_2778522ebb.jpg" width={window.innerWidth} height={window.innerWidth / 1.6} />
                    </div>
                    <div className="hidden lg:inline-flex xl:hidden">
                      <Image
                        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(window.innerWidth, window.innerWidth / 3.31))}`}
                        alt="Echo Medi banner" src="https://d3e4m6b6rxmux9.cloudfront.net/BANNER_VI_2778522ebb.jpg" width={window.innerWidth} height={window.innerWidth / 3.31} />
                    </div>
                    <div className="hidden xl:inline-flex">
                      <Image
                        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(window.innerWidth, window.innerWidth / 3.31))}`}
                        alt="Echo Medi banner" src="https://d3e4m6b6rxmux9.cloudfront.net/BANNER_VI_2778522ebb.jpg" width={window.innerWidth} height={window.innerWidth / 3.31} />
                    </div>
                  </div> :
                  <div>
                    <div className="md:hidden">
                      <Image
                        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(window.innerWidth, window.innerWidth / 1.6))}`}
                        alt="Echo Medi banner" src="https://d3e4m6b6rxmux9.cloudfront.net/Whats_App_Image_2024_01_02_at_10_00_12_c45d2165_bf8ed8bb33.jpg" width={window.innerWidth} height={window.innerWidth / 1.6} />
                    </div>
                    <div className="hidden md:inline-flex lg:hidden">
                      <Image
                        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(window.innerWidth, window.innerWidth / 1.6))}`}
                        alt="Echo Medi banner" src="https://d3e4m6b6rxmux9.cloudfront.net/Whats_App_Image_2024_01_02_at_10_00_12_c45d2165_bf8ed8bb33.jpg" width={window.innerWidth} height={window.innerWidth / 1.6} />
                    </div>
                    <div className="hidden lg:inline-flex xl:hidden">
                      <Image
                        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(window.innerWidth, window.innerWidth / 3.31))}`}
                        alt="Echo Medi banner" src="https://d3e4m6b6rxmux9.cloudfront.net/ECHOMEDI_BANNER_EN_b676176b54.jpg" width={window.innerWidth} height={window.innerWidth / 3.31} />
                    </div>
                    <div className="hidden xl:inline-flex">
                      <Image
                        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(window.innerWidth, window.innerWidth / 3.31))}`}
                        alt="Echo Medi banner" src="https://d3e4m6b6rxmux9.cloudfront.net/ECHOMEDI_BANNER_EN_b676176b54.jpg" width={window.innerWidth} height={window.innerWidth / 3.31} />
                    </div>
                  </div>
                }
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
  );
};
export default Slider;

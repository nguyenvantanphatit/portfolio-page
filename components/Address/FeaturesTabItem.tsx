import React from "react";
import { AddressTab } from "@/types/featureTab";

const FeaturesTabItem = ({ featureTab }: { featureTab: AddressTab }) => {
  const { title, desc1, image, phone } = featureTab;

  return (
    <>
      <div className="flex items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="mb-7 text-2xl font-bold text-black ">
            {title}
          </h2>
          <p className="mb-5">{desc1}</p>
          <iframe src={image} width="100%" height="400" loading="lazy"></iframe>
          <p className="my-5 flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 shrink-0 text-black inline mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            contact@echomedi.com
          </p>
          <p className="mb-5 flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 shrink-0 text-black inline mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            {phone}
          </p>
          <p className="mb-5 flex gap-2 items-center">
            Lịch làm việc
          </p>
          <p className="mb-5 flex gap-2 items-center">
            Thứ hai - Thứ bảy: 7:00 - 21:00
          </p>
          <p className="mb-5 flex gap-2 items-center">
            Chủ nhật: 7:00 - 15:00
          </p>
        </div>
        <div className="relative mx-auto hidden  md:block md:w-1/2">
          <img src="/images/dowload/dowload-app-03.jpg" alt="CTA tailwind section" className="mx-auto" />
        </div>
      </div>
    </>
  );
};

export default FeaturesTabItem;

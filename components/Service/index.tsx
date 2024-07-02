"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
const Pricing = () => {
  return (
    <>
      <section className="overflow-hidden py-8" id="service">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0 ">
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                subtitle: `Dịch Vụ`,
              }}
            />
          </div>
        </div>
        <div className="relative mx-auto max-w-[1207px]">
          <div className="absolute -bottom-40 -z-1 h-full w-full ">
            <Image
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-6 lg:flex-nowrap px-4 md:px-8  xl:px-0">
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-8 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3">
              <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
                Phổ Biến
              </div>
              <h3 className="mb-7.5 text-2xl font-bold text-black dark:text-white">
                Nhi Khoa
              </h3>
              <div className=" border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 font-bold">
                    Gói khám sức khỏe tổng quát tại phòng khám
                  </li>
                  <li className="mb-4 text-black last:mb-0 font-bold">
                    Khám và điều trị các bệnh lý nhi tại phòng khám
                  </li>
                </ul>
              </div>

            </div>
            <div className="animate_top group relative rounded-lg border border-stroke bg-primary p-8 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3">
              <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-white px-4.5 py-1.5 text-metatitle font-medium uppercase text-black">
                Phổ Biến
              </div>
              <h3 className="mb-2.5 text-xl font-medium text-white">
                Nội Khoa
              </h3>
              <div className=" border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-white last:mb-0 font-bold">
                    Gói khám sức khỏe tổng quát tại phòng khám
                  </li>
                  <li className="mb-4 text-white last:mb-0 font-bold">
                    Khám tại phòng khám
                  </li>
                </ul>
              </div>
            </div>
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-8 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3">
              <h3 className="mb-7.5 text-2xl font-bold text-black dark:text-white">
                Tâm Lý
              </h3>
              <div className=" border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 font-bold">
                    Tham vấn tâm lý cho người lớn tại phòng khám hoặc từ xa
                  </li>
                  <li className="mb-4 text-black last:mb-0 font-bold">
                    Tham vấn tâm lý cho trẻ em tại phòng khám
                  </li>
                  <li className="mb-4 text-black last:mb-0 flex items-center gap-2 font-bold">
                    <a href="https://echomedi.com/vi/comprehensive_health/goi-suc-khoe-toan-dien/">Các gói tâm lý người lớn</a> <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                        fill="currentColor"
                      />
                    </svg>
                  </li>
                  <li className="mb-4 text-black last:mb-0 flex items-center gap-2 font-bold">
                    <a href="https://echomedi.com/vi/goi_suc_khoe_nhi/goi-cham-soc-suc-khoe-nhi/">Các gói tâm lý trẻ em</a> <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                        fill="currentColor"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;

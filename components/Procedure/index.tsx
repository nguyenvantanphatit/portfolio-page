"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const Procedure = () => {
  return (
    <>
      <section className="overflow-hidden py-8" >
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right"
            >
              <div className="mx-auto flex flex-col justify-between">
                  <div className="mt-4">
                    <ul className="grid md:grid-cols-4 grid-cols-1 gap-3">
                      <li className=" p-5 text-center border border-gray-200 rounded-lg">
                        <div className="flex flex-col items-center">
                          <div className="flex-shrink-0 relative top-0 -mt-12">
                            <div
                              className="flex items-center justify-center h-14 w-14 rounded-full bg-primary text-white border-4 border-white text-xl font-semibold">
                              1
                            </div>
                          </div>
                          <div className="mt-4">
                            <h4 className="text-lg leading-6 font-semibold text-gray-900">Đăng ký khám bệnh phòng khám</h4>
                            <p className="mt-2 text-base leading-6 text-gray-500">
                              Khách hàng sẽ đặt lịch ở app Echo Medi, website hoặc đến trực tiếp tại phòng khám
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className=" p-5 text-center border border-gray-200 rounded-lg">
                        <div className="flex flex-col items-center">
                          <div className="flex-shrink-0 relative top-0 -mt-12">
                            <div
                              className="flex items-center justify-center h-14 w-14 rounded-full bg-primary text-white border-4 border-white text-xl font-semibold">
                              2
                            </div>
                          </div>
                          <div className="mt-4">
                            <h4 className="text-lg leading-6 font-semibold text-gray-900">Điều dưỡng kiểm tra sinh hiệu</h4>
                            <p className="mt-2 text-base leading-6 text-gray-500">
                              Điều dưỡng sẽ kiểm tra sinh hiệu (đo nhiệt độ, huyết áp, đếm nhịp mạch, nhịp thở,…)
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className=" p-5 text-center border border-gray-200 rounded-lg">
                        <div className="flex flex-col items-center">
                          <div className="flex-shrink-0 relative top-0 -mt-12">
                            <div
                              className="flex items-center justify-center h-14 w-14 rounded-full bg-primary text-white border-4 border-white text-xl font-semibold">
                              3
                            </div>
                          </div>
                          <div className="mt-4">
                            <h4 className="text-lg leading-6 font-semibold text-gray-900">Khám bệnh cùng bác sĩ</h4>
                            <p className="mt-2 text-base leading-6 text-gray-500">
                              Bác sĩ sẽ khám bệnh không giới hạn thời gian, cho các chỉ định hoặc toa thuốc (Nếu có)
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="p-5 text-center border border-gray-200 rounded-lg">
                        <div className="flex flex-col items-center">
                          <div className="flex-shrink-0 relative top-0 -mt-12">
                            <div
                              className="flex items-center justify-center h-14 w-14 rounded-full bg-primary text-white border-4 border-white text-xl font-semibold">
                              4
                            </div>
                          </div>
                          <div className="mt-4">
                            <h4 className="text-lg leading-6 font-semibold text-gray-900">Thực hiện các chỉ định của bác sĩ</h4>
                            <p className="mt-2 text-base leading-6 text-gray-500">
                              Thực hiện các chỉ định, Nhận thuốc tại quầy dược theo toa thuốc bác sĩ (Nếu có)
                            </p>
                          </div>
                        </div>
                      </li>

                    </ul>
                  </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0" id="procedure">
          <div className="flex items-center gap-4">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-2/3"
            >
              <span className="font-medium uppercase text-black dark:text-white">
                <span className="mb-4 mr-4 inline-flex rounded-full bg-green-800 px-4.5 py-1 text-metatitle uppercase text-white ">
                  Mới
                </span>
              </span>
              <h2 className="relative mb-6 text-3xl font-bold text-black">
                Quy Trình Khám Bệnh Tại Nhà
              </h2>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-start items-start gap-2">
                <div className="w-full px-4 py-8 rounded-2xl border border-gray-200 hover:border-green-800 transition-all duration-700 ease-in-out justify-center items-center gap-2.5 flex">
                  <div className="flex-col justify-start items-center gap-2 inline-flex lg:h-[120px] h-[75px]">
                    <h4 className="text-center text-gray-900 text-lg font-semibold">Đặt lịch khám</h4>
                    <p className="text-center text-gray-500 text-sm font-normal ">Khách hàng sẽ đặt lịch hẹn qua app Echo Medi hoặc website trước 24h</p>
                  </div>
                </div>
                <div className="w-full px-4 py-8 rounded-2xl border border-gray-200 hover:border-green-800 transition-all duration-700 ease-in-out justify-center items-center gap-2.5 flex">
                  <div className="flex-col justify-start items-center gap-2 inline-flex lg:h-[120px] h-[75px]">
                    <h4 className="text-center text-gray-900 text-lg font-semibold">Bác sĩ đến nhà khám bệnh</h4>
                    <p className="text-center text-gray-500 text-sm font-normal ">Bác sĩ sẽ thăm khám khoảng 30 phút với khách hàng</p>
                  </div>
                </div>
                <div className="w-full px-4 py-8 rounded-2xl border border-gray-200 hover:border-green-800 transition-all duration-700 ease-in-out justify-center items-center gap-2.5 flex">
                  <div className="flex-col justify-start items-center gap-2 inline-flex lg:h-[120px] h-[75px]">
                    <h4 className="text-center text-gray-900 text-lg font-semibold">Hoàn tất quy trình khám bệnh</h4>
                    <p className="text-center text-gray-500 text-sm font-normal ">Bác sĩ trả kết quả xét nghiệm và thuốc sẽ giao tận nhà ( Nếu có) </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden h-65 md:block md:w-1/3"
            >
              <Image
                src="/images/dowload/dowload-app.jpg"
                alt="About"
                className=""
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Procedure;

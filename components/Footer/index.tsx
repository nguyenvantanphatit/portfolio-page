"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const Footer = () => {
  const locale = "vi" ? "vi" : "en";
  return (
    <>
      <footer 
        aria-label="Site Footer">
        <div className="2xl:container 2xl:mx-auto lg:pb-16 md:py-8 pb-9 px-4 sm:px-12">
            <div className="grid grid-cols-1 sm:gap-5 gap-y-10 lg:grid-cols-4">
              <div>
                <div className="flex justify-center text-black sm:justify-start max-sm:mt-5 mb-5 relative">
                  <img alt="ECHO MEDI is a comprehensive healthcare provider to serve you and your family. We are at the forefront of the healthcare industry in Vietnam in enhancing the ‘family doctor’ concept found in advanced countries worldwide. ECHO MEDI là hệ thống y tế toàn diện cho bạn và gia đình. Chúng tôi tiên phong tại Việt Nam trong việc nâng cấp mô hình “Bác sĩ gia đình” của các nước tiên tiến trên thế giới." loading="lazy" src="https://i.imgur.com/qUMuiaf.png" className="max-h-16 m-auto" />
                </div>

                <p className="text-sm mt-4 text-center leading-relaxed text-black sm:text-left m-auto sm:m-0 !leading-6"
                >
                  {locale === "en" ? "ECHO MEDI is a comprehensive healthcare provider to serve you and your family. We are at the forefront of the healthcare industry in Vietnam in enhancing the ‘family doctor’ concept found in advanced countries worldwide." : "ECHO MEDI là hệ thống y tế toàn diện cho bạn và gia đình. Chúng tôi tiên phong tại Việt Nam trong việc nâng cấp mô hình “Bác sĩ gia đình” của các nước tiên tiến trên thế giới."}
                </p>

                <ul className="mt-6 flex justify-center items-center gap-6 sm:justify-start md:gap-8">
                  <li>
                    <a
                      href="https://www.facebook.com/ECHO-MEDI-104159875780641?gidzl=VhMH36yZUJrohfK8RJvuENoibGDxQYauCFp53YbcVMXXeP0FV6SkRM6bobTyD25jO_N5MZ4fezq3PY9vE0"
                      rel="noreferrer"
                      target="_blank"
                      className="text-black"
                    >
                      <span className="sr-only">Facebook</span>
                      <svg
                        className="h-9 w-9"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCJ7phE7dq0lbhdOzu5R0_nw/featured"
                      rel="noreferrer"
                      target="_blank"
                      className="text-black"
                    >
                      <span className="sr-only">Youtube</span>
                      <svg
                        className="h-19 w-9"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>

              <div
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:col-span-3 mt-0"
              >
                <div className="text-center sm:text-left">
                  <h3 className="font-bold text-black">{locale === "en" ? " ADDRESS" : "ĐỊA CHỈ"}</h3>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li
                      className="flex flex-col items-start justify-center gap-1.5  sm:items-start items-center"
                    >
                      <p className="-mt-0.5 not-italic text-black">
                        {locale === "en" ? "1026 Nguyen Van Linh, Tan Phong Ward, District 7, HCMC" : "1026 Nguyễn Văn Linh, P. Tân Phong, Quận 7, TP.HCM"}
                        &ensp;
                      </p>
                      <a style={{
                        color: "#406D48"
                      }}
                        target="_blank"
                        href="https://www.google.com/maps/place/ECHO+MEDI+-+Healthcare+Evolved/@10.7292756,106.7035192,17z/data=!3m1!4b1!4m6!3m5!1s0x31752f1a90aeb161:0x6723f8e04c8e3433!8m2!3d10.7292756!4d106.7057079!16s%2Fg%2F11sb5r_5yt?hl=vi-VN"
                        className="text-xs font-bold hover:underline">{locale === "en" ? "View Maps" : "Xem bản đồ"}</a>
                    </li>
                    <li
                      className="flex flex-col  items-start justify-center gap-1.5 sm:items-start items-center"
                    >
                      <address className="-mt-0.5 not-italic text-black">
                        {locale === "en" ? "46 Nguyen Thi Dinh, An Phu Ward, Thu Duc City, HCMC" : "46 Nguyễn Thị Định, P.An Phú, TP.Thủ Đức, TP.HCM"}
                        &ensp;
                      </address>
                      <a style={{
                        color: "#406D48"
                      }}
                        target="_blank"
                        href="https://www.google.com/maps/place/ECHO+MEDI/@10.7916213,106.7512846,17z/data=!3m1!4b1!4m6!3m5!1s0x31752764abde92c7:0x5e0ef8d1067c35f!8m2!3d10.7916213!4d106.7534733!16s%2Fg%2F11sk4sppjf?hl=vi-VN"
                        className="text-xs font-bold hover:underline">{locale === "en" ? "View Maps" : "Xem bản đồ"}</a>
                    </li>
                    <li
                      className="flex flex-col  items-start justify-center gap-1.5 sm:justify-start sm:items-start items-center"
                    >
                      <address className="-mt-0.5 not-italic text-black">
                        {locale === "en" ? "Canary Plaza, #0102, 5 Binh Duong Highway, Binh Hoa Ward, Thuan An City" : "Canary Plaza, Căn 0102, Số 5, Đại lộ Bình Dương, P. Bình Hoà, TP. Thuận An"}
                        &ensp;
                      </address>
                      <a style={{
                        color: "#406D48"
                      }}
                        href="https://www.google.com/maps/place/ECHO+MEDI+-+Healthcare+Evolved/@10.9286844,106.7094019,17z/data=!3m1!4b1!4m6!3m5!1s0x3174d729ae7d0e51:0xe53ac856559d1703!8m2!3d10.9286844!4d106.7119768!16s%2Fg%2F11stjtr2hy"
                        target="_blank"
                        className="text-xs font-bold hover:underline">{locale === "en" ? "View Maps" : "Xem bản đồ"}</a>
                    </li>

                    <h3 className="font-bold text-black mt-22">{locale === "en" ? "CLINIC HOURS" : "LỊCH LÀM VIỆC "}</h3>

                    <nav aria-label="Footer Services Nav" className="mt-6">
                      <ul className="space-y-2 text-sm">
                        <li>

                          {locale === "en" ? "Monday - Saturday:" : "Thứ hai - Thứ bảy:"} 7:00 - 21:00
                        </li>

                        <li>

                          {locale === "en" ? "Sunday:" : "Chủ nhật:"} 7:00 - 15:00

                        </li>
                      </ul>
                    </nav>
                  </ul>
                </div>

                <div className="text-center sm:text-left">
                  <h3 className=" font-bold text-black">{locale === "en" ? "POLICY" : "CHÍNH SÁCH"}</h3>
                  <nav aria-label="Footer Services Nav" className="mt-6">
                    <ul className="space-y-4 text-sm">
                      <li className="hover:underline flex sm:justify-start justify-center">
                        <a href="/policy/chinh-sach-bao-mat"><p className="sm:m-0 m-auto">{locale === "en" ? "Privacy Policy" : "Chính sách bảo mật"}</p></a>
                      </li>
                      <li className="hover:underline flex sm:justify-start justify-center">
                        <a href="/policy/chinh-sach-thanh-toan"><p className="sm:m-0 m-auto">{locale === "en" ? "Payment Policy" : "Chính sách thanh toán"}</p></a>
                      </li>
                      <li className="hover:underline flex sm:justify-start justify-center">
                        <a href="/policy/chinh-sach-van-chuyen"><p className="sm:m-0 m-auto">{locale === "en" ? "Shipping Policy" : "Chính sách vận chuyển"}</p></a>
                      </li>
                      <li className="hover:underline flex sm:justify-start justify-center">
                        <a href="/policy/chinh-sach-doi-tra"><p className="sm:m-0 m-auto">{locale === "en" ? "Return Policy" : "Chính sách đổi trả"}</p></a>
                      </li>
                      <li className="hover:underline flex sm:justify-start justify-center">
                        <a href="/policy/dieu-khoan-va-chinh-sach-hoat-dong"><p className="sm:m-0 m-auto">{locale === "en" ? "Operating Policies" : "Điều khoản và chính sách hoạt động"}</p></a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-bold text-black">{locale === "en" ? " CONTACT" : "LIÊN HỆ"}</h3>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>

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

                      <span className="text-black">contact@echomedi.com</span>
                    </li>
                    <li>

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

                      <a href="tel:1900638408" className="text-black">1900 638 408</a>
                    </li>
                    <li>

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

                      <span className="text-black">{locale === "en" ? "(84) 76 8638 408" : "0768 638 408"}
                      </span>
                    </li>
                    <li>
                      <span className="text-black block mb-2">{locale === "en" ? "Customer service district 7: " : "Chăm sóc khách hàng quận 7"}
                      </span>
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
                      <span className="text-black">
                        {locale === "en" ? "(84) 28 7300 9801" : "028 7300 9801"}
                      </span>

                    </li>
                    <li>
                      <span className="text-black block mb-2">{locale === "en" ? "Customer service district 2: " : "Chăm sóc khách hàng quận 2"}
                      </span>
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
                      <span className="text-black">{locale === "en" ? "(84) 28 7300 9802" : "028 7300 9802"}
                      </span>
                    </li>
                    <li>
                      <span className="text-black block mb-2">{locale === "en" ? "Customer service Binh Duong city: " : "Chăm sóc khách hàng Bình Dương"}
                      </span>
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
                      <span className="text-black">{locale === "en" ? "(84) 28 7300 9803" : "028 7300 9803"}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="text-center sm:text-left flex flex-col items-center">
                  <h3 className="font-bold text-black mb-6 ">{locale === "en" ? "DOWNLOAD APP" : "TẢI ỨNG DỤNG"}</h3>
                  <Image alt="ECHO MEDI" width={150} height={150} loading="lazy" src="data:image/gif;base64,R0lGODdhfQB9AIAAAAAAAP///ywAAAAAfQB9AAAC/4SPqbvhDxOcgdlD4928e5s9Ulh9CFma6qqiY8gCbkzXyoyRMW73u34Crni+DeqoyYmCsKLS8UISo9LmM2WY9ibUKuXiJXKZGee1G14y0tZs0t0ujq9sKKg+h9vpb3kfn3fTB/Y3yBLoRfURqOiBaDhUKNXYwUiGZSS5V/M4ebkIqYdJqCbq04lEyWF55qg5evgqFipYWruZaau1VkWKy9pAC3yLuRvsyatLq0oMqhznexTNPH1nW813bZ26Xbz82e38K7TaGw5eKfzdyi6KJ+6tnYxLfd4uAyh/PK7fbF/+jF8+ePXmwbqHzdSld64CHtz3EF8/ZqgAEUQHkN7COv8FFWYrs9EhQ4MjPUJEE2dWvogrBbKURU4iyI9hopWU+VJkTJUDu90cVpHnl5BpzGSM55LiK6NMcyXFiFPpxKZmKkp9ipAqVatQuWbVytSryahd13FqmcjnUqJo27rtJxTl27loba6lSTcvR7UO5er9W5MvVneAjZGlaVfnVIMXGf/DCXRnzMZHE/pDLBjp0EiLx3Y8TBiuZGgNNTo+fZJtYpfDLLtWvQWm6NkzIf4061RzZNqbbe/92kK2ac+wSf4mzpm1Ot67ewI3EXT5cMjSLT4WS5356Ol1S2u+2ptY3Mxp0/UtSxrvXd9sKIN+b7g88tBFvYP3uzp8c+vma8P/Fx6YcSnNhR96yrVHHoC3DXieesiw5x9dBd4THYICRkhgcWNVWN+F+hXWEniGnbJdTm6JOJlR43m44IH+hVVifi3qlmJVMSZo4YbmaLVias/JRwOHEX2G3X4j2qdhbpZh51drSGLWn4nfQdUkbkvW6GOW/2mXXnCKTUdkdUDeZ+CUz5HJIpZbDrammZVRyVZ867WJ5ps/HneZjg3qCWaZMqpZ5JxMXidooQ9m1yeFO9JH455tCuWkoodCaqiLH3aZJ6KXYsggm0AeKSk3UDJap6ZCuvfpjahlWuqEYI3KKpyhShmpE3LydiWXidoKaHW5cqcmjJju9yutVsYGoqh8/25q7LAlFoaio1Xq2qhe0bI5LbCdgnitm+L1ui20ZQ7qoLYvghVoZ0rKOt+rdLIL3ZyfvZruruveqa6wnh67KrHu9itvLNLCm600SRbcba2aFkwptfUaHKWQqTo7qYK4NdwhqTjue2h+DD8rpqqMKtzjvSMHvCqJjpJs8cApI8uxvRKjrKXKMQ85rsgm+7HyxS1j+5jN3rLcc8cbhwcPuVrOrO5NSdOcKdMy4/m0y0v/jHO5SHundNRYV61svNuiCnLTABb7GsDh+vyllGGa3barO98K9Jk5x/2kxmqbm/Wyp+a9MKEOL/revxF/HSfhChuu98ltT2wv44Fr/fHYki5zjbjWJV+eGcLoVsps2o5HriLoXRsZ7OdFc8r3n/mWvnroQSf+uo2xnx4ypgUAADs=" className="" />
                  <a href="https://apps.apple.com/vn/app/echo-medi/id6448538294" target="blank" className="cursor-pointer mt-2"><Image alt="ECHO MEDI" width={150} height={50} loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Download_on_the_App_Store_RGB_blk.svg/1920px-Download_on_the_App_Store_RGB_blk.svg.png" className="mt-4" /></a>
                  <a href="https://play.google.com/store/apps/details?id=com.echomedi.echomedi&hl=vi" target="blank" className="cursor-pointer"><Image alt="ECHO MEDI" width={150} height={50} loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" className="mt-2" /></a>
                  <a href="https://appgallery.huawei.com/app/C109669075" target="blank" className="cursor-pointer"><Image alt="ECHO MEDI" width={150} height={50} loading="lazy" src="https://d3e4m6b6rxmux9.cloudfront.net/dc89f3f0f72d0a31db408a245d65_a12841c7a5.svg?updated_at=2023-12-16T08:02:22.421Z" className="mt-2" /></a>
                </div>
              </div>
            </div>

            <div className="mt-12 mb-12 border-t border-black-100 pt-6">
              <div className="sm:flex sm:justify-between sm:text-left">
                <p className="text-center mt-4 font-bold text-sm text-black sm:order-first sm:mt-0">
                  {locale === "en" ? "ECHO MEDI LIMITED LIABILITY COMPANY" : "CÔNG TY TNHH ECHO MEDI"}
                </p>
              </div>
              <div
                className="sm:flex sm:justify-between sm:text-left">
                <p className="mt-4 text-xs text-black sm:order-first sm:mt-0">
                  {locale === "en" ? "Business registration number: 0317439798, first registered on August 19th, 2022, and the first amendment was registered on October 31st, 2022, issued by the HCMC D.P.I" : "Mã số ĐKKD: 0317439798 đăng ký lần đầu ngày 19/08/2022, đăng ký thay đổi lần thứ 1 ngày 31/10/2022, được cấp bởi Sở KHĐT TP.HCM"}
                </p>
              </div>
              <div
                className="sm:flex sm:justify-between sm:text-left">
                <p className="mt-4 text-xs text-black sm:order-first sm:mt-0">
                  {locale === "en" ? "" : "Mã số CNĐĐKKD: 12175/DKKDD-HCM được cấp bởi Sở Y tế TP.HCM"}
                </p>
              </div>
              <div
                className="sm:flex sm:justify-between sm:text-left">
                <p className="mt-4 text-xs text-black sm:order-first sm:mt-0">
                  {locale === "en" ? "" : "Mã số ĐKHĐ: 09269/HCM-GPHĐ được cấp bởi Sở Y tế TP.HCM"}
                </p>
              </div>
            </div>
         
        </div>
      </footer>
    </>
  );
};

export default Footer;

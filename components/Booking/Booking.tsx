"use client"
import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";
import toast from 'react-hot-toast';
import dayjs from "dayjs";
import moment from "moment";
import SectionHeader from "../Common/SectionHeader";

require("dayjs/locale/vi");

const BookingForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [bd, setBD] = useState<Date | null>(null);
  const [bookingDate, setBookingDate] = useState(moment().format('YYYY-MM-DD'));
  const [timeSlot, setTimeSlot] = useState("");
  const [gender, setGender] = useState("male");
  const [address, setAddress] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [phone_number_warning_msg, setPhoneNumberWarningMsg] = useState("");
  const [message, setMessage] = useState("");
  const [branch, setBranch] = useState("q7");
  const [open, setOpen] = useState(false);
  const locale = "vi" ? "vi" : "en";
  const isPastDate = (date: string) => {
    return dayjs(date).isBefore(dayjs().startOf("day"));
  };

  dayjs.locale(locale);

  const bookingSlots = useMemo(() => {
    const slots: dayjs.Dayjs[] = [];
    const startTime = 7;
    let endTime = 20;
    if (dayjs(bookingDate).day() === 0) {
      endTime = 14;
    }
    for (let i = startTime; i <= endTime; i++) {
      let slot = dayjs(bookingDate).set("hour", i).set("minute", 0);
      if (slot.isAfter(dayjs()) && !isPastDate(slot.toISOString())) {
        slots.push(slot);
      }
      slot = dayjs(bookingDate).set("hour", i).set("minute", 30);
      if (slot.isAfter(dayjs()) && !isPastDate(slot.toISOString())) {
        slots.push(slot);
      }
    }
    if (slots?.length) {
      setTimeSlot(slots[0].toISOString());
    }
    return slots;
  }, [bookingDate]);

  useEffect(() => {
    if (bookingSlots.length) {
      setTimeSlot(bookingSlots[0].toISOString());
    }
  }, [bookingSlots]);


  const handleBooking = () => {
    if (phone_number == "" || !validatePhone(phone_number)) {
      setPhoneNumberWarningMsg(locale == "vi" ? "Yêu cầu nhập số điện thoại hợp lệ." : "Please enter your phone number.")
      toast.error("Đặt lịch không thành công");
      return;
    }
    const payload = {
      data: {
        createNewPatient: true,
        full_name: name,
        contactFullName: name,
        gender,
        email,
        contactEmail: email,
        phone: phone_number,
        contactPhoneNumber: phone_number,
        message,
        birthday: bd ? dayjs(bd).toISOString() : null,
        address: {
          address
        },
        contactAddress: address,
        branch,
        bookingDate: timeSlot,
        note: message,
      }
    };

    axios
      .post("https://api.echomedi.com/api/bookings/createBookingFromWeb", payload)
      .then(function (response) {
        toast.success("Đặt lịch thành công");
      })
      .catch(function (error) {
        toast.error("Đặt lịch không thành công");
      });
  };

  function validatePhone(phone: string) {
    return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(phone);
  }

  return (
    <div className="mb-4" id="contact">
      <div className="mx-auto max-w-7xl px-4 md:px-8 xl:px-0">
        <SectionHeader
          headerInfo={{
            subtitle: `Đặt Lịch Khám`,
          }}
        />
        <div className="border p-8 border-gray-200 rounded-lg">
          <div className="animate_top mx-auto text-center ">
          </div>
          <div className="grid grid-cols-2 gap-6 ">
            <div>
              <label htmlFor="name" className="block text-gray-700  text-base font-bold mb-2">{locale == "en" ? "Full name" : "Họ và tên"}:</label>
              <input type="text" id="name" name="name" onChange={(e) => {
                setName(e.target.value);
              }}
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-base lg:text-sm focus:outline-none focus:border-blue-500 h-10"
                required />
            </div>
            <div>
              <label htmlFor="gender" className="block text-gray-700  text-base font-bold mb-2">{locale == "en" ? "Gender" : "Giới tính"}:</label>
              <select id="gender" name="gender" value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 text-base lg:text-sm rounded-md focus:outline-none focus:border-blue-500 h-10" required>
                <option value="male">{locale == "en" ? "Male" : "Nam"}</option>
                <option value="female">{locale == "en" ? "Female" : "Nữ"}</option>
              </select>
            </div>
            <div>
              <label htmlFor="booking-date" className="block text-gray-700  text-base font-bold mb-2">{locale == "en" ? "Booking date" : "Ngày đặt lịch"}:</label>
              <input
                type="date"
                id="booking-date"
                name="booking-date"
                onChange={(e) => {
                  setBookingDate(e.target.value);
                }}
                value={bookingDate}
                min={dayjs().format("YYYY-MM-DD")}
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-base lg:text-sm focus:outline-none focus:border-blue-500 h-10"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700  text-base font-bold mb-2">{locale == "en" ? "Phone" : "Số điện thoại"}:<span style={{ color: "red" }}> *</span></label>
              <input type="tel" id="phone" name="phone" onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-base lg:text-sm h-10"
                required />
              <span className="text-sm text-red-500">{phone_number_warning_msg}</span>
            </div>

            <div>
              <label htmlFor="booking-time" className="block text-gray-700  text-base font-bold mb-2">{locale == "en" ? "Booking time" : "Giờ đặt lịch"}:</label>
              <select
                value={timeSlot}
                name="timeSlot"
                className="w-full px-4 py-2 border border-gray-300 text-base lg:text-sm rounded-md focus:outline-none focus:border-blue-500 h-10" required
                onChange={(e) => setTimeSlot(e.target.value)}
              >
                {bookingSlots?.map((slot) => (
                  <option value={dayjs(slot).toISOString()}>
                    {dayjs(slot).format("HH:mm")}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="branch" className="block text-gray-700  text-base font-bold mb-2">{locale == "en" ? "Location" : "Chi nhánh"}:</label>
              <select id="branch" name="branch" value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-base h-10"
                required>
                <option value="q7">{locale == "en" ? "1026 Nguyen Van Linh, Tan Phong Ward, District 7" : "1026 Nguyễn Văn Linh, P. Tân Phong, Quận 7"}</option>
                <option value="q2">{locale == "en" ? "46 Nguyen Thi Dinh, An Phu Ward, District 2" : "46 Nguyễn Thị Định, P. An Phú, Quận 2"}</option>
                <option value="binhduong">{locale == "en" ? "Canary Plaza, 5 Binh Duong Highway, Thuan Giao, Thuan An City, Binh Duong" : "Canary Plaza, số 5 Đại lộ Bình Dương, Thuận Giao, Tp. Thuận An, Bình Dương"}</option>
              </select>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <button onClick={handleBooking} type="submit" className="bg-[#166534] text-white px-10 max-sm:w-full py-3 rounded-full text-xl hover:bg-green-700 font-bold">Đặt Lịch Khám</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;

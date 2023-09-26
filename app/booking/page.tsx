"use client";

import { useState } from "react";
import { motion } from "framer-motion";
const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };
export default function Booking() {
  const services = [
    { value: "Hair", label: "Hair  Service" },
    { value: "Spa", label: "Spa Service" },
    { value: "Facial", label: "Facial Service" },
    { value: "Hair Removal", label: "Hair Removal" },
    { value: "Others", label: "Others" },
  ];

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const toggleService = (value: string) => {
    if (selectedServices.includes(value)) {
      setSelectedServices(
        selectedServices.filter((service) => service !== value)
      );
    } else {
      setSelectedServices([...selectedServices, value]);
    }
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedServices([]);
    } else {
      setSelectedServices(services.map((service) => service.value));
    }
    setSelectAll(!selectAll);
  };

  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={transition}
      viewport={{ once: true }}
    className="">
      <div className="flex items-center flex-col justify-center px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-gray-600 uppercase rounded-full bg-teal-accent-400">
              Bookings
            </p>
          </div>
          <div className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto text-white">
            <span className="relative inline-block">
              <span className="relative">We</span>
            </span>{" "}
            offer a wide range of services to suit your needs.
          </div>
          <p className="text-base text-gray-700 md:text-lg">
            Effortlessly book your desired services with our skilled team of
            salon professionals and indulge in a personalized beauty experience.
          </p>
        </div>
        <div className="mx-auto w-full max-w-[550px]">
          <form>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="fName"
                    className="mb-3 block text-base font-medium text-white"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="fName"
                    id="fName"
                    placeholder="First Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="lName"
                    className="mb-3 block text-base font-medium text-white"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lName"
                    id="lName"
                    placeholder="Last Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="guest"
                className="mb-3 block text-base font-medium text-white"
              >
                How many clients?
              </label>
              <input
                type="number"
                name="guest"
                id="guest"
                placeholder="5"
                min="1"
                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="guest"
                className="mb-3 block text-base font-medium text-white"
              >
                Services
              </label>

              <div className="flex flex-col text-gray-400">
                {services.map((service) => (
                  <label key={service.value}>
                    <input
                      type="checkbox"
                      value={service.value}
                      checked={selectedServices.includes(service.value)}
                      onChange={() => toggleService(service.value)}
                    />{" "}
                    {service.label}
                  </label>
                ))}
              </div>
              <div className="my-2 text-gray-400">
                <p>Selected Services: {selectedServices.join(", ")}</p>
              </div>
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="date"
                    className="mb-3 block text-base font-medium text-white"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="time"
                    className="mb-3 block text-base font-medium text-white"
                  >
                    Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    id="time"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="mx-auto text-center my-10">
              <button className="hover:shadow-form rounded-md bg-gray-600 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

"use client";
import Iframe from "react-iframe";
import { motion } from "framer-motion";

export default function Map() {
  return (
    <section className="my-16">
      <div className="container px-6 py-12 mx-auto">
        <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        >
          <p className="font-medium text-gray-500">
            Contact us
          </p>

          <h1 className="mt-2 text-2xl font-semibold  md:text-3xl ">
            Get in touch
          </h1>

          <p className="mt-3">
            Our friendly team would love to hear from you.
          </p>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <span className="inline-block p-3 text-blue-500 rounded-full bg-gray-300 dark:bg-white  shadow-2xl ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-base font-medium  ">
                Email
              </h2>
              <p className="mt-2 text-sm text-gray-500 ">
                Our friendly team is here to help.
              </p>
              <p className="mt-2 text-sm">
                hello@salon.com
              </p>
            </div>

            <div>
              <span className="inline-block p-3 text-blue-500 rounded-full bg-gray-300 dark:bg-white shadow-2xl ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-base font-medium ">
                Office
              </h2>
              <p className="mt-2 text-sm text-gray-500 ">
                Come say hello at our office HQ.
              </p>
              <p className="mt-2 text-sm  ">
              No. 100/1, 1st floor, Sarjapur - Marathahalli Rd, Jakkasandra, Bengaluru, Karnataka 560034
              </p>
            </div>

            <div>
              <span className="inline-block p-3 text-blue-500 rounded-full bg-gray-300 dark:bg-white shadow-2xl ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-base font-medium ">
                Phone
              </h2>
              <p className="mt-2 text-sm text-gray-500 ">
                Mon-Fri from 8am to 5pm.
              </p>
              <p className="mt-2 text-sm ">
                +91-12345-67890
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15554.940599202382!2d77.6378718!3d12.9247366!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15aabcf219ed%3A0x6609e78a2a03e839!2sPixie%20Unisex%20Salon%20%26%20Spa!5e0!3m2!1sen!2sin!4v1695427267647!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
              // className="h-[600px] w-[500px] md:w-[60%] rounded-xl shadow-2xl"
            ></Iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

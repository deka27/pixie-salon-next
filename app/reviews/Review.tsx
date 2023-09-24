"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Ema Watson",
    imageSrc: "https://source.unsplash.com/mEZ3PoFGs_k",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda.",
  },
  {
    id: 2,
    name: "Jemma Lorken",
    imageSrc: "https://source.unsplash.com/QXevDflbl8A",
    text: "Donec cursus sodales mauris in fermentum. Pellentesque consectetur lectus vitae magna porttitor, at interdum ante faucibus. Vivamus gravida mollis magna quis porttitor.",
  },
  {
    id: 3,
    name: "Sara Ethos",
    imageSrc: "https://source.unsplash.com/C8Ta0gwPbQg",
    text: "Nunc nec augue sed velit ullamcorper lobortis a ac ligula. Donec sed quam ligula. Phasellus rutrum, magna eu ornare volutpat, neque nulla posuere arcu, ac auctor libero turpis in risus. Duis dictum velit ex, quis fermentum leo aliquet in. ",
  },
];

export default function Review() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <div className="">
      <section className="">
        <div className="max-w-6xl px-6 py-10 mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <p className="text-xl font-medium text-gray-500">Testimonials</p>
            <div className="mt-2 text-2xl font-semibold  capitalize lg:text-3xl ">
              What clients are saying
            </div>
          </motion.div>

          <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div className="absolute w-full bg-gradient-to-l from-gray-400 to-gray-700 -z-10 md:h-96 rounded-2xl"></div>

            <div className="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
              <Image
                className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
                src={currentTestimonial.imageSrc}
                alt="client photo"
                width={1000}
                height={1000}
              />
              <div className="mt-2 md:mx-6">
                <div>
                  <p className="text-xl font-medium tracking-tight text-white">
                    {currentTestimonial.name}
                  </p>
                </div>

                <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
                  {currentTestimonial.text}
                </p>

                <div className="flex items-center justify-between mt-6 md:justify-start">
                  <button
                    title="left arrow"
                    className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-blue-400"
                    onClick={handlePrevClick}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <button
                    title="right arrow"
                    className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-blue-400"
                    onClick={handleNextClick}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

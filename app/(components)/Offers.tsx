"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const bg1 = "https://source.unsplash.com/UhvEJosq-Zo"
const bg2 = "https://source.unsplash.com/Wt33T42JNCM"
const bg3 = "https://source.unsplash.com/BTKF6G-O8fU"
const images = [bg1, bg2, bg3];

export default function Offers() {
  return (
    <div className="my-36 mx-auto">
      <div className="mx-auto my-6  max-w-6xl px-6 py-10">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl "
        >
          {/* <div className="ml-6 md:ml-16">Offers</div> */}
          <div>
          <p className="text-xl font-medium text-gray-500 ">Offers</p>
          <div className="mt-2 text-2xl font-semibold capitalize lg:text-3xl">            
          Discover Beauty at a Steal!
          </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="mx-auto my-6 p-6 md:p-12 mb-8 md:flex justify-center"
      >
        <div className="flex flex-col items-end justify-items-end">
          <div className="mx-auto max-w-7xl  text-right text-sm md:text-2xl  mb-6 ">
            Exciting news! We are offering special discounts on our salon
            services. Treat yourself or a loved one to a day of pampering
            without breaking the bank. Book now and enjoy our fantastic offers!
          </div>
          <div className="h-16 w-2/6 bg-gradient-to-l from-white via-gray-400 to-gray-700 opacity-50 text-white mb-6 hidden md:block"></div>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mb-8 w-full h-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="w-full h-full">
              <div className=" mx-auto">
                <Image
                  src={image}
                  alt="Promo"
                  width={1000}
                  height={1000}
                  className="rounded-xl object-cover mx-auto h-[500px] w-[90%]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
}

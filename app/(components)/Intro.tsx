"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Intro() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div>
      <section className="content max-w-full">
        <p
          className="content__text content__text--centered"
          data-scroll
          data-scroll-speed="0.5"
        >
          Beauty, a timeless and diverse concept, transcends mere aesthetics. It
          resides in a flower&apos;s gentle petals, a genuine smile&apos;s
          radiance, and Earth&apos;s breathtaking landscapes. Unconfined by
          rigid standards, it&apos;s unique to each. Beauty harmonizes symmetry
          and asymmetry, light and shadow, forging connections and inspiring
          wonder, fostering creativity and lifting spirits.
        </p>
      </section>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl"
      >
        <div 
        className="ml-6 md:ml-16"
        >
          Welcome to Pixie</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        viewport={{ once: true }}
        className="text-sm md:text-2xl flex items-start justify-end my-16"
      >
        <div className="h-32 w-16 bg-gradient-to-l from-white via-gray-400 to-gray-700 opacity-50 text-white mr-6"></div>
        <div className="mr-3 text-left w-[70%] p-2">
        
          Welcome to Pixie Unisex Salon & Spa, your enchanting haven for beauty and self-care. Nestled in the heart
          of our bustling city, Pixie Salon is a sanctuary where your inner
          radiance is awakened and enhanced. Step into a world of pampering and
          transformation, where our skilled professionals are dedicated to
          bringing out your natural allure and leaving you feeling refreshed,
          confident, and utterly beautiful. Discover the magic of Pixie Salon,
          where your unique beauty story unfolds.
        </div>
      </motion.div>
    </div>
  );
}

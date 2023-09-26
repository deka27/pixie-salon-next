"use client";
import { motion } from "framer-motion";

import React, { useEffect } from "react";
import Image from "next/image";
import img1 from "@/public/img/demo2/1.jpg";
import img2 from "@/public/img/demo2/2.jpg";
import img3 from "@/public/img/demo2/3.jpg";
import img4 from "@/public/img/demo2/4.jpg";
import img5 from "@/public/img/demo2/5.jpg";
import img6 from "@/public/img/demo2/6.jpg";
import img7 from "@/public/img/demo2/7.jpg";
import img8 from "@/public/img/demo2/8.jpg";
import img9 from "@/public/img/demo2/9.jpg";
import img10 from "@/public/img/demo2/10.jpg";
import img11 from "@/public/img/demo2/11.jpg";
import img12 from "@/public/img/demo2/12.jpg";
import img13 from "@/public/img/demo2/13.jpg";
import img14 from "@/public/img/demo2/14.jpg";
import img15 from "@/public/img/demo2/15.jpg";
import img16 from "@/public/img/demo2/16.jpg";
import img17 from "@/public/img/demo2/17.jpg";
import img18 from "@/public/img/demo2/18.jpg";
import img19 from "@/public/img/demo2/19.jpg";
import img20 from "@/public/img/demo2/20.jpg";

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const Hero: React.FC = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={transition}
      viewport={{ once: true }}
      className="demo-2 loading"
    >
      <main data-scroll-container>
        <section
          className="tiles tiles--columns-rotated tiles--darker"
          id="grid"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={transition}
            viewport={{ once: true }}
            className="tiles__wrap"
          >
            <div
              className="tiles__line"
              data-scroll
              data-scroll-speed="1"
              data-scroll-target="#grid"
            >
              <div className="tiles__line-img">
                <Image
                  src={img1}
                  alt="Image"
                  className="tiles__line-img"
                ></Image>
              </div>
              <div className="tiles__line-img">
                <Image
                  src={img2}
                  alt="Image"
                  className="tiles__line-img"
                ></Image>
              </div>
              <div className="tiles__line-img">
                <Image
                  src={img3}
                  alt="Image"
                  className="tiles__line-img"
                ></Image>
              </div>
              <div className="tiles__line-img">
                <Image
                  src={img4}
                  alt="Image"
                  className="tiles__line-img"
                ></Image>
              </div>
              <div className="tiles__line-img">
                <Image
                  src={img5}
                  alt="Image"
                  className="tiles__line-img"
                ></Image>
              </div>
            </div>
            <div
              className="tiles__line"
              data-scroll
              data-scroll-speed="-1"
              data-scroll-target="#grid"
            >
              <div className="tiles__line-img">
                <Image
                  src={img5}
                  alt="Image"
                  className="tiles__line-img"
                ></Image>
              </div>
              <div className="tiles__line-img">
                <Image
                  src={img6}
                  alt="Image"
                  className="tiles__line-img"
                ></Image>
              </div>
              <div className="tiles__line-img">
                <Image
                  src={img7}
                  alt="Image"
                  className="tiles__line-img"
                ></Image>
              </div>
              <div className="tiles__line-img">
                <Image
                  src={img8}
                  alt="Image"
                  className="tiles__line-img"
                ></Image>
              </div>
              <div className="tiles__line-img">
                <Image
                  src={img9}
                  alt="Image"
                  className="tiles__line-img"
                ></Image>
              </div>
            </div>
            <div
              className="tiles__line"
              data-scroll
              data-scroll-speed="1"
              data-scroll-target="#grid"
            >
              <div className="tiles__line-img">
                <Image
                  src={img9}
                  alt="Image"
                  className="tiles__line-img"
                ></Image>
              </div>
              <div className="tiles__line-img">
                <Image
                  src={img10}
                  alt="Image"
                  className="tiles__line-img"
                ></Image>
              </div>
              <div className="tiles__line-img">
                <Image
                  src={img11}
                  alt="Image"
                  className="tiles__line-img"
                ></Image>
              </div>
              <div className="tiles__line-img">
                <Image
                  src={img12}
                  alt="Image"
                  className="tiles__line-img"
                ></Image>
              </div>
              <div className="tiles__line-img">
                <Image
                  src={img13}
                  alt="Image"
                  className="tiles__line-img"
                ></Image>
              </div>
              <div className="tiles__line-img">
                <Image
                  src={img19}
                  alt="Image"
                  className="tiles__line-img"
                ></Image>
              </div>
            </div>
            <div
              className="tiles__line"
              data-scroll
              data-scroll-speed="-1"
              data-scroll-target="#grid"
            >
              <div className="tiles__line-img">
                <Image
                  src={img13}
                  alt="Image"
                  className="tiles__line-img"
                ></Image>
              </div>
              <div className="tiles__line-img">
                <Image
                  src={img14}
                  alt="Image"
                  className="tiles__line-img"
                ></Image>
              </div>
              <div className="tiles__line-img">
                <Image
                  src={img15}
                  alt="Image"
                  className="tiles__line-img"
                ></Image>
              </div>
              <div className="tiles__line-img">
                <Image
                  src={img16}
                  alt="Image"
                  className="tiles__line-img"
                ></Image>
              </div>
              <div className="tiles__line-img">
                <Image
                  src={img17}
                  alt="Image"
                  className="tiles__line-img"
                ></Image>
              </div>
            </div>
            <div
              className="tiles__line"
              data-scroll
              data-scroll-speed="1"
              data-scroll-target="#grid"
            >
              <div className="tiles__line-img">
                <Image
                  src={img17}
                  alt="Image"
                  className="tiles__line-img"
                ></Image>
              </div>
              <div className="tiles__line-img">
                <Image
                  src={img18}
                  alt="Image"
                  className="tiles__line-img"
                ></Image>
              </div>
              <div className="tiles__line-img">
                <Image
                  src={img19}
                  alt="Image"
                  className="tiles__line-img"
                ></Image>
              </div>
              <div className="tiles__line-img">
                <Image
                  src={img20}
                  alt="Image"
                  className="tiles__line-img"
                ></Image>
              </div>
              <div className="tiles__line-img">
                <Image
                  src={img1}
                  alt="Image"
                  className="tiles__line-img"
                ></Image>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={transition}
            viewport={{ once: true }}
            className="tiles__title"
          >
            Pixie
          </motion.div>
        </section>
      </main>
    </motion.div>
  );
};

export default Hero;

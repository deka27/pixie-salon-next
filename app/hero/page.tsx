"use client";
import { motion } from "framer-motion";

import React, { useEffect } from "react";
import Image from "next/image";
import img1 from "../media/demo2/1.webp";
import img2 from "../media/demo2/2.webp";
import img3 from "../media/demo2/3.webp";
import img4 from "../media/demo2/4.webp";
import img5 from "../media/demo2/5.webp";
import img6 from "../media/demo2/6.webp";
import img7 from "../media/demo2/7.webp";
import img8 from "../media/demo2/8.webp";
import img9 from "../media/demo2/9.webp";
import img10 from "../media/demo2/10.webp";
import img11 from "../media/demo2/11.webp";
import img12 from "../media/demo2/12.webp";
import img13 from "../media/demo2/13.webp";
import img14 from "../media/demo2/14.webp";
import img15 from "../media/demo2/15.webp";
import img16 from "../media/demo2/16.webp";
import img17 from "../media/demo2/17.webp";
import img18 from "../media/demo2/18.webp";
import img19 from "../media/demo2/19.webp";
import img20 from "../media/demo2/20.webp";

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

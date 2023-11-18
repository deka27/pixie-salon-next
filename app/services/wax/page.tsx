"use client";

import { useEffect, useState } from "react";

import Image, { StaticImageData } from "next/image";
import Bgs from "../../media/bgs.svg";
import image from "../../media/services/wax.jpg";
import iwax from "../../media/icons/waxing.png";
import ithread from "../../media/icons/threading.png";
import ibleach from "../../media/icons/bleaching.png";
import idetan from "../../media/icons/detan.png";

import Dropdown from "../Dropdown";

import { motion } from "framer-motion";

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

interface Service {
  name: string;
  price: string;
}

type Icon = {
  [key: string]: string;
};

type Section = {
  name: string;
  services: Service[];
};

const Service: React.FC<Service> = ({ name, price }) => (
  <ul className="w-full flex justify-between">
    <li>{name}</li>
    <li>₹ {price}</li>
  </ul>
);

const icons: { [key: string]: StaticImageData } = {
  waxing1: iwax,
  waxing2: iwax,
  threading: ithread,
  bleaching: ibleach,
  detan: idetan,
};

export default function Hair() {

  const waxing1: Service[] = [
    { name: "Half Legs", price: "600 (onwards)" },
    { name: "Full Legs", price: "900 (onwards)" },
    { name: "Under Arms", price: "200 (onwards)" },
    { name: "Full Arms", price: "700 (onwards)" },
    { name: "Full Face", price: "500 (onwards)" },
    { name: "Upper lip/Chin", price: "150 (onwards)" },
    { name: "Forehead", price: "100 (onwards)" },
  ];

  const waxing2: Service[] = [
    { name: "Half Front/Back", price: "600 (onwards)" },
    { name: "Full Front", price: "1000 (onwards)" },
    { name: "Full Body", price: "3500 (onwards)" },
    { name: "Stomach", price: "600 (onwards)" },
    { name: "Brazilian", price: "1500 (onwards)" },
    { name: "Bikini line", price: "700 (onwards)" },
    { name: "Burns", price: "200 (onwards)" },
  ];

  const threading: Service[] = [
    { name: "Eyebrow", price: "100 (onwards)" },
    { name: "Forehead", price: "50 (onwards)" },
    { name: "Burns", price: "80 (onwards)" },
    { name: "Upper Lips", price: "40 (onwards)" },
    { name: "Chin", price: "40 (onwards)" },
    { name: "Full Face", price: "250 (onwards)" },
  ];

  const bleaching: Service[] = [
    { name: "Full Body", price: "2500 (onwards)" },    
    { name: "Full Legs", price: "1200 (onwards)" },
    { name: "Full Arms", price: "800 (onwards)" },
    { name: "Half Front / Back", price: "600 (onwards)" },
    { name: "Full Front / Back", price: "1000 (onwards)" },
    { name: "Face & Neck", price: "500 (onwards)" },
  ];

  const detan: Service[] = [
    { name: "Full Body", price: "3000 (onwards)" },    
    { name: "Full Legs", price: "1400 (onwards)" },
    { name: "Full Arms", price: "1000 (onwards)" },
    { name: "Half Front / Back", price: "800 (onwards)" },
    { name: "Full Front / Back", price: "1200 (onwards)" },
    { name: "Face & Neck", price: "600 (onwards)" },
  ];

  const sections: { [key: string]: Section } = {
    waxing1: {
      name: "Waxing - 1",
      services: waxing1,
    },
    waxing2: {
      name: "Waxing - 2",
      services: waxing2,
    },
    threading: {
      name: "Threading",
      services: threading,
    },
    bleaching: {
      name: "Bleaching",
      services: bleaching,
    },
    detan: {
      name: "De-Tan",
      services: detan,
    },
  };

  const [activeSection, setActiveSection] = useState<string>("waxing1");

  const handleClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="w-full h-full">
      <Image
        src={Bgs}
        alt=""
        className="w-full h-full object-cover opacity-60 absolute"
      ></Image>

      <div className="w-full flex flex-col xl:flex-row">

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={transition}
          viewport={{ once: true }}
          className="w-full xl:w-2/6 h-[200px] xl:h-full"
        >
          <div className="z-10 absolute text-lg md:text-4xl w-fit font-medium mt-4 xl:mt-8 bg-black p-3 md:p-6 rounded-e-md shadow-xl">
            Hair Removal
          </div>
          <Image
            src={image}
            alt="hair"
            className="object-cover w-full h-full opacity-90"
          ></Image>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100  }}
          whileInView={{ opacity: 1, y: 0  }}
          transition={transition}
          viewport={{ once: true }}
          className="w-full xl:w-4/6 h-full z-10 flex flex-col"
        >
          <div className="m-8 flex justify-between flex-col md:flex-row">
            <div className="flex justify-end md:hidden md:justify-end mb-6"><Dropdown/></div>
            <div className="text-white text-3xl font-medium">Hair Removal Services</div>
            <div className="justify-start hidden md:flex md:justify-end"><Dropdown/></div>
          </div>

          <div className="max-w-xs h-[2px] bg-white shadow-lg ml-8"></div>

          <div className="flex flex-col p-6 gap-6">

            <div className="max-w-full h-full flex flex-row xl:gap-6 flex-wrap">
              {Object.keys(sections).map((section) => (
                <motion.button
                  initial={{ opacity: 0, y: 100  }}
                  whileInView={{ opacity: 1, y: 0  }}
                  whileHover={{scale: 1.06}}
                  transition={transition}
                  viewport={{ once: true }}
                  key={section}
                  title={section}
                  className={`rounded-xl p-4 w-1/3 md:w-[15%] lg:w-[10%] xl:w-[10%] h-auto ${
                    activeSection === section ? "opacity-100" : "opacity-80"
                  }`}
                  onClick={() => handleClick(section)}
                >
                  <div className="text-xs md:text-sm xl:text-md p-1">{sections[section].name}</div>
                  <div
                    className={`bg-white p-3 rounded-xl ${
                      activeSection === section
                        ? "border-2 border-rose-400"
                        : ""
                    }`}
                  >
                    <Image
                      src={icons[section]}
                      alt={section}
                      className={`object-cover w-full h-full opacity-90 p-1`}
                    ></Image>
                  </div>
                </motion.button>
              ))}
            </div>

            <div className="w-full h-full relative">
              {Object.keys(sections).map((section) => (
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={transition}
                  viewport={{ once: true }}
                  key={section}
                  id={section}
                  className={`w-full h-full overflow-hidden ${activeSection === section ? "" : "hidden"}`}
                >
                  <div className="text-2xl font-bold">
                    {sections[section].name}
                  </div>
                  <div className="w-full h-1 bg-white my-4 rounded-lg"></div>
                  <div className="my-6 text-xs sm:text-sm md:text-xl space-y-10 p-2">
                    {sections[section].services.map((service, index) => (
                      <Service key={index} {...service} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}

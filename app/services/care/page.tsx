"use client";

import { useState } from "react";

import Image, { StaticImageData } from "next/image";
import Bgs from "../../media/bgs.svg";
import image from "../../media/services/mani.jpg";
import ipedi from "../../media/icons/pedi.png";
import inail from "../../media/icons/nails.png";


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
  manipedi: ipedi,
  nails: inail,
};

export default function Hair() {

  const manipedi: Service[] = [
    { name: "Pixie Signature Pedicure", price: "1500 (onwards)" },
    { name: "Pixie Signature Manicure", price: "1200 (onwards)" },
    { name: "Regular Pedicure", price: "800 (onwards)" },
    { name: "Regular Manicure", price: "700 (onwards)" },
  ];

  const nails: Service[] = [
    { name: "Re-shaped, Re-buff & Re-varnish", price: "200 (onwards)" },
    { name: "Change of Nail Polish", price: "150 (onwards)" },
    { name: "French Nail Paint", price: "200 (onwards)" },
    { name: "Gel Polish", price: "~" },
  ];


  const sections: { [key: string]: Section } = {
    manipedi: {
      name: "ManiPedi",
      services: manipedi,
    },
    nails: {
      name: "Nail Care",
      services: nails,
    },
  };

  const [activeSection, setActiveSection] = useState<string>("manipedi");

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
            Care
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
            <div className="text-white text-3xl font-medium">Hands & Feet Care</div>
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

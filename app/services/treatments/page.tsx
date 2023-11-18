"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";

import Bgs from "../../media/bgs.svg";
import image from "../../media/services/treat.jpg";
import itreat from "../../media/icons/treatments.png";
import imassage from "../../media/icons/massage.png";

import { AiFillInfoCircle } from "react-icons/ai";
import Dropdown from "../Dropdown";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const notify = (description:string) =>
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-xs md:max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="text-black md:text-sm">{description}</div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full h-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Close
        </button>
      </div>
    </div>
  ));


const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

interface Service {
  name: string;
  price: string;
  description: string;
}

type Icon = {
  [key: string]: string;
};

type Section = {
  name: string;
  services: Service[];
};

const Service: React.FC<Service> = ({ name, price, description }) => (
  <ul className="w-full flex justify-between">
    <div className="flex justify-center items-center gap-3">
      {name}
      <button id="description" onClick={() => notify(description)}>
        <AiFillInfoCircle />
      </button>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
    <div>₹ {price}</div>
  </ul>
);


const icons: { [key: string]: StaticImageData } = {
  treatments: itreat,
  massage: imassage,
};

export default function Hair() {

  const treatments: Service[] = [
    {
      name: "OLAPLEX - Stand Alone Treatment",
      price: "3000 (onwards)",
      description: "Begin the process of preventing damage and repairing hair with this bond multiplying treatment. Restores compromised hair and provides ultimate breakage insurance.",
    },
    {
      name: "OLAPLEX - Add-on with color",
      price: "1000 (onwards)",
      description: "Maintains the strength, structure, integrity of the hair that has been exposed to chemical, thermal or mechanical processes.",
    },
    {
      name: "Express Ritual",
      price: "2000 (onwards)",
      description: "A complete hair & Scalp Indulgence combining precise doses of advanced hair care formulation with the absolute well being of a unique therapeutic massage.",
    },
    {
      name: "Experience Ritual",
      price: "2000 (onwards)",
      description: "A comprehensive hair therapy for days when you are a little short on time. Express ritual gives your hair the vital attention it requires.",
    },
    {
      name: "Instant Conditioning Booster Dose",
      price: "800 (onwards)",
      description: "Instant Conditioning for your hair fibre. The perfect accompaniment during your regular salon visits.",
    },
    {
      name: "L’oreal Spa",
      price: "1200 (onwards)",
      description: "A hair & scalp treatment with your well being in mind - the L’Oreal Professional hair spa treats various hair & scalp conditions while providing a highly sensorial & relaxing.",
    },
    {
      name: "Mythic Oil",
      price: "1800 (onwards)",
      description: "A legendary hair care range empowered with nature’s best kept & most powerful secret - oils. The key to richsensorial, deep nourishment & magical  shine - Mythic Oil is the ultimate beauty secret, waiting to be unlocked by you!",
    },
    {
      name: "Gent Scalp Therapy",
      price: "1000 (onwards)",
      description: "Express Treatment against Thinning, Dandruff, Itchiness and Burning.",
    }
  ];

  const massage: Service[] = [
    {
      name: "Head Massage",
      price: "500 (onwards)",
      description: "An intense head massage, dry or with oil that will leave you relaxed & rejuvenated.",
    },
    {
      name: "Foot Massage",
      price: "600 (onwards)",
      description: "Foot therapeutic massage",
    },
  ];

  const sections: { [key: string]: Section } = {
    treatments: {
      name: "Treatments",
      services: treatments,
    },
    massage: {
      name: "Massage",
      services: massage,
    },
  };

  const [activeSection, setActiveSection] = useState<string>("treatments");

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
            Treatments
          </div>
          <Image
            src={image}
            alt="hair"
            className="object-cover w-full h-full opacity-90"
          ></Image>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
          viewport={{ once: true }}
          className="w-full xl:w-4/6 h-full z-10 flex flex-col"
        >
          <div className="m-8 flex justify-between flex-col md:flex-row">
            <div className="flex justify-end md:hidden md:justify-end mb-6">
              <Dropdown />
            </div>
            <div className="text-white text-3xl font-medium">
            Treatment Services
            </div>
            <div className="justify-start hidden md:flex md:justify-end">
              <Dropdown />
            </div>
          </div>

          <div className="max-w-xs h-[2px] bg-white shadow-lg ml-8"></div>

          <div className="flex flex-col p-6 gap-6">
            <div className="max-w-full h-full flex flex-row xl:gap-6 flex-wrap">
              {Object.keys(sections).map((section) => (
                <motion.button
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.06 }}
                  transition={transition}
                  viewport={{ once: true }}
                  key={section}
                  title={section}
                  className={`rounded-xl p-4 w-1/3 md:w-[15%] lg:w-[10%] xl:w-[10%] h-auto ${
                    activeSection === section ? "opacity-100" : "opacity-80"
                  }`}
                  onClick={() => handleClick(section)}
                >
                  <div className="text-xs md:text-sm xl:text-md p-1">
                    {sections[section].name}
                  </div>
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
                  className={`w-full h-full overflow-hidden ${
                    activeSection === section ? "" : "hidden"
                  }`}
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

'use client'

import Image from "next/image";
import Bgs from "../media/bgs.svg";
import hair from "../media/services/hair.jpg";
import skin from "../media/services/skin.jpg";
import mani from "../media/services/mani.jpg";
import treat from "../media/services/treat.jpg";
import wax from "../media/services/wax.jpg";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };


export default function page() {
  return (
    <div className="w-full h-screen">
      <Image
        src={Bgs}
        alt=""
        className="w-full h-full object-cover opacity-60 absolute"
      ></Image>

      <AnimatePresence mode="wait">

      <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={transition}
      viewport={{ once: true }} 
      className="w-full h-screen flex flex-col lg:flex-row gap-5 p-10 z-10 relative">
        
        <motion.div        
        whileHover={{scale: 1.03}}
        transition={transition}        
        className="w-full lg:w-1/5 h-2/6 lg:h-[90%] relative rounded-lg">
          <Link href="/services/hair" className="w-full h-full absolute no-underline">
          <Image src={hair} alt="hair" className="object-cover w-full h-full absolute opacity-90 rounded-lg"></Image>
          <div className="z-10 relative text-lg md:text-4xl w-fit font-medium bg-black mt-4 md:mt-8 p-3 md:p-6 rounded-e-md shadow-xl">Hair</div>
          </Link>
        </motion.div>


        <motion.div
        whileHover={{scale: 1.03}}
        transition={transition}
        className="w-full lg:w-1/5 h-2/6 lg:h-[90%] relative rounded-lg">
          <Link href="/services/care" className="w-full h-full absolute no-underline">
          <Image src={mani} alt="mani" className="object-cover w-full h-full absolute opacity-90 rounded-lg"></Image>
          <div className="z-10 relative text-lg md:text-4xl w-fit font-medium bg-black mt-4 md:mt-8 p-3 md:p-6 rounded-e-md shadow-xl">Care</div>
          </Link>
        </motion.div>

        <motion.div
        whileHover={{scale: 1.03}}
        transition={transition} 
        className="w-full lg:w-1/5 h-2/6 lg:h-[90%] relative rounded-lg">
          <Link href="/services/skin" className="w-full h-full absolute no-underline">
          <Image src={skin} alt="skin" className="object-cover w-full h-full absolute opacity-90 rounded-lg"></Image>
          <div className="z-10 relative text-lg md:text-4xl w-fit font-medium bg-black mt-4 md:mt-8 p-3 md:p-6 rounded-e-md shadow-xl">Skin</div>
          </Link>
        </motion.div>

        <motion.div
        whileHover={{scale: 1.03}}
        transition={transition}
        className="w-full lg:w-1/5 h-2/6 lg:h-[90%] relative rounded-lg">
          <Link href="/services/treatments" className="w-full h-full absolute no-underline">
          <Image src={treat} alt="treat" className="object-cover w-full h-full absolute opacity-90 rounded-lg"></Image>
          <div className="z-10 relative text-lg md:text-4xl w-fit font-medium bg-black mt-4 md:mt-8 p-3 md:p-6 rounded-e-md shadow-xl">Treatments</div>
          </Link>
        </motion.div>  

        <motion.div 
        whileHover={{scale: 1.03}}
        transition={transition}
        className="w-full lg:w-1/5 h-2/6 lg:h-[90%] relative rounded-lg">
          <Link href="/services/wax" className="w-full h-full absolute no-underline">
          <Image src={wax} alt="wax" className="object-cover w-full h-full absolute opacity-90 rounded-lg"></Image>
          <div className="z-10 relative text-lg md:text-4xl w-fit font-medium bg-black mt-4 md:mt-8 p-3 md:p-6 rounded-e-md shadow-xl">Hair Removal</div>
          </Link>
        </motion.div>

      </motion.div>

      </AnimatePresence>
      
    </div>
  );
}

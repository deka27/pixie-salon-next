"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    url: "/",
  },
  {
    id: "about",
    title: "About",
    url: "/about",
  },
  {
    id: "team",
    title: "Team",
    url: "/team",
  },
  {
    id: "services",
    title: "Services",
    url: "/services",
  },
  {
    id: "booking",
    title: "Booking",
    url: "/booking",
  },
  {
    id: "contact",
    title: "Contact",
    url: "/contact",
  },
];

export default function Header() {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      <div
        className="w-full bg-black flex p-6 justify-between items-center navbar shadow-xl"        
      >
        {/* Logo */}
        <Link href="/" className="no-underline"><div className="text-3xl text-white flex font-bold gap-2">Pixie</div></Link>
        

        {/* Desktop Navigation */}
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`${nav.url}`} className="no-underline">
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div
            className="w-[28px] h-[28px] object-contain flex justify-center items-center"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <AiOutlineClose /> : <HiMenuAlt3 />}
          </div>

          {/* Sidebar */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black absolute top-20 right-0 mx-4 my-4 min-w-[140px] rounded-xl sidebar z-50 transition-all ease-in-out border border-white`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`${nav.url}`} className="no-underline">
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-[2px] bg-white shadow-lg"></div>
    </div>
  );
}

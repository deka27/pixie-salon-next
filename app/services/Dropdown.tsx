'use client';

import React, { useState } from "react";
import Link from "next/link";

export default function Dropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
        type="button"
      >
        Other Sections{" "}
        <svg
          className={`w-2.5 h-2.5 ml-2.5 transition-transform ${
            isDropdownOpen ? "transform rotate-180" : ""
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round" 
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isDropdownOpen && (
        <div className="absolute z-10 mt-2 right-0 divide-y rounded-lg shadow w-44 bg-gray-700 divide-gray-600">
          
          <ul
            className="py-2 text-sm text-gray-200"
            aria-labelledby="dropdownDividerButton"
          >
            <li>
              <Link
                href="/services/hair"
                className="block px-4 py-2 hover:bg-gray-600 hover:text-white no-underline"
              >
                Hair
              </Link>
            </li>
            <li>
              <Link
                href="/services/care"
                className="block px-4 py-2  hover:bg-gray-600 hover:text-white no-underline"
              >
                Care
              </Link>
            </li>
            <li>
              <Link
                href="/services/skin"
                className="block px-4 py-2 hover:bg-gray-600 hover:text-white no-underline"
              >
                Skin
              </Link>
            </li>
            <li>
              <Link
                href="/services/treatments"
                className="block px-4 py-2 hover:bg-gray-600 hover:text-white no-underline"
              >
                Treatments
              </Link>
            </li>
            <li>
              <Link
                href="/services/wax"
                className="block px-4 py-2 hover:bg-gray-600 hover:text-white no-underline"
              >
                Hair Removal
              </Link>
            </li>
          </ul>

          <div className="py-2">
            <a
              href="/services"
              className="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white no-underline"
            >
              Back to All Services
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

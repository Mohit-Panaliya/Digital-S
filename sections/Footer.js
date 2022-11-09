import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="px-10 bg-[#4F474E] text-white justify-content-center flex flex-col border-2 z-0 p-4 items-start sm:flex-row sm:justify-around">
        <div 
            className="mx-auto sm:hidden"
            >
          <Image
            src="/fav/logo.svg"
            width={150}
            height={60}
          />
        </div>

        <div className="border-2 flex-col flex px-4">
          <div
          className="hidden sm:block">
          <Image
            
            src="/fav/logo.svg"
            width={150}
            height={60}
          />

          </div>
          

          <a>93200 Saint Denis, France</a>
          <a>395004 Avlon Business Hub Surat, India</a>
          <a> +91-8777457365</a>
          <a> contact@digital-sweep.com</a>
        </div>
        <h1 className="text-xl py-4 mx-auto sm:hidden">Services</h1>
        <div className="border-2 flex-col flex px-4">
          <h1 className="text-xl py-4 hidden  sm:block">Services</h1>

          <a>SAP Consulting and Integration</a>
          <a>SAP Support and Maintainance</a>
          <a>SAP Business Analytics</a>
        </div>
        <h1 className="text-xl py-4 mx-auto sm:hidden">About</h1>
        <div className="border-2 flex-col flex px-4">
          <h1 className="text-xl py-4 hidden sm:block">About</h1>

          <a>Our Company</a>
          <a>Our Mission, Vision & Values </a>
        </div>
        <h1 className="text-xl py-4 mx-auto sm:hidden">Quick Links</h1>
        <div className="border-2 flex-col flex px-4">
          <h1 className="text-xl py-4 hidden sm:block">Quick Links</h1>

          <a>Home</a>
          <a>Contact Us</a>
        </div>
      </footer>

      <div className="bg-[#4F474E] flex flex-col py-2">
        <div className="logos place-items-center">
          <span className="flex place-content-center py-2">
            <a className="facebook text-white">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-white">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-white">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-white">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
        <div className="text-white text-center py-4">
          Digital-Sweep-2021© All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;

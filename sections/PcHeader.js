import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  let sub = React.createRef();

  function submenu() {
    sub.current.classList.toggle("hidden");
  }
  function submenuopen() {
    sub.current.classList.toggle("hidden");
  }
  

  let subsub = React.createRef();

  function subsubmenu() {
    subsub.current.classList.toggle("hidden");
  }
  function subsubmenuopen() {
    subsub.current.classList.toggle("hidden");
  }
 
  return (
    <div>
      <header className="bg-slate-200 h-[10vh] hidden sm:flex">
        <div className="logo ml-10 self-center ">
          <Image
            className=""
            src="/fav/logo.svg"
            alt="Picture of the author"
            width={150}
            height={60}
          />
        </div>
        <nav className="ml-auto self-center mr-12">
          <ul className="space-x-10">
            <Link href="/home">
              <a>Home </a>
            </Link>
            <Link href="">
              <a className="" >
                Services
                <span className="ml-5">
                  <Image
                    onClick={submenu}
                    onMouseOver={submenuopen}
                    src="/header/down.svg"
                    alt="Picture of the author"
                    width={15}
                    height={15}
                  />
                </span>
              </a>
            </Link>
            <ul className="hidden absolute flex flex-col mt-5 right-80 space-y-5 p-3 " ref={sub}>
              <Link href="">
                <a>
                  SAP Consulting & Integration
                  <span className="ml-5">
                    <Image
                      onClick={subsubmenu}
                      onMouseOver={subsubmenuopen}
                      
                      src="/header/down.svg"
                      alt="Picture of the author"
                      width={15}
                      height={15}
                    />
                  </span>
                </a>
                </Link>
                <ul
                className="hidden flex flex-col absolute top-[-1rem] right-[-12rem] p-3 space-y-5"
                ref={subsub}
              >
                <Link href="">
                  <a>SAP HANA</a>
                </Link>
                <Link href="">
                  <a>SAP S/4 HANA</a>
                </Link>
                <Link href="">
                  <a>SAP Business Analytics</a>
                </Link>
              </ul>
              <Link href="">
                <a>SAP Support and Maintainance</a>
              </Link>
              <Link href="">
                <a>Business Analytics</a>
              </Link>
            </ul>
            <Link href="/about">
              <a>About Us</a>
            </Link>
            <Link href="/contact">
              <a>Contact Us</a>
            </Link>
            <Link href="">
              <a>Inquiry</a>
            </Link>
          </ul>
        </nav>
        <div className="mode self-center mr-5">
          <Image
            src="/header/moon.svg"
            alt="Picture of the author"
            width={30}
            height={30}
          />
          <Image
            src="/header/sun.svg"
            alt="Picture of the author"
            width={30}
            height={30}
          />
        </div>
      </header>
    </div>
  );
};

export default Header;

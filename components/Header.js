import React from "react";
import Link from "next/link";
import Image from "next/image";


const Header = () => {
  let mainmenu = React.createRef();
  function hambtn() {
    mainmenu.current.classList.remove("translate-x-[-100%]");
  }

  function mainmenubtn() {
    mainmenu.current.classList.add("translate-x-[-100%]");
  }

  let sub = React.createRef();

  function submenu() {
    sub.current.classList.toggle("hidden");
  }
  let subsub = React.createRef();

  function subsubmenu() {
    subsub.current.classList.toggle("hidden");
  }

  return (
    <div>
      <header className="bg-slate-200 h-[10vh] hidden sm:block ">
        <div className="logo h-[8vh]">
          <Image
            className=""
            src="/fav/logo.svg"
            alt="Picture of the author"
            width={200}
            height={100}
          />
        </div>
        <nav className="ml-auto">
          <ul className="space-x-10">
            <Link href="">
              <a>Home </a>
            </Link>
            <Link href="">
              <a>
                Services
                <Image
                  src="/header/down.svg"
                  alt="Picture of the author"
                  width={15}
                  height={15}
                />
              </a>
            </Link>
            <ul className="hidden">
              <Link href="">
                <a>
                  SAP Consulting & Integration
                  <Image
                    src="/header/down.svg"
                    alt="Picture of the author"
                    width={10}
                    height={10}
                  />
                </a>
              </Link>

              <ul className="hidden">
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
            <Link href="">
              <a>About Us</a>
            </Link>
            <Link href="">
              <a>Contact Us</a>
            </Link>
            <Link href="">
              <a>Inquiry</a>
            </Link>
          </ul>
        </nav>
        <div className="mode">
          <Image
            src="/header/moon.svg"
            alt="Picture of the author"
            width={50}
            height={50}
          />
          <Image
            src="/header/sun.svg"
            alt="Picture of the author"
            width={50}
            height={50}
          />
        </div>
      </header>
      <header className="bg-slate-300 h-[10vh] sm:hidden ">
        <div className="flex">
          <div className="logo h-[8vh]">
            <Image
              className=""
              src="/fav/logo.svg"
              alt="Picture of the author"
              width={100}
              height={100}
            />
          </div>
          <div className="mode ml-auto">
            <Image
              src="/header/moon.svg"
              alt="Picture of the author"
              width={50}
              height={50}
            />
            <Image
              src="/header/sun.svg"
              alt="Picture of the author"
              width={50}
              height={50}
            />
          </div>
          <div className="" onClick={hambtn}>
            <svg
              class="ham ml-auto mr-5 sm:hidden mt-[2.5vh]"
              viewBox="0 0 100 80"
              width="40"
              height="40"
              fill="#fff"
            >
              <rect width="100" height="10"></rect>
              <rect y="30" width="70" height="10"></rect>
              <rect y="60" width="100" height="10"></rect>
            </svg>
          </div>
        </div>

        <nav
          className="bg-red-300 h-[100vh] w-[100vw] absolute top-0 translate-x-[-100%] transition-transform animate-none ease-in-out "
          ref={mainmenu}
        >
          <ul className="mt-10 flex flex-col space-y-5  text-center">
            <a href="" className="absolute top-0 right-0">
              <Image
                onClick={mainmenubtn}
                src="/header/cross.svg"
                alt="Picture of the author"
                width={15}
                height={15}
              />
            </a>
            <Link href="">
              <a>Home </a>
            </Link>
            <Link href="">
              <a>
                Services
                <Image
                  onClick={submenu}
                  src="/down.svg"
                  alt="Picture of the author"
                  width={15}
                  height={15}
                />
              </a>
            </Link>

            <ul className="hidden flex flex-col space-y-5" ref={sub}>
              <Link href="">
                <a>
                  SAP Consulting & Integration
                  <Image
                    onClick={subsubmenu}
                    src="/down.svg"
                    alt="Picture of the author"
                    width={10}
                    height={10}
                  />
                </a>
              </Link>

              <ul className="hidden flex flex-col space-y-5" ref={subsub}>
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
            <Link href="">
              <a>About Us</a>
            </Link>
            <Link href="">
              <a>Contact Us</a>
            </Link>
            <Link href="">
              <a>Inquiry</a>
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;

import React from "react";
import Link from "next/link";
import Image from "next/image";

const MobileHeader = () => {
    let mainmenu = React.createRef();
    function hambtn() {
      mainmenu.current.classList.toggle("translate-x-[-100%]");
    }
  
    function mainmenubtn() {
      mainmenu.current.classList.toggle("translate-x-[-100%]");
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
        <header className="bg-slate-300 dark:bg-orange-200 h-[10vh] align-middle sm:hidden ">
        <div className="flex ">
          <div className="logo">
            <Image
              className="self-center"
              src="/fav/logo.svg"
              alt="Picture of the author"
              width={150}
              height={60}
            />
          </div>

          <div className="self-center ml-auto mr-5 inline" onClick={hambtn}>
            <svg
              
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
          className="bg-red-400 h-[100vh] w-[100vw] absolute top-0  translate-x-[-100%]"
          ref={mainmenu}
        >
          <ul className="mt-10 flex flex-col space-y-10  text-center " >
            <a className="absolute top-0 right-0 mt-5 mr-5">
              <Image
                onClick={mainmenubtn}
                src="/header/cross.svg"
                alt="Picture of the author"
                width={35}
                height={35}
              />
            </a>
            <Link href="">
              <a>Home </a>
            </Link>
            <Link href="">
              <a>
                Services
              <span className='ml-5'>
                  <Image
                  onClick={submenu}
                  src="/header/down.svg"
                  alt="Picture of the author"
                  width={15}
                  height={15}
                /></span>
              </a>
            </Link>

            <ul className="hidden flex flex-col space-y-5" ref={sub}>
              <Link href="">
                <a>
                  SAP Consulting & Integration
                <span className="ml-5">
                    
                      <Image
                    onClick={subsubmenu}
                    src="/header/down.svg"
                    alt="Picture of the author"
                    width={15}
                    height={15}
                  /></span>
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
  )
}

export default MobileHeader
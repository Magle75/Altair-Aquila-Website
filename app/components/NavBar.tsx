"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About Altair", link: "/About" },
    { name: "Gallery", link: "/Gallery" },

  ];

  let [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <div
        className={`shadow-md w-full fixed top-0 left-0 transition-all mb-4 ease-in ${
          scrolling
            ? "transform translate-y-[-100%] opacity-0"
            : "transform translate-y-0 opacity-100"
        }`}
      >
        <div className="md:flex items-center justify-between bg-blue-600 py-0 md:py-0 px-10">
          <Link href="/">
              <Image src="/Navaltair.png" alt="" width={145} height={145} />
          </Link>
          <div
            onClick={() => setOpen(!open)}
            className="text-2xl absolute right-8 top-1 cursor-pointer md:hidden"
          >
            {" "}
            {open ? (
              <XMarkIcon className="h-20 w-20 text-white" />
            ) : (
              <Bars3Icon className="h-20 w-20 text-white" />
            )}
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  bg-blue-600 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-30 opacity-100" : "top-[-490px]"
            } md:opacity-100 opacity-0`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md: ml-8 text-2xl md: my-7">
                <a
                  href={link.link}
                  className="text-white hover:text-yellow-300 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

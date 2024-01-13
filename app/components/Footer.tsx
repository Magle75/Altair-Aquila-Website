import React from "react";
import Image from "next/image";
import {
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaFacebook,
  FaDiscord,
} from "react-icons/fa6";

let Links = [
  { name: "Home", link: "/" },
  { name: "About Altair", link: "/About" },
  { name: "Gallery", link: "/Gallery" },
];

const Footer = () => {
  return (
    <footer className="relative bg bg-blue-600">
      <div className="grid lg:grid-cols-3 gap-10 sm:grid-cols-1 p-8">
        <div className="flex flex-col">
          <Image src="/Navaltair.png" alt="" width={300} height={100} />
        </div>
        <div className="flex flex-col gap-5">
          <ul className="">
            {Links.map((link) => (
              <li key={link.name} className="md: ml-8 text-xl md: my-4">
                <a
                  href={link.link}
                  className="text-white hover:text-yellow-400 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-[22px] font-semibold text-white py-2 uppercase">
            Find me at
          </h2>
          <div className="flex space-x-4">
            <a
              className="text-white hover:text-yellow-400 transform hover:scale-150 
                            transition-all duration-150 ease-in-out"
              href="https://www.instagram.com/altairvtuber/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={30} />
            </a>
            <a
              className="text-white hover:text-yellow-400 transform hover:scale-150
                             transition-all duration-150 ease-in-out"
              href="https://www.youtube.com/@AltairAquila/streams"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={30} />
            </a>
            <a
              className="text-white hover:text-yellow-400 transform hover:scale-150
                             transition-all duration-150 ease-in-out"
              href="https://twitter.com/altairvtuber"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter size={30} />
            </a>
            <a
              className="text-white hover:text-yellow-400 transform hover:scale-150
                             transition-all duration-150 ease-in-out"
              href="https://www.facebook.com/profile.php?id=100088547275880"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={30} />
            </a>
            <a
              className="text-white hover:text-yellow-400 transform hover:scale-150
                             transition-all duration-150 ease-in-out"
              href="https://discord.com/invite/dzQk7Z6M8T"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord size={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

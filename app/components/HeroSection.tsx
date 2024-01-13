"use client"; 
import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const HeroSection = () => {
  const gambarData = [
    {
      image: "/Altair1.png",
    },
    {
      image: "/Altair2.png",
    },
    {
      image: "/Altair3.png",
    },
    {
      image: "/Altair4.png",
    },
  ];

  const [indexSekarang, setIndexSekarang] = useState(0);

  const slideSebelum = () => {
    const iniSlidePertama = indexSekarang === 0;
    const indexBaru = iniSlidePertama ? gambarData.length - 1 : indexSekarang - 1;
    setIndexSekarang(indexBaru);
  };

  const slideSesudah = () => {
    const iniSlideTerakhir = indexSekarang === gambarData.length - 1;
    const indexBaru = iniSlideTerakhir ? 0 : indexSekarang + 1;
    setIndexSekarang(indexBaru);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      slideSesudah(); // Panggil fungsi slideSesudah setiap 5 detik
    }, 5000);

    return () => clearInterval(intervalId); // Membersihkan interval saat komponen unmount
  }, [indexSekarang]); // Memicu efek hanya saat indexSekarang berubah

  return (
     <div className="max-w-[1920px] h-[640px] w-full relative group overflow-hidden">
      <div
        style={{ backgroundImage: `url(${gambarData[indexSekarang].image})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      ></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer transition-transform ease-in-out transform hover:translate-x-[10px]">
        <IoIosArrowBack onClick={slideSebelum} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer transition-transform ease-in-out transform hover:translate-x-[-10px]">
        <IoIosArrowForward onClick={slideSesudah} size={30} />
      </div>
    </div>
  );
};

export default HeroSection;

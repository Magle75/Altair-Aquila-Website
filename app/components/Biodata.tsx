"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Biodata = () => {
  const imageData = [
    {
      image: "/biodata1.jpg",
    },
    {
      image: "/biodata-2.png",
    },
    {
      image: "/biodata-3.jpg",
    },
  ];

  const [indexSekarang, setIndexSekarang] = useState(0);

  const slideSebelum = () => {
    const iniSlidePertama = indexSekarang === 0;
    const indexBaru = iniSlidePertama
      ? imageData.length - 1
      : indexSekarang - 1;
    setIndexSekarang(indexBaru);
  };

  const slideSesudah = () => {
    const iniSlideTerakhir = indexSekarang === imageData.length - 1;
    const indexBaru = iniSlideTerakhir ? 0 : indexSekarang + 1;
    setIndexSekarang(indexBaru);
  };

  const [ref, inView] = useInView({
    triggerOnce: true, // Animasi hanya dijalankan sekali
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      slideSesudah(); // Panggil fungsi slideSesudah setiap 5 detik
    }, 5000);

    return () => clearInterval(intervalId); // Membersihkan interval saat komponen unmount
  }, [indexSekarang]); // Memicu efek hanya saat indexSekarang berubah

  return (
    <motion.div
      className="className='flex justify-start gap-5 py-4 px-10 relative group overflow-hidden"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <img
        src={imageData[indexSekarang].image}
        alt=""
        className="w-auto h-auto object-cover duration-500 rounded-[120px]"
        width={700}
        height={300}
      />
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-12 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer transition-transform ease-in-out transform hover:translate-x-[10px]">
        <IoIosArrowBack onClick={slideSebelum} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-12 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer transition-transform ease-in-out transform hover:translate-x-[-10px]">
        <IoIosArrowForward onClick={slideSesudah} size={30} />
      </div>
    </motion.div>
  );
};

export default Biodata;

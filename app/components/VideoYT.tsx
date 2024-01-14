"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const VideoYT = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animasi hanya dijalankan sekali
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <motion.div
      className=" relative mb-4 "
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <h1 className="font-bold text-3xl mb-6 text-center">
        <span className="border-b border-white text-white">Uploaded Videos</span>
      </h1>
      <div className="grid lg:grid-cols-3 gap-16 sm:grid-cols-1 justify-items-center px-[6px]">
        <div className="flex flex-col ">
          <iframe
            className="rounded-lg"
            width="400"
            height="250"
            src="https://www.youtube.com/embed/5ATfnjjGpEk?si=xfgwrVXkORIcEpQJ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="flex flex-col ">
          <iframe
            className="rounded-lg"
            width="400"
            height="250"
            src="https://www.youtube.com/embed/iXNVg6eY4mw?si=PwsefeGO8u8c7EDU"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="flex flex-col ">
          <iframe
            className="rounded-lg"
            width="400"
            height="250"
            src="https://www.youtube.com/embed/QBV2uYi5On0?si=6ULHuvPmncQhkPj0" 
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        
      </div>
    </motion.div>
  );
};

export default VideoYT;

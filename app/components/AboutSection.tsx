"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import ImageShow from "./ImageShow";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [ref, inView] = useInView({
    triggerOnce: true, // Animasi hanya dijalankan sekali
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };
  return (
    <>
      <motion.div
        className="flex items-center justify-center flex-col mt-14 relative"
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <div>
          <Image
            src="/altair-model-1-half.png"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div className="absolute right-0 bottom-0 p-4 px-10 mb-10">
          <button
            onClick={openModal}
            className="bg-blue-500 text-white text-2xl px-4 py-2 rounded-lg"
          >
            Lihat Detail
          </button>
          <AnimatePresence>
            {isModalOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 left-0 w-full h-full px-4 sm:px-8 lg:px-16 xl:px-32 bg-black bg-opacity-50 flex items-center justify-center"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-y-auto bg-white p-8 rounded-lg w-full lg:w-4/5 xl:w-4/5 flex items-center justify-center flex-col"
                >
                  {/* Content of your description modal */}
                  <motion.div className="mb-4">
                    <Image
                      src="/Navaltair.png"
                      alt=""
                      width={200}
                      height={200}
                    />
                  </motion.div>
                  <motion.div className="text-center">
                    <h1 className="pb-4 text-blue-400 text-2xl font-bold">
                      Altair Aquila
                    </h1>
                    <h2 className="pb-4 text-xl text-slate-500 font-bold">
                      Race :  Star
                    </h2>
                    <h2 className="pb-4 text-xl text-slate-500 font-bold">
                      Height : 158cm
                    </h2>
                    <h2 className="pb-4 text-xl text-slate-500 font-bold">
                      Weight : 40kg
                    </h2>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="pb-4 text-xl font-bold"
                    >
                      Altair, also known as Aru; the brightest eagle star in the
                      Aquila constellation is ready to grant your wish ✨ You
                      can call me Aru (アルテア) or Al Yoroshiku! ✨ 🦅
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="pb-4 text-xl font-bold text-slate-500"
                    >
                      Illustrator :
                      <a
                        href="https://twitter.com/cleempusa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline hover:text-blue-600"
                      >
                        Cleempusa Vc
                      </a>
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="pb-4 text-xl font-bold text-slate-500"
                    >
                       live2d :
                      <a
                        href="https://twitter.com/Dnyprogy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline hover:text-blue-600"
                      >
                        Dnyprogy
                      </a>
                    </motion.p>
                  </motion.div>
                  <motion.button
                    onClick={closeModal}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded w-full sm:w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Close
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
      <div className="my-6">
        <ImageShow />
      </div>
    </>
  );
};

export default AboutSection;

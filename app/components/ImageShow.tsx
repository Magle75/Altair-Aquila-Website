"use client";
import React from "react";
import { useState } from "react";
import ImageLogic from "./ImageLogic";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const images = [
  "/altair-model-3.png",
  "/altair-model-4.png",
  "/altair-model-5.png",
  "/altair-model-6.png",
  "/altair-model-7.png",
];

const ImageShow: React.FC = () => {
  const [mainImage, setMainImage] = useState(images[0]);

  const handleImageClick = (selectedImage: string) => {
    setMainImage(selectedImage);
  };

  const [ref, inView] = useInView({
    triggerOnce: true, // Animasi hanya dijalankan sekali
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <motion.div
    
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <ImageLogic
        mainImage={mainImage}
        images={images}
        onImageClick={handleImageClick}
      />
    </motion.div>
  );
};

export default ImageShow;

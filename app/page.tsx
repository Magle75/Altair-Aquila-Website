import React from "react";
import HeroSection from "./components/HeroSection";
import Biodata from "./components/Biodata";
import ImageShow from "./components/ImageShow";
import KomponenTest from "./components/KomponenTest";
import VideoYT from "./components/VideoYT";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col mb-4">
      <div className="mt-20 mb-10">
        <HeroSection />
      </div>
      <div id="bio" className="py-4 text-center">
        <h1 className="font-bold text-3xl mb-6">
          <span className="border-b border-white text-white">ABOUT ALTAIR</span>
        </h1>
        <Biodata />
      </div>
      <div className="my-8">
        <ImageShow />
      </div>
      <div>
        <VideoYT />
      </div>
    </main>
  );
};

export default page;

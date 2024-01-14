import React from "react";
import VideoYT from "./VideoYT";

const Gallery = () => {
  return (
    <div className="relative  justify-center">
      
      <div className="flex flex-col items-center md:items-start p-8">
        <h1 className="font-bold text-3xl border-b border-white mb-4 text-center text-white md:text-left">
          <span>Lore Video</span>
        </h1>
        <iframe
          className="w-full aspect-video rounded-2xl"
          src="https://www.youtube.com/embed/iXNVg6eY4mw?si=mA6tii_b2AFG7fAy"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className=" relative mb-4">
        <h1 className="font-bold text-3xl mb-6 text-center">
          <span className="border-b border-white text-white">Uploaded Videos</span>
        </h1>
        <div className="grid lg:grid-cols-3 gap-16 sm:grid-cols-1 justify-items-center px-[6px]">
          <div className="flex flex-col ">
            <iframe
              className="rounded-2xl"
              width="400"
              height="250"
              src="https://www.youtube.com/embed/waWv44oIghM?si=tx-5FTP2o-0xtfeJ" 
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
           <span className="text-center font-bold mt-2 w-36 rounded-full mr-4 border-4 border-blue-500 text-white">Cover Song</span>
          </div>
          <div className="flex flex-col ">
            <iframe
              className="rounded-2xl"
              width="400"
              height="250"
              src="https://www.youtube.com/embed/rXmQc3gi-Mk?si=rCa1fyDtrPZWuBux"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
             <span className="text-center font-bold mt-2 w-36 rounded-full mr-4 border-4 border-blue-500 text-white">Cover Song</span>
          </div>
          <div className="flex flex-col ">
            <iframe
              className="rounded-2xl"
              width="400"
              height="250"
              src="https://www.youtube.com/embed/WT5Ht_FnyA0?si=py596LBIsrwc00__"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <span className="text-center font-bold mt-2 w-36 rounded-full mr-4 border-4 border-blue-500 text-white">Cover Song</span>
          </div>
          <div className="flex flex-col ">
            <iframe
              className="rounded-2xl"
              width="400"
              height="250"
              src="https://www.youtube.com/embed/5ATfnjjGpEk?si=VRBvKBaJA-vTvHNa"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <span className="text-center font-bold mt-2 w-36 rounded-full mr-4 border-4 border-blue-500 text-white">Cover Song</span>
          </div>
          <div className="flex flex-col ">
            <iframe
              className="rounded-2xl"
              width="400"
              height="250"
              src="https://www.youtube.com/embed/iXNVg6eY4mw?si=mycOrEQOjJcbZ7uD"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <span className="text-center font-bold mt-2 w-36 rounded-full mr-4 border-4 border-blue-500 text-white">Lore Video</span>
          </div>
          <div className="flex flex-col ">
            <iframe
              className="rounded-2xl"
              width="400"
              height="250"
              src="https://www.youtube.com/embed/QBV2uYi5On0?si=6ULHuvPmncQhkPj0" 
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <span className="text-center font-bold mt-2 w-36 rounded-full mr-4 border-4 border-blue-500 text-white">Lore Video</span>
          </div>
        </div>
      </div>
        <div className="flex justify-center items-center my-8">
          <a
            href="https://www.youtube.com/@AltairAquila/videos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-blue-500 px-6 py-2 mt-6 uppercase tracking-widest text-white hover:bg-blue-600 hover:text-white rounded-full">
              Lihat youtube selengkapnya
            </button>
          </a>
        </div>
    </div>
  );
};

export default Gallery;

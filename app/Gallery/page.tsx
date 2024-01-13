import React from "react";
import Gallery from "../components/Gallery";
import UploadedVideo from "../components/UploadedVideo";

export const metadata = {
  title: "Gallery",
};

const page = () => {
  return (
    <main className="flex min-h-screen flex-col mb-4">
      <div className="mt-32">
        <Gallery />
      </div>
    </main>
  );
};

export default page;

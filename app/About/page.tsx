import React from "react";
import Image from "next/image";
import ImageShow from "../components/ImageShow";
import AboutSection from "../components/AboutSection";
export const metadata = {
  title: "About",
};

const About = () => {
  return <main className="flex min-h-screen flex-col mb-4">
    <div><AboutSection/></div>
  </main>;
};

export default About;

"use client";

import Image from "next/image";

import { CustomButton } from "@components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 padding-x">
        <h1 className="hero__title text-white mt-20">Love Your Space!</h1>

        <p className="hero__subtitle">
          Book a cleaning appointment for your house, garden, swimming pool,
          office, and more, starting from just Tshs. 50k.
        </p>

        <CustomButton
          title="Book an Appointment"
          containerStyles="text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hel-bn.png"
            alt="hero"
            fill
            className="object-contain shadow-black "
          />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;

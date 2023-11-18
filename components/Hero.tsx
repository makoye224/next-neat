"use client";

import Image from "next/image";
import { CustomButton } from "@components";
import { useState } from "react";
import BookAppointment from "./BookAppointment";

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  return (
    <div className="hero">
      <div className="flex-1 padding-x">
        <h1 className="hero__title text-white mt-20">Love Your Space!</h1>

        <p className="hero__subtitle">
          Book a cleaning appointment for your house, garden, swimming pool,
          office, and more, starting from just Tshs. 50k.
        </p>
        <div id="discover">
          <CustomButton
            bg="white"
            col="black"
            title={!isModalOpen ? "Book an Appointment" : "Close Modal"}
            containerStyles="text-white rounded-full mt-10"
            handleClick={() => {
              setIsModalOpen(!isModalOpen);
            }}
          />
        </div>
        <div className="text-center">
          <BookAppointment isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/bannerr.png"
            alt="hero"
            fill
            className="object-contain"
          />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;

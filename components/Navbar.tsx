"use client";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
import Modal from "./Modal";
import { useState } from "react";
import { FiPhoneCall } from "react-icons/fi";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-6 bg-transparent">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/mylogo.png"
            alt="logo"
            width={200}
            height={18}
            className="object-contain"
          />
        </Link>
        <button
          style={{ color: "black" }}
          className="font-bold"
          onClick={() => setIsModalOpen(true)}
        >
          <FiPhoneCall
            style={{ fontSize: "24px" }}
            className="text-neat-color lg:text-white hover:text-black"
          />
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </nav>
    </header>
  );
};

export default NavBar;

"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { client } from "../sanity/lib/client";

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // Create the Sanity document with the uploaded image asset ID
      const sanityDocument = {
        _type: "contact",
        title: formData.fullName,
        fullname: formData.fullName,
        email: formData.email,
        phone: formData.phoneNumber,
        message: formData.message,
        submittedAt: new Date(),
      };
      const response = await client.create(sanityDocument);
      console.log(response);
    } catch (error) {
      console.error("Error creating document:", error);
      // Inform the user about the error
      alert("An error occurred while submitting the review.");
    }

    // Clear the form fields
    setFormData({
      fullName: "",
      message: "",
      phoneNumber: "",
      email: "",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="p-4 w-96 shadow-md rounded-lg bg-white">
        <h2 className="font-extrabold text-black text-center">Contact Us</h2>

        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label htmlFor="fullName" className="block font-medium text-black">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="border rounded-md w-full px-3 py-2 mt-1"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="email" className="block font-medium text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border rounded-md w-full px-3 py-2 mt-1"
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor="phoneNumber"
              className="block font-medium text-black"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="border rounded-md w-full px-3 py-2 mt-1"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="message" className="block font-medium text-black">
              Message/Comments
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="border rounded-md w-full px-3 py-2 mt-1"
            />
          </div>

          <div className="mt-4 flex justify-between">
            <button
              type="submit"
              className="bg-neat-color text-white px-4 py-2 rounded-full hover:bg-green-600 hover:bg-blue-600"
            >
              Submit
            </button>
            <button
              className="bg-black text-white px-4 py-2 rounded-full hover:bg-red-600"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;

"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // You can handle the form submission logic here, e.g., sending the data to an API
    console.log(formData);
    // Close the modal after form submission
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
              className="bg-neat-color text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
            <button
              className="bg-red-800 text-white px-4 py-2 rounded hover:bg-red-600"
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

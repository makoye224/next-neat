"use client";
import React, { useState } from "react";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import { client } from "../sanity/lib/client";

const BookAppointment = () => {
  const [selectedService, setSelectedService] = useState("");
  const [customService, setCustomService] = useState("");
  const [selectedDate, setSelectedDate] = useState("12:00");
  const [selectedTime, setSelectedTime] = useState("");
  const [comments, setComments] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");

  const handleServiceChange = (e: { target: { value: any } }) => {
    const selectedValue = e.target.value;
    setSelectedService(selectedValue);

    // If "other" is selected, clear the custom service field
    if (selectedValue === "other") {
      setCustomService("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      // Append form data to the FormData object
      formData.append("serviceType", selectedService);
      if (selectedService === "other") {
        formData.append("customService", customService);
      }
      formData.append("date", selectedDate);
      formData.append("time", selectedTime);

      // Create the Sanity document with the form data
      const sanityDocument = {
        _type: "appointment",
        title: customService || selectedService,
        service: customService || selectedService,
        email: email,
        phone: phoneNumber,
        date: new Date(selectedDate),
        time: selectedTime,
        submittedAt: new Date(),
        comments: comments,
        name: name,
      };

      // Send the FormData to your server or Sanity.io for upload
      // You might need to use a different method or library for this, like Axios or fetch.
      const response = await client.create(sanityDocument);

      console.log(response);

      // Reset the form fields and selected file
      setSelectedService("");
      setCustomService("");
      setSelectedDate("");
      setSelectedTime("");
      setName("");
      setComments("");
      setPhoneNumber("");
      setEmail("");
    } catch (error) {
      console.error("Error creating document:", error);
      // Inform the user about the error
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="w-full max-w-md p-4 mx-auto bg-white text-black shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="service_type"
            className="block text-gray-600 font-medium"
          >
            Select a Service:
          </label>
          <select
            id="service_type"
            className="w-full px-4 py-2 border rounded-lg"
            value={selectedService}
            onChange={handleServiceChange}
            required
          >
            <option value="Residential Spaces">Residential Spaces</option>
            <option value="Swimming Pools">Swimming Pools</option>
            <option value="Garden">Gardens</option>
            <option value="Construction sites">Construction sites</option>
            <option value="Pre & post events">Pre & post events</option>
            <option value="Commercial spaces">Commercial spaces</option>
            <option value="other">Other</option>
          </select>
        </div>

        {selectedService === "other" && (
          <div className="mb-4">
            <label
              htmlFor="custom_service"
              className="block text-gray-600 font-medium"
            >
              Specify the service you need:
            </label>
            <input
              type="text"
              id="custom_service"
              placeholder="Enter custom service"
              className="w-full px-4 py-2 border rounded-lg"
              value={customService}
              onChange={(e) => setCustomService(e.target.value)}
              required
            />
          </div>
        )}
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-600 font-medium">
            Please specify the desired service date:
          </label>
          <input
            type="date"
            id="date"
            className="w-full px-4 py-2 border rounded-lg"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-gray-600 font-medium">
            Please specify the desired service time:
          </label>
          <input
            type="time"
            id="time"
            value={selectedTime}
            className="w-full px-4 py-2 border  rounded-lg"
            onChange={(e) => setSelectedTime(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-600 font-medium">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border rounded-lg"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-600 font-medium">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-600 font-medium">
            Phone Number:
          </label>
          <input
            type="number"
            id="phone-number"
            className="w-full px-4 py-2 border rounded-lg"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-600 font-medium">
            Other Comments:
          </label>
          <input
            type="text"
            id="comments"
            value={comments}
            className="w-full px-4 py-2 border rounded-lg"
            onChange={(e) => setComments(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-neat-color text-white py-2 px-4 hover:bg-red-600 rounded-full hover:bg-blue-700"
          >
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookAppointment;

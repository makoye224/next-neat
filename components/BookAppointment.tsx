"use client";
import React, { useState } from "react";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";

const BookAppointment = () => {
  const [selectedService, setSelectedService] = useState("service1");
  const [customService, setCustomService] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("12:00");

  const handleDateChange = (date: React.SetStateAction<null>) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time: React.SetStateAction<string>) => {
    setSelectedTime(time);
  };

  const handleServiceChange = (e: { target: { value: any } }) => {
    const selectedValue = e.target.value;
    setSelectedService(selectedValue);

    // If "other" is selected, clear the custom service field
    if (selectedValue === "other") {
      setCustomService("");
    }
  };

  return (
    <div className="w-full max-w-md p-4 mx-auto bg-white text-black shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Book an Appointment</h2>
      <form>
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
          >
            <option value="service1">Residential Spaces</option>
            <option value="service2">Swimming Pools</option>
            <option value="service3">Gardens</option>
            <option value="service4">Construction sites</option>
            <option value="service5">Pre & post events</option>
            <option value="service6">Commercial spaces</option>
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
            />
          </div>
        )}

        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-600 font-medium">
            Date:
          </label>
          <input
            type="date"
            id="date"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-gray-600 font-medium">
            Time:
          </label>
          <input
            type="time"
            id="time"
            className="w-full px-4 py-2 border  rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-600 font-medium">
            Other Comments:
          </label>
          <input
            type="text"
            id="comments"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-neat-color text-white py-2 px-4 rounded-full hover:bg-blue-700"
          >
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookAppointment;

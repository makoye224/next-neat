"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  fullName: string;
  media: File | null; // Use 'File' type for media
  location: string;
  comment: string;
}

const Reviews: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    media: null,
    location: "",
    comment: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      // Handle file input separately
      const file = (e.target as HTMLInputElement).files?.[0];
      setFormData({
        ...formData,
        [name]: file,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // You can handle the form submission logic here, e.g., sending the data to an API
    console.log(formData);
    // Clear the form fields after submission
    setFormData({
      fullName: "",
      media: null,
      location: "",
      comment: "",
    });
  };

  return (
    <div className="inset-0 flex items-center justify-center z-50">
      <div className="p-4 w-96 shadow-md rounded-lg bg-neat-color">
        <h2 className="font-extrabold text-white text-center">
          Write a Review
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label htmlFor="fullName" className="block font-medium text-white">
              Your Name
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
            <label htmlFor="location" className="block font-medium text-white">
              Your Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="border rounded-md w-full px-3 py-2 mt-1"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="comment" className="block font-medium text-white">
              Your Review
            </label>
            <textarea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              required
              rows={4}
              className="border rounded-md w-full px-3 py-2 mt-1"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="media" className="block font-medium text-white">
              Pictures and videos
            </label>
            <input
              type="file"
              id="media"
              name="media"
              accept="image/*, video/*"
              onChange={handleChange}
              className="border rounded-md w-full px-3 py-2 mt-1"
            />
          </div>

          <div className="mt-4 flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reviews;

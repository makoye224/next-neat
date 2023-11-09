"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { client } from "../sanity/lib/client";

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
      const file = (e.target as HTMLInputElement).files?.[0];
      setFormData({
        ...formData,
        [name]: file, // Set the selected file in the 'media' field of your form data
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // Create the Sanity document with the uploaded image asset ID
      const sanityDocument = {
        _type: "work",
        title: formData.fullName,
        customer: formData.fullName,
        location: formData.location,
        review: formData.comment,
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
      media: null,
      location: "",
      comment: "",
    });

    // Clear the file input field
    const fileInput = document.getElementById("media") as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
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
              className="border rounded-md w-full text-black px-3 py-2 mt-1"
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
              className="border rounded-md text-black  w-full px-3 py-2 mt-1"
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
              className="border rounded-md text-black  w-full px-3 py-2 mt-1"
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
              className="bg-white text-black px-4 py-2 hover:text-white rounded-full hover:bg-red-600"
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

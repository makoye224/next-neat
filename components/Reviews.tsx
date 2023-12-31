import React, { useState, ChangeEvent, FormEvent } from "react";
import { client } from "../sanity/lib/client";
import { CustomButton } from "@components";

interface FormData {
  fullName?: string;
  media?: File | null;
  location?: string;
  comment?: string;
}
interface ReviewProps {
  closePopover: () => void;
}

const Reviews: React.FC<ReviewProps> = ({ closePopover }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    media: null,
    location: "",
    comment: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "file") {
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

    // Clear errors for the changed field
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate required fields
    const requiredFields: Array<keyof FormData> = [
      "fullName",
      "location",
      "comment",
    ];
    const newErrors: Record<string, string> = {};

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "This field is required";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      // Create the Sanity document with the uploaded image asset ID
      const sanityDocument = {
        _type: "work",
        title: formData.fullName!,
        customer: formData.fullName!,
        location: formData.location!,
        review: formData.comment!,
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

    closePopover();

    // Clear the file input field
    const fileInput = document.getElementById("media") as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
  };

  return (
    <div className="inset-0 flex items-center justify-center z-50">
      <div className="p-4 w-96 shadow-md rounded-lg">
        <h2 className="font-extrabold text-black text-center">
          Write a Review
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label htmlFor="fullName" className="block font-medium text-black">
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
            {errors.fullName && (
              <p className="text-red-500">{errors.fullName}</p>
            )}
          </div>

          <div className="mt-4">
            <label htmlFor="location" className="block font-medium text-black">
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
            {errors.location && (
              <p className="text-red-500">{errors.location}</p>
            )}
          </div>

          <div className="mt-4">
            <label htmlFor="comment" className="block font-medium text-black">
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
            {errors.comment && <p className="text-red-500">{errors.comment}</p>}
          </div>

          <div className="mt-4">
            <label htmlFor="media" className="block font-medium text-black">
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

          <div className="mt-4">
            <CustomButton
              title="Submit Review"
              col="white"
              containerStyles="bg-black text-white rounded-full mt-10"
              bg="neat-color"
              handleClick={handleSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reviews;

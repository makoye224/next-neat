import Image from "next/image";
import React from "react";

// Define TypeScript types for the props
interface WorkCardProps {
  work: string;
  comments: string;
  user: string;
  imageSrc: string; // New prop for the image source
}

const WorkCard: React.FC<WorkCardProps> = ({
  work
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-md space-y-2">
      <div className="relative w-full h-52">
        {" "}
        {/* Adjust the height as needed */}
        <Image
          src="/w1.jpg"
          alt="Work Image"
          layout="fill"
          className="rounded-sm shadow-sm object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold">Cleaning Work</h3>
      <p>{work.wor}</p>
      <h4 className="text-lg font-semibold">Comments</h4>
      <p>{comments}</p>
      <p className="text-gray-500">User: {user}</p>
    </div>
  );
};

export default WorkCard;

import React from "react";
import Image from "next/image";
import { client } from "../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { TbCopy } from "react-icons/tb";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

const WorkCard = () => {
  const formattedDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="p-5 text-center">
      <div className="rounded-lg p-4 flex flex-col items-center">
        <img
          src={"/ntfy.png"}
          alt="dsfgdv"
          className="height-250 w-full object-cover mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">work.title</h3>
        <p className="text-lg">{formattedDate}</p>
        <div className="flex items-center mt-2">
          <p className="mr-2">Customer: {}</p>
        </div>
        <div>
          <p className="mr-2">Review{}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;

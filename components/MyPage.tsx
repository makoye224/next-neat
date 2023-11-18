"use client";

import React, { Key, useEffect, useState } from "react";
import { client } from "../sanity/lib/client";
import WorkCard from "./WorkCard";
import Team from "./Team";
import Reviews from "./Reviews";
import { CustomButton } from "@components";
import Slideshow from "./slideshow";
import ImageSwiper from "./ImageSwiper";

const MyPage = () => {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const togglePopover = () => {
    setIsPopoverVisible(!isPopoverVisible);
    handleScroll();
  };

  const handleCloseReview = () => {
    togglePopover(); // Close the popover when the form is submitted
  };

  const handleScroll = () => {
    const nextSection = document.getElementById("review");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedWorks = await client.fetch('*[_type == "work"]');
        setWorks(fetchedWorks);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const isDataEmpty = works.length < 1;

  return (
    <>
      <ImageSwiper />
      {/* Content */}
      <div className="mt-12 padding-x padding-y max-width text-white">
        <br />
        <div>
          <div className="mx-auto">
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-3">
                <div className=" p-6 h-full rounded-lg shadow-lg flex flex-col">
                  <h2 className="text-2xl font-bold mb-2">Neatify</h2>
                  <p className="">
                    Neatify is a user-friendly app and website that connects
                    customers with trustworthy cleaning service providers,
                    allowing easy scheduling of cleaning services at their
                    convenience.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-3">
                <div className=" p-6 h-full rounded-lg shadow-lg flex flex-col">
                  <h2 className="text-2xl font-bold mb-2">Vision</h2>
                  <p className="">
                    Neatify envisions beautifully maintained homes and spaces,
                    fostering aesthetics, joy, and vibrant communities.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-3">
                <div className="p-6 h-full rounded-lg shadow-lg flex flex-col">
                  <h2 className="text-2xl font-bold mb-2">Mission</h2>
                  <p className="">
                    Neatify revolutionizes cleaning services with a
                    user-friendly app and website, connecting customers to
                    reliable service providers and fostering economic well-being
                    and community growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="text-center">
          <h1 className="text-4xl font-extrabold">Our actions speak for us</h1>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {works.map((work: { _id: Key | null | undefined }) => (
                <WorkCard key={work._id} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-xl font-bold">No Reviews yet</h2>
          </div>
        )}
      </div>

      {/* Team Section */}
      <div>
        <Team />
      </div>

      {/* Reviews Section */}
      <div className="mt-12 padding-x padding-y max-width text-white">
        <div id="review">
          <CustomButton
            bg="white"
            col="black"
            title={isPopoverVisible ? "Close Review" : "Review Our Work"}
            containerStyles="text-white rounded-full"
            handleClick={togglePopover}
          />
        </div>
        <div>
          {isPopoverVisible && (
            <div
              data-popover="popover-animation"
              data-popover-mount="opacity-100 scale-100"
              data-popover-unmount="opacity-0 scale-0 pointer-events-none"
              data-popover-transition="transition-all duration-200 origin-bottom"
              className="absolute z-10 w-max whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-white p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none"
            >
              <Reviews closePopover={handleCloseReview} />
            </div>
          )}
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-extrabold">How did we do?</h1>
        <br />
      </div>
    </>
  );
};

export default MyPage;

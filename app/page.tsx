"use client";
import { useEffect, useState } from "react";
import { fetchCars } from "@utils";
import { HomeProps } from "@types";
import { fuels, yearsOfProduction } from "@constants";
import { CarCard, ShowMore, SearchBar, CustomFilter, Hero } from "@components";
import BookAppointment from "@components/BookAppointment";
import WorkCard from "@components/WorkCard";
import Team from "@components/Team";
import Reviews from "@components/Reviews";
import { client } from "../sanity/lib/client";

export default async function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await client.fetch(
          `*[_type == "post"]{
            title,
            slug,
            mainImage{
              asset->{
                _id,
                url,
              }
            }
          }`
        );
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  console.log(posts);
  const isDataEmpty = posts.length < 1 || !posts;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold">Schedule with Neatify</h1>
          <br />
          <p>
            Select the ideal service that suits you and your preferred time on
            the calendar
          </p>
        </div>

        <div className="home__filters">
          <BookAppointment />
        </div>
        <br />
        <div>
          <div className="container mx-auto">
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-3">
                <div className="bg-white p-6 h-full rounded-lg shadow-lg flex flex-col">
                  <h2 className="text-2xl font-bold mb-2">Neatify</h2>
                  <p className="text-gray-700">
                    Neatify is a user-friendly app and website that connects
                    customers with trustworthy cleaning service providers,
                    allowing easy scheduling of cleaning services at their
                    convenience.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-3">
                <div className="bg-white p-6 h-full rounded-lg shadow-lg flex flex-col">
                  <h2 className="text-2xl font-bold mb-2">Vision</h2>
                  <p className="text-gray-700">
                    Neatify envisions beautifully maintained homes and spaces,
                    fostering aesthetics, joy, and vibrant communities.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-3">
                <div className="bg-white p-6 h-full rounded-lg shadow-lg flex flex-col">
                  <h2 className="text-2xl font-bold mb-2">Mission</h2>
                  <p className="text-gray-700">
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
            <div className="home__cars-wrapper">
              {posts.map((work) => (
                <p key={work}>hello world</p>
              ))}
            </div>
            {/* 
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > posts.length}
            /> */}
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          </div>
        )}
      </div>
      <div>
        <Team />
      </div>

      <br />
      <div className="text-center">
        <h1 className="text-4xl font-extrabold">How did we do?</h1>
        <br />
        <Reviews />
      </div>
    </main>
  );
}

"use client";
import React from "react";
import hero from "../../../public/hero2.jpg";
import { Fade, Slide } from "react-awesome-reveal";
import "animate.css";

function Hero() {
  return (
    <header className="">
      <div
        className="w-full h-screen bg-center bg-cover"
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <div className="flex flex-col w-full h-full bg-gray-900 bg-opacity-70 py-12 px-10">
          <div className="flex items-center h-full">
            <div className="flex flex-col gap-y-2">
              <p className="text-white font-bold text-4xl">Welcome to</p>
              <p className="text-4xl text-gray-300 animate__animated animate__fadeInLeft font-bold">
                Sunamganj Science and Technology University
              </p>
              <p className="text-4xl text-gray-300 animate__animated animate__fadeInLeft font-bold">
                সুনামগঞ্জ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়
              </p>
              <p className="text-gray-300 animate__animated animate__fadeInLeft">
                Sunamgonj Science and Technology University is a prominent
                institution of higher education located in the picturesque
                region of Sunamganj, Bangladesh. Nestled in the heart of the
                country, it offers a unique educational experience that
                harmonizes academic excellence with the breathtaking beauty of
                the surrounding haors.
              </p>
              <button className="bg-white w-24 hover:bg-green-500 hover:text-white transition-all duration-200 text-green-500 font-bold py-2 px-4 rounded animate__animated animate__fadeInUp">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-11 text-xl">
        <div className="relative overflow-hidden whitespace-nowrap bg-green-100 py-2 w-full">
          <div className="animate-marquee inline-block">
            <span className="mx-5">
              :: Combined Admission Test (2023-2024) ::
            </span>
            <span className="mx-5">:: PG Admission Notice July 2024 ::</span>
            <span className="mx-5">
              :: Combined Admission Test (2023-2024) ::
            </span>
            <span className="mx-5">:: PG Admission Notice July 2024 ::</span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </header>
  );
}

export default Hero;

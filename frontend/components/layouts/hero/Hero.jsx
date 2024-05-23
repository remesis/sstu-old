"use client";
import React from "react";
import hero from "../../../public/hero2.jpg";
import { Fade, Slide } from "react-awesome-reveal";
import "animate.css";
import { useState, useEffect } from "react";

function Hero() {
  return (
    <header className="">
      <div
        className="w-full h-screen bg-center bg-cover"
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <div className="flex items-center w-full h-full bg-gray-900 bg-opacity-70 py-12 px-10">
          <div className="flex flex-col gap-y-2">
            <p className="text-white font-bold text-4xl">Welcome to</p>
            <p className=" text-4xl text-gray-300 animate__animated animate__fadeInLeft font-bold">
              Sunamganj Science and Technology University
            </p>
            <p className=" text-4xl text-gray-300 animate__animated animate__fadeInLeft font-bold">
              সুনামগঞ্জ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়
            </p>
            <p className="text-gray-300 animate__animated animate__fadeInLeft">
              Sunamgonj Science and Technology University is a prominent
              institution of higher education located in the picturesque region
              of Sunamganj, Bangladesh. Nestlend in the heart of the country, it
              offers a unique educational experience that harmonizes academic
              excellence with the breathtaking beauty of the surrounding haors.
            </p>
            <button className="bg-white w-24 hover:bg-green-500 hover:text-white transition-all duration-200 text-green-500 font-bold py-2 px-4 rounded animate__animated animate__fadeInUp">
              Explore
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;

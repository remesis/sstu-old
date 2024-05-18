"use client";
import React from "react";
import PageLayout from "../../component/PageLayout";
import { CardFooter, Button } from "@material-tailwind/react";
import Link from "next/link";
const page = () => {
  return (
    <PageLayout
      style={true}
      title="Faculty of Science"
      bg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMyXWOTRTHv-tKEsmpjI2RHFZeWR7iX6klbQ&usqp=CAU"
    >
      <div className="grid md:grid-cols-5">
        <div className="md:col-span-4 p-8 text-justify">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            <div className="flex items-center">
              <p> Message from Dean</p>
            </div>
          </h2>
          <p className="text-lg mb-6 text-gray-800">
            Welcoming the{" "}
            <strong className="font-semibold text-gray-850 dark:text-white">
              Faculty of Computer Science and Engineering
            </strong>{" "}
            to Sunamgonj Science and Technology University marks an exciting
            chapter of growth and innovation. This esteemed faculty brings a
            wealth of knowledge and expertise in cutting-edge technologies,
            driving forward the frontiers of computing and engineering. As we
            embark on this journey together, we celebrate the diverse talents
            and passions that each faculty member contributes to our academic
            community. Our commitment to fostering an inclusive and dynamic
            environment ensures that both students and staff are empowered to
            excel and innovate. Together, we will explore the transformative
            potential of computer science and engineering, addressing complex
            challenges and creating impactful solutions. We look forward to
            collaborating on groundbreaking research, advancing educational
            excellence, and shaping the future of technology both locally and
            globally.
          </p>
        </div>
        <div className="md:col-span-1 mt-8 flex justify-center">
          <img
            className="w-48 h-56 object-cover bg-green-100 p-2 border border-slate-200 shadow-md rounded-md"
            src="https://sstu.ac.bd/wp-content/uploads/2024/01/G-M-Shahidul-Alam_Reg_KUET.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          <div className="flex items-center">
            <p>Renowned Departments</p>
          </div>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative p-6 bg-slate-100 border border-slate-200 shadow-md rounded-md text-white bg-black bg-opacity-30">
            <img
              className="absolute z-[-999999] top-0 left-0 w-full h-full object-cover rounded-t-md"
              src="https://e0.pxfuel.com/wallpapers/760/185/desktop-wallpaper-computer-engineering-science-tech-background-modern-technology.jpg"
              alt=""
            />
            <h2 className="text-xl mb-2 relative z-10">
              Department of{" "}
              <strong className="font-semibold text-black-900 dark:text-white">
                Computer Science and Engineering
              </strong>{" "}
            </h2>
            <p className="text-black-850 relative z-10">
              The study of discoveries, innovative solutions, and significant
              advancements that will shape the future of computer science and
              engineering
            </p>
            <Link
              className="pt-4 grid justify-items-end"
              href="/department/cse"
            >
              <Button className="bg-green-500">Explore</Button>
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default page;

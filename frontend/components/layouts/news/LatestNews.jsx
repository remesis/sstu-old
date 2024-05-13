"use client";
import React from "react";
import { Card, CardHeader, CardBody, Typography, Avatar, CardFooter, Button } from "@material-tailwind/react";
import Link from "next/link";

function CardItem({ image, title, description, date }) {
  return (
    <Card className="w-[24rem] overflow-hidden">
      <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none">
        <img className=" w-full object-cover h-72" src={image} alt="ui/ux review check" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray">
          {title}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 text-sm text-justify font-normal">
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <Typography className="font-normal">{date}</Typography>
        <Button color="green" className="">
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
}

const LatestNews = () => {
  return (
    <div className="container mx-auto mt-14 min-h-screen py-10">
      <Typography className="flex gap-x-2 mb-5 items-center">
        <p className=" font-extralight text-3xl">NEWS</p> <p className="font-bold text-3xl"> AND EVENTS</p>
        <div className="pl-5 ml-5 border-l-2 border-slate-900 hover:translate-x-5 transition-all duration-200">
          <Link href="/news/all">View All</Link>
        </div>
      </Typography>
      <div className="flex gap-x-2 items-center justify-center">
        <Card shadow={false} className="relative grid h-[20rem] w-1/4 items-end justify-center overflow-hidden text-center">
          <CardHeader floated={false} shadow={false} color="transparent" className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://sstu.ac.bd/wp-content/uploads/2023/11/IMG_1095.jpg')] bg-cover bg-center">
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <Typography variant="h4" color="white" className="mb-6 font-medium leading-[1.5]">
              <p className="text-3xl font-bold">LATEST</p>
              <p className="text-3xl font-bold">NEWS</p>
            </Typography>
          </CardBody>
        </Card>
        <div className="w-2/4 text-justify flex flex-col gap-y-3 ml-5">
          <p className="text-2xl font-bold text-green-500">A New Era of Leadership: Vice-Chancellor’s Commitment to Regulating University Activities</p>
          <p>In the ever-evolving landscape of higher education, effective leadership is crucial to steer an institution towards excellence. At Sunamgonj Science and Technology University (Dhaka Guest House), we are witnessing a transformative change with our new Vice-Chancellor at the helm. Their steadfast commitment to regulating university activities is reshaping the way we operate and elevating our institution to new heights. One of the most notable attributes of our new leader is their unwavering commitment to fostering accountability across all levels of the university. Recognizing that accountability is the cornerstone of a well-functioning institution, they have initiated a series of measures to ensure transparency in decision-making processes. Regular audits, performance evaluations, and a culture of open communication have become the norm, ensuring that every stakeholder’s voice is heard.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-1 mt-10">
        <CardItem image="https://sstu.ac.bd/wp-content/uploads/2023/11/IMG_0642.jpg" title="Charting the Course: Key Discussions Unfold in University’s Regulatory Meeting" description="In a recent pivotal meeting at our esteemed university, key stakeholders including the Vice-Chancellor, Registrar, and other influential figures gathered to deliberate on critical aspects of the institution’s regulations." date="2024-1-11" />
        <CardItem image="https://sstu.ac.bd/wp-content/uploads/2023/11/IMG_0642.jpg" title="Charting the Course: Key Discussions Unfold in University’s Regulatory Meeting" description="In a recent pivotal meeting at our esteemed university, key stakeholders including the Vice-Chancellor, Registrar, and other influential figures gathered to deliberate on critical aspects of the institution’s regulations." date="2024-1-11" />
        <CardItem image="https://sstu.ac.bd/wp-content/uploads/2023/11/IMG_0642.jpg" title="Charting the Course: Key Discussions Unfold in University’s Regulatory Meeting" description="In a recent pivotal meeting at our esteemed university, key stakeholders including the Vice-Chancellor, Registrar, and other influential figures gathered to deliberate on critical aspects of the institution’s regulations." date="2024-1-11" />
      </div>
    </div>
  );
};

export default LatestNews;

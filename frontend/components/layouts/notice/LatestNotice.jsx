"use client";
import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";

function CardItem({ title, description, date, image }) {
  return (
    <Card className="w-[24rem] overflow-hidden">
      <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none">
        <img className=" w-full object-cover h-72" src={image} alt="ui/ux review check" />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          {title}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <Typography className="font-normal">{date}</Typography>
        <Link href="/notice/view/test">
          <Button color="green" className="">
            Read More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

const LatestNotice = () => {
  return (
    <div className="container mx-auto">
      <Typography className="flex gap-x-2 mb-5 items-center">
        <p className=" font-extralight text-3xl">LATEST</p> <p className="font-bold text-3xl">NOTICE</p>
        <div className="pl-5 ml-5 border-l-2 border-slate-900 hover:translate-x-5 transition-all duration-200">
          <Link href="/notice/all">View All</Link>
        </div>
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-1">
        <CardItem title={"স্মারক নং ৪৩৭ঃ নির্বাহী প্রকৌশলী (পেপার)"} description={"স্মারক নং ৪৩৭ঃ নির্বাহী প্রকৌশলী (পেপার)"} date={"2024-1-11"} image={"notice.png"} />
        <CardItem title={"স্মারক নং ৪৩৭ঃ নির্বাহী প্রকৌশলী (পেপার)"} description={"স্মারক নং ৪৩৭ঃ নির্বাহী প্রকৌশলী (পেপার)"} date={"2024-1-11"} image={"notice.png"} />
        <CardItem title={"স্মারক নং ৪৩৭ঃ নির্বাহী প্রকৌশলী (পেপার)"} description={"স্মারক নং ৪৩৭ঃ নির্বাহী প্রকৌশলী (পেপার)"} date={"2024-1-11"} image={"notice.png"} />
      </div>
    </div>
  );
};

export default LatestNotice;

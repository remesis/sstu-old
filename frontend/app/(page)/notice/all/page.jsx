"use client";
import React from "react";
import PageLayout from "../../component/PageLayout";
import Link from "next/link";
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";
// import { formatDate } from "../../utils/date";

const formatDate = (dateString) => {
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    // hour: '2-digit', 
    // minute: '2-digit' 
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

function CardItem({ title, description, date, image }) {
  return (
    <Card className="w-[20rem] h-[24rem] overflow-hidden">
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

const page = () => {
  const [allNotice, setAllNotice] = useState([]);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await fetch(`http://192.168.31.157:8000/api/notice/`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setAllNotice(data);
    } catch (error) {
      console.error("Error fetching notice data:", error);
    }
  };


  return (
    <PageLayout style={true} title="Notice" bg="https://www.kuet.ac.bd/images/gallery/0.jpg">
      <div className="container mx-auto">
      <Typography className="flex gap-x-2 mb-5 items-center">
        <p className=" font-extralight text-3xl">ALL</p> <p className="font-bold text-3xl">NOTICE</p>
        {/* <div className="pl-5 ml-5 border-l-2 border-slate-900 hover:translate-x-5 transition-all duration-200">
          <Link href="/notice/all">View All</Link>
        </div> */}
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-1">
        {allNotice.map((notice) => (
          <CardItem key={notice.id} title={notice.title} description={notice.content} date={formatDate(notice.created_at)} image={notice.image} />
        ))}
        {/* <CardItem title={"স্মারক নং ৪৩৭ঃ নির্বাহী প্রকৌশলী (পেপার)"} description={"স্মারক নং ৪৩৭ঃ নির্বাহী প্রকৌশলী (পেপার)"} date={"2024-1-11"} image={"notice.png"} />
        <CardItem title={"স্মারক নং ৪৩৭ঃ নির্বাহী প্রকৌশলী (পেপার)"} description={"স্মারক নং ৪৩৭ঃ নির্বাহী প্রকৌশলী (পেপার)"} date={"2024-1-11"} image={"notice.png"} />
        <CardItem title={"স্মারক নং ৪৩৭ঃ নির্বাহী প্রকৌশলী (পেপার)"} description={"স্মারক নং ৪৩৭ঃ নির্বাহী প্রকৌশলী (পেপার)"} date={"2024-1-11"} image={"notice.png"} /> */}
      </div>
    </div>
    </PageLayout>
  );
};

export default page;

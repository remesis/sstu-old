"use client";
import React from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

// function CardItem({ title, description, date, image }) {
//   return (
//     <Card className="w-[24rem] overflow-hidden">
//       <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none">
//         <img className=" w-full object-cover h-72" src={image} alt="ui/ux review check" />
//       </CardHeader>
//       <CardBody>
//         <Typography variant="h4" color="blue-gray">
//           {title}
//         </Typography>
//         <Typography variant="lead" color="gray" className="mt-3 font-normal">
//           {description}
//         </Typography>
//       </CardBody>
//       <CardFooter className="flex items-center justify-between">
//         <Typography className="font-normal">{date}</Typography>
//         <Link href="/notice/view/test">
//           <Button color="green" className="">
//             Read More
//           </Button>
//         </Link>
//       </CardFooter>
//     </Card>
//   );
// }

const notices = [
  {
    date: "28 Sep 2023",
    text: "KUET Celebrated Birthday of Prime Minister Sheikh Hasina",
  },
  {
    date: "27 Sep 2023",
    text: "The Orientation Program of the Newly Admitted 1st year BSc Eng, BURP & BArch Students held at KUET",
  },
  {
    date: "01 Sep 2023",
    text: "20th Founding Anniversary of KUET and University Day 2023 held at KUET",
  },
  {
    date: "15 Aug 2023",
    text: '"National Mourning Day 2023" observed at KUET',
  },
];

const LatestNotice = () => {
  return (
    <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow-md p-4 float-right m-6">
      <div className="border-b-2 border-green-500 pb-2 mb-4">
        <h2 className="text-lg font-semibold text-black-700">Notice Board</h2>
      </div>
      <ul className="space-y-4">
        {notices.map((notice, index) => (
          <li key={index} className="flex items-start space-x-5">
            <div className="flex-shrink-0 w-14 h-13 bg-green-600 text-white rounded-lg flex items-center justify-center">
              <div className="text-center">
                <p className="text-lg">{notice.date.split(" ")[0]}</p>
                <p className="text-sm">{notice.date.split(" ")[1]}</p>
                <p className="text-sm">{notice.date.split(" ")[2]}</p>
              </div>
            </div>
            <div className="text-gray-700">
              <p>{notice.text}</p>
            </div>
          </li>
        ))}
      </ul>
      <Link className="pt-4 grid justify-items-end" href="/notice/all">
        <Button color="green" className="">
          Read More
        </Button>{" "}
      </Link>
    </div>
  );
};

export default LatestNotice;

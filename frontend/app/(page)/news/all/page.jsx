"use client";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import PageLayout from "../../component/PageLayout";

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
        <Button color="green" className="">
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
}

const page = () => {
  return (
    <PageLayout title="NEWS" style={false} bg="https://img.freepik.com/premium-vector/modern-simple-black-gold-abstract-background-suitable-business-card-presentation-flyer-brochure-print-certificate-template_181182-16606.jpg?w=740">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-1 mt-10">
        <CardItem image="https://sstu.ac.bd/wp-content/uploads/2023/11/IMG_0642.jpg" title="Charting the Course: Key Discussions Unfold in University’s Regulatory Meeting" description="In a recent pivotal meeting at our esteemed university, key stakeholders including the Vice-Chancellor, Registrar, and other influential figures gathered to deliberate on critical aspects of the institution’s regulations." date="2024-1-11" />
        <CardItem image="https://sstu.ac.bd/wp-content/uploads/2023/11/IMG_0642.jpg" title="Charting the Course: Key Discussions Unfold in University’s Regulatory Meeting" description="In a recent pivotal meeting at our esteemed university, key stakeholders including the Vice-Chancellor, Registrar, and other influential figures gathered to deliberate on critical aspects of the institution’s regulations." date="2024-1-11" />
        <CardItem image="https://sstu.ac.bd/wp-content/uploads/2023/11/IMG_0642.jpg" title="Charting the Course: Key Discussions Unfold in University’s Regulatory Meeting" description="In a recent pivotal meeting at our esteemed university, key stakeholders including the Vice-Chancellor, Registrar, and other influential figures gathered to deliberate on critical aspects of the institution’s regulations." date="2024-1-11" />
      </div>
    </PageLayout>
  );
};

export default page;

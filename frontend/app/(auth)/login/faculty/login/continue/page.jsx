"use client";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Typography, Input, Checkbox, Button } from "@material-tailwind/react";
import PageLayout from "@/app/(page)/component/PageLayout";

const page = () => {
  return (
    <PageLayout title="FACULTY LOGIN" style={false} bg="https://www.kuet.ac.bd/images/gallery/0.jpg">
      <div className="container mx-auto min-h-screen flex items-center justify-center">
        <Card className="w-96">
          <CardHeader variant="gradient" color="gray" className="mb-4 grid h-28 place-items-center">
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Email" size="lg" />
            <Input label="Password" size="lg" />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth>
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Typography as="a" href="#signup" variant="small" color="blue-gray" className="ml-1 font-bold">
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </PageLayout>
  );
};

export default page;

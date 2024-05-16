"use client";
import PageLayout from "@/app/(page)/component/PageLayout";
import React from "react";
import { useState, useEffect } from "react";

const page = () => {
  const [noticeData, setnoticeData] = useState([]);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await fetch(`http://192.168.0.101:8000/api/notice/`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setnoticeData(data[0]);
    } catch (error) {
      console.error("Error fetching notice data:", error);
    }
  };

  const changeDateFormat = (date) => {
    const newDate = new Date(date);
    return newDate.toDateString();
  };

  return (
    <PageLayout title="Notice" style={true} bg="https://www.kuet.ac.bd/images/gallery/0.jpg">
      <div className="container mx-auto min-h-screen">
        <div className="flex flex-col justify-center mt-6">
          <h3 className="text-2xl font-bold">{noticeData.title}</h3>
          <p className="text-gray-500 mt-2 text-sm">{changeDateFormat(noticeData.created_at)}</p>
          <p className="text-gray-500 mt-2">{noticeData.content}</p>
          {/* show pdf */}
          <iframe src={noticeData.pdf} width="100%" height="500px" className="mt-5"></iframe>
        </div>
      </div>
    </PageLayout>
  );
};

export default page;

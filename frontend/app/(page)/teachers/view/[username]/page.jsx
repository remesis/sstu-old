"use client";
import PageLayout from "@/app/(page)/component/PageLayout";
import React from "react";
import { useState, useEffect } from "react";

const page = () => {
  const [research, setResearch] = useState([]);

  useEffect(() => {
    fetchResearch();
  }, []);

  const fetchResearch = async () => {
    try {
      const response = await fetch(`http://192.168.0.101:8000/api/research/`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setResearch(data);
    } catch (error) {
      console.error("Error fetching research data:", error);
    }
  };

  const userProfile = {
    first_name: "Md. Anwar Hussen",
    last_name: "Wadud",
    image: "http://192.168.0.101:8000/media/images/teacher/anwarBUBT.jpeg",
    cover_image: "https://www.brainwareuniversity.ac.in/blog/wp-content/uploads/2022/03/Computer-science-engineering.jpg",
    bio: "Test Bio",
    facebook: "john.doe",
    twitter: "john_doe",
  };
  const workExperience = [
    {
      title: "Assistant Professor",
      company: "Bangladesh University of Business and Technology",
      start_date: "2019",
      end_date: "2021",
    },
  ];
  const education = [
    {
      degree: "BSc. in Computer Science & Engineering",
      school: "Mawlana Bhashani Science and Technology University",
      start_date: "2012",
      end_date: "2017",
    },
    {
      degree: "MSc in Computer Science & Engineering",
      school: "BUET",
      start_date: "2020",
      end_date: "2022",
    },
  ];
  return (
    <PageLayout title="Md. Anwar Hussen Wadud" bg={userProfile.cover_image}>
      <div className="container mx-auto px-4 py-8">
        <div className="relative">
          {userProfile && userProfile.cover_image && <img src={userProfile.cover_image} alt="Cover" className="w-full h-64 object-cover rounded-t-lg  z-[-9999]" />}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 -mt-16">
          <div className=" mt-16 flex items-center">
            {userProfile && userProfile.image && <img src={userProfile.image} alt="Profile" className="w-24 h-24 rounded-full mr-4  z-[9999]" />}
            <div className="">
              <div className="flex gap-x-3 items-center">
                <h2 className="text-2xl">
                  {userProfile && userProfile.first_name} {userProfile && userProfile.last_name}
                </h2>
              </div>
            </div>
          </div>
          {/* other details */}
        </div>
        <div className="container mx-auto mt-10 sm:grid sm:grid-cols-12 flex space-x-3">
          <div className="bg-white shadow-md p-10 col-span-4">
            <p className="pt-3 pb-7 text-center border-b border-slate-200 mb-5">{userProfile && userProfile.bio}</p>
            <h3 className="text-xl font-semibold">Personal Information</h3>
            <div className="mt-3 flex flex-col gap-y-3">
              {/* work */}
              {workExperience.map((work, idx) => (
                <div className="flex flex-col gap-y-3">
                  <div className="flex gap-x-3 items-center" key={idx}>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-briefcase-fill" viewBox="0 0 16 16">
                        <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5" />
                        <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z" />
                      </svg>
                    </div>
                    <div className="fle gap-x-1">
                      <p>{work.title} at</p>
                      <b>{work.company}</b>
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs">
                    {work.start_date} - {work.end_date ? work.end_date : "present"}
                  </p>
                </div>
              ))}
              {/* education */}
              {education.map((edu, idx) => (
                <div className="flex flex-col gap-y-3">
                  <div className="flex gap-x-3 items-center" key={idx}>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
                      </svg>
                    </div>
                    <div className="flx gap-x-1">
                      <p>{edu.degree} at</p>
                      <b>{edu.school}</b>
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs">
                    {edu.start_date} - {edu.end_date ? edu.end_date : "present"}
                  </p>
                </div>
              ))}
              <p className="text-gray-600 flex gap-x-3 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
                <a href={userProfile && `https://fb.com/${userProfile.facebook}`} target="_blank" rel="noreferrer">
                  Facebook Profile
                </a>
              </p>

              <p className="text-gray-600 flex gap-x-3 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                </svg>
                <a href={userProfile && `https://fb.com/${userProfile.twitter}`} target="_blank" rel="noreferrer">
                  Twitter Profile
                </a>
              </p>
              <p className="text-gray-600 flex gap-x-3 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M1 8.74c0 .983.713 1.825 1.69 1.943.764.092 1.534.164 2.31.216v2.351a.75.75 0 0 0 1.28.53l2.51-2.51c.182-.181.427-.286.684-.294a44.298 44.298 0 0 0 3.837-.293C14.287 10.565 15 9.723 15 8.74V4.26c0-.983-.713-1.825-1.69-1.943a44.447 44.447 0 0 0-10.62 0C1.712 2.435 1 3.277 1 4.26v4.482ZM5.5 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2.5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3.5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
                </svg>
                4107
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md p-10 col-span-8">
            <h3 className="text-xl font-semibold">Researches</h3>
            {/* <UserPosts posts={posts} /> */}

            <div className="grid grid-cols-1 gap-4 mt-4">
              {research.map((research, idx) => (
                <div className="bg-white shadow-md p-6 rounded-lg" key={idx}>
                  <h4 className="text-xl font-semibold">{research.title}</h4>
                  <p className="text-gray-600">
                    {research.authors} -{" "}
                    <b>
                      {research.j_name} ({research.volume}) - [{research.doi}]
                    </b>
                  </p>
                </div>
              ))}
              <h3 className="text-xl font-semibold">Courses Taught</h3>
              <ul>
                <li className="p-2 border border-slate-200">Object-Oriented Programming</li>
                <li>Computer Networks</li>
                <li className="p-2 border border-slate-200">Computer Graphics</li>
                <li className="p-2 border border-slate-200">Artificial Intelligence</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default page;

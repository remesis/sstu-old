"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import PageLayout from "../../component/PageLayout";
import Link from "next/link";

const API_URL = "http://192.168.0.101:8000";

function CardItem({ name, designation, department, image }) {
  return (
    <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img src={image} alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Link href="/teachers/view/ahw">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {name}
          </Typography>
        </Link>
        <Typography color="blue-gray" className="font-medium" textGradient>
          {designation}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Like">
          <Typography
            as="a"
            href="#facebook"
            variant="lead"
            color="blue"
            textGradient
          >
            <i className="fab fa-facebook" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#twitter"
            variant="lead"
            color="light-blue"
            textGradient
          >
            <i className="fab fa-twitter" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#instagram"
            variant="lead"
            color="purple"
            textGradient
          >
            <i className="fab fa-instagram" />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
  );
}

const page = () => {
  const [teacherData, setteacherData] = useState([]);

  const fetchTeacherData = async () => {
    try {
      const response = await fetch(`http://192.168.0.101:8000/api/teachers/3/`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      console.log(data[0]);
      setteacherData(data[0]);
    } catch (error) {
      console.error("Error fetching teacher data:", error);
    }
  };

  useEffect(() => {
    fetchTeacherData();
  }, []);

  return (
    <PageLayout
      style={true}
      title="Department Of Physics"
      bg="https://images.theconversation.com/files/279451/original/file-20190614-32361-zufjgi.jpg?ixlib=rb-4.1.0&rect=0%2C264%2C3600%2C2171&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip"
    >
      <div className=" p-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-green-500 mr-5"></div>
            <p>Physics Amazes Us</p>
          </div>
        </h2>
        <p className="text-lg mb-6 text-gray-800">
          The{" "}
          <strong class="font-semibold text-gray-850 dark:text-white">
            Department of Physics
          </strong>{" "}
          at Sunamgonj Science and Technology University is dedicated to
          advancing scientific inquiry and discovery, exploring the fundamental
          principles of the universe and unraveling the mysteries of the
          physical world. Our mission extends to nurturing the next generation
          of physicists, providing them with the knowledge and skills to push
          the boundaries of human understanding. Through our commitment to
          education and research, we strive to contribute to the continuous
          expansion of human knowledge and inspire future generations of
          scientists.
        </p>

        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-green-500 mr-5"></div>
            <p> Mission</p>
          </div>
        </h2>
        <ul className="list-disc pl-8 mb-6 text-gray-800">
          <li className="text-lg">
            Instill a deep comprehension of physics fundamentals in students to
            empower them in problem-solving across diverse fields.
          </li>
          <li className="text-lg">
            Lead the charge in advancing physics knowledge and research,
            offering novel solutions to societal challenges.
          </li>
          <li className="text-lg">
            Share research breakthroughs through publications, public service,
            and professional initiatives, driving meaningful societal
            transformation.
          </li>
        </ul>

        {/* <h2 className="text-3xl font-bold mb-4 text-gray-900">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-green-500 mr-5"></div>
            <p> Academic Programs</p>
          </div>
        </h2>
        <ul className="list-disc pl-8 mb-6 text-gray-800">
          <li className="text-lg">Bachelor of Science in Computer Science</li>
          <li className="text-lg">
            Bachelor of Science in Computer Science and Engineering
          </li>
          <li className="text-lg">
            Master of Science in Computer Science and Engineering
          </li>
          <li className="text-lg">
            Master of Engineering in Computer Science and Engineering
          </li>
          <li className="text-lg">Master in Computer Applications</li>
        </ul> */}
        {/* <h2 className="text-3xl font-bold mb-4 text-gray-900">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-green-500 mr-5"></div>
            <p> Major Programs</p>
          </div>
        </h2>
        <ul className="list-disc pl-8 mb-6 text-gray-800">
          <li className="text-lg">Organic Chemistry</li>
          <li className="text-lg">Inorganic Chemistry</li>
          <li className="text-lg">Biochemistry</li>
        </ul> */}
      </div>
      <h2 className="text-3xl font-bold mb-4 text-gray-900">Faculty Members</h2>

      <div className="flex flex-wrap justify-center gap-10">
        <CardItem
          name={teacherData.name}
          designation={teacherData.designation}
          department={teacherData.department}
          image={teacherData.image}
        />
      </div>
    </PageLayout>
  );
};

export default page;

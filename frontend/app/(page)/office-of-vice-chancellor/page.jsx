import React from "react";
import PageLayout from "../component/PageLayout";

const OfficeofVC = () => {
  return (
    <div>
      <PageLayout
        title="Office of the Vice-Chancellor"
        bg="https://img.freepik.com/free-vector/3d-abstract-background-with-paper-cut-shape-colorful-green-carving-art_1217-4066.jpg?size=626&ext=jpg&ga=GA1.1.34264412.1714003200&semt=ais"
        style={true}
      >
        <div className="bg-white p-6  rounded-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-1 flex justify-center">
              <img
                className="w-48 h-48 object-cover bg-green-100 p-2 border border-slate-200 shadow-md rounded-md"
                src="https://sstu.ac.bd/wp-content/uploads/2024/01/1674212931820-240x300.jpg"
                alt="Prof. Dr. Md. Abu Naim Sheikh"
              />
            </div>
            <div className="md:col-span-2 text-gray-900">
              <p>
                Welcome to the Office of the Vice-Chancellor at Sunamgonj
                Science and Technology University.
              </p>
              <h2 className="mt-4 text-2xl font-bold text-gray-800">
                Meet Prof. Dr. Md. Abu Naim Sheikh, our Vice-Chancellor:
              </h2>
              <p className="mt-2 text-gray-700">
                Prof. Dr. Md. Abu Naim Sheikh, our esteemed Vice-Chancellor, is
                a visionary leader dedicated to advancing education, research,
                and innovation at Sunamgonj Science and Technology University.
                With a wealth of experience in academia and a deep commitment to
                the university’s mission, Dr. Md. Abu Naim Sheikh leads the way
                in shaping the future of our institution.
              </p>
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                Contact Information:
              </h3>
              <p className="mt-2 text-gray-700">
                If you wish to get in touch with Prof. Dr. Md. Abu Naim Sheikh
                or the Office of the Vice-Chancellor, please use the following
                contact details:
              </p>
              <ul className="mt-2 list-disc list-inside text-gray-700">
                <li>
                  Email:{" "}
                  <a href="mailto:vc@sstu.ac.bd" className="text-blue-500">
                    vc@sstu.ac.bd
                  </a>
                </li>
                <li>
                  Alternative Email:{" "}
                  <a
                    href="mailto:mansheikh@yahoo.com"
                    className="text-blue-500"
                  >
                    mansheikh@yahoo.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default OfficeofVC;

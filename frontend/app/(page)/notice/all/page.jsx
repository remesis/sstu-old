import React from "react";
import PageLayout from "../../component/PageLayout";

const page = () => {
  return (
    <PageLayout style={true} title="Notice" bg="https://www.kuet.ac.bd/images/gallery/0.jpg">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white shadow-md p-4">
          <h1 className="text-2xl font-bold text-gray-800">Notice 1</h1>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.</p>
        </div>
        <div className="bg-white shadow-md p-4">
          <h1 className="text-2xl font-bold text-gray-800">Notice 2</h1>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.</p>
        </div>
        <div className="bg-white shadow-md p-4">
          <h1 className="text-2xl font-bold text-gray-800">Notice 3</h1>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default page;

import React from "react";

const PageLayout = ({ title, bg, children, style }) => {
  if (style) {
    var className = "w-full container mx-auto shadow-md border rounded-md mt-16 p-10 text-black";
  } else {
    var className = "container mx-auto";
  }
  return (
    <div className="min-h-screen">
      <div className="text-white font-bold text-4xl text-center" style={{ backgroundImage: `url(${bg})` }}>
        <div className="bg-black bg-opacity-45 pt-40 pb-40  h-52 ">{title}</div>
      </div>
      <div className={className}>{children}</div>
    </div>
  );
};

export default PageLayout;

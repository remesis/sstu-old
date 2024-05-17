// components/SyndicateCard.jsx
import React from "react";

const SyndicateCard = ({ name, title, department, university, imageUrl }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center">
      <img
        className="w-24 h-24 object-cover rounded-full border-4 border-green-500 mb-4"
        src={imageUrl}
        alt={name}
      />
      <div className="text-center">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-green-600">{title}</p>
        {department && <p>{department}</p>}
        <p>{university}</p>
      </div>
    </div>
  );
};

export default SyndicateCard;

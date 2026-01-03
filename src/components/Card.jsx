import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, name, desc, price, imageURL }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 w-64 bg-white">
      <img src={imageURL} alt={name} className="w-full h-40 object-cover mb-4 rounded" />
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-600 mb-2">{desc}</p>
      <p className="text-green-600 font-semibold mb-4">{price} PKR</p>
      <Link to={`/product/${id}`} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
        View Details
      </Link>
    </div>
  );
};

export default Card;

import React from "react";

const MovieCard = ({ title, avatar }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800">
      <img className="w-full h-48 object-cover" src={avatar} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{title}</div>
      </div>
    </div>
  );
};

export default MovieCard;

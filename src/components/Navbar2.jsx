import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Handle search logic here, e.g., redirect to a search results page
    console.log("Searching for:", searchTerm);
  };
  return (
    <nav className=" flex item-center justify-between pl-12 py-4 ">
      <div className="flex space-x-8">
        <Link to="/" className="hover:bg-yellow-600  px-4 py-2 rounded">
          Home
        </Link>
        <Link
          to="/now_playing"
          className="hover:bg-yellow-600  px-4 py-2 rounded"
        >
          Now playing
        </Link>
        <Link to="/popular" className="hover:bg-yellow-600  px-4 py-2 rounded">
          Popular
        </Link>

        <Link to="/upcoming" className="hover:bg-yellow-600  px-4 py-2 rounded">
          Upcoming
        </Link>
      </div>
      {/* Other links */}

      <form
        onSubmit={handleSearchSubmit}
        className="flex items-center  ml-auto "
      >
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="border form-control border-gray-300 rounded px-2 py-1 text-black"
        />
        <div className="mr-14 ml-4">
          <button
            type="submit"
            className="bg-yellow-600 text-white rounded px-4 py-1 "
          >
            Search
          </button>
        </div>
      </form>
    </nav>
  );
};

export default Navbar2;

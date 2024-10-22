

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PlayIcon } from "@heroicons/react/24/solid";
import axios from "axios";

import Config from "../config";

const Nowplaying = ({ path }) => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
    var totalPagesToShow = 5;

  useEffect(() => {
    const fetchData = async () => {
      const urlPath = path || location.pathname;
      try {
        const res = await axios.get(
          `${Config.imdbUrl}${urlPath}?api_key=${Config.apiKey}`
        );
        setMovies(res.data.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [path, location.pathname]);

  

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = movies.slice(indexOfFirstItem, indexOfLastItem);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(movies.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="-mt-14">
      <div className="max-w-[1200px] mx-auto mt-24 left-12">
        <div className="relative p-4 mb-16 font-bold text-2xl pl-6">
          <span className="before:absolute before:left-0 before:top-0 before:bottom-0 mb-6 before:w-1 before:bg-yellow-500">
            Now playing
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentItems.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-wrap justify-center gap-4"
            >
              <div
                className="rounded-lg"
                style={{ backgroundColor: "#0c1222" }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  className="w-full sm:w-[250px] md:w-[200px] lg:w-[250px] h-auto sm:h-[300px] md:h-[250px] lg:h-[300px] m-4 rounded-xl hover:scale-110 duration-300 object-cover"
                  alt={item.original_title}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    {item.original_title}
                  </h5>
                </div>
                <div className="flex flex-col items-center justify-center mt-8">
                  <div className="flex flex-col space-x-4">
                    <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black rounded-full">
                      Watch Now
                    </button>
                    <button className="flex flex-row font-semibold text-1xl px-4 py-4 text-white rounded-full my-4 hover:bg-gray-600 hover:text-gray-300">
                      <PlayIcon className="h-6 w-6 text-white-400 mr-2" />
                      trailer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={handlePrevPage}
          className="bg-blue-500 text-white px-4 py-2 mr-2 rounded disabled:bg-gray-400"
        //   disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="px-4 py-2">  {currentPage}</span>
        <button
          onClick={handleNextPage}
          className="bg-blue-500 text-white px-4 py-2 ml-2 rounded disabled:bg-gray-400"
        //   disabled={currentPage === Math.ceil(movies.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Nowplaying;

import React, { useState, useEffect } from "react";

import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar2 from "./components/Navbar2";

import Pagination from "./components/Pagination";

import Upcoming from "./components/Upcoming";
import Popular from "./components/Popular";



import "./style/Carousel.css";
import Nowplaying from "./components/Nowplaying";

const App = () => {
  const slides = [
    {
      url: "https://png.pngtree.com/thumb_back/fw800/background/20240109/pngtree-a-compelling-movie-poster-background-image_15605697.jpg",
      title: "The hunger games",
    },
    {
      url: "https://images7.alphacoders.com/115/thumb-1920-1150492.jpg",
      title: "The gunfu panda",
    },
    {
      url: "https://archive.org/download/MarioMovie_Illumination_1_Twitter_Posters/FooUp6laYAE9Ma5.jpg",
      title: "Super mario",
    },
    {
      url: "https://m.media-amazon.com/images/M/MV5BOGU1ZjcyZmItZDZiMC00YzQ5LWE2NzEtMjNlYzE4MWIxNGYyXkEyXkFqcGc@._V1_QL75_UX1640_.jpg",
      title: "The gladiator",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay functionality with useEffect
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(autoSlide);
  }, [slides.length]);

  return (
    <BrowserRouter>
      <Navbar2 />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="max-w-[1400px] h-[780px] w-full m-auto py-160 px-4 relative">
                <div
                  style={{
                    backgroundImage: `url(${slides[currentIndex].url})`,
                  }}
                  className="w-full h-full rounded-2xl bg-center bg-cover duration-200"
                ></div>

                <div className="absolute top-1/2 right-10 transform -translate-y-1/2 text-white p-8">
                  <h2 className="text-4xl font-bold uppercase">
                    {slides[currentIndex].title}
                  </h2>
                </div>
              </div>
         
              <Popular path="/popular" />
              <Nowplaying path="/now_playing" />
              <Upcoming path="/upcoming" />
           
              <Pagination />
            </>
          }
        />
        <Route path="/popular" element={<Popular />} />
        <Route path="/now_playing" element={<Nowplaying />} />
        <Route path="/upcoming" element={<Upcoming />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import Homeimage from "../assets/Homeimage.png"; 
import camera from "../assets/camera.png";
import right from "../assets/right.png";
import arrow from "../assets/arrow.png";
import promo from "../assets/promo.png";
import brand from "../assets/brand.png";

const Home = () => {
  return (
    <>
      {/* Home */}
      <section
        id="home"
        className="min-h-[75vh] bg-white flex items-center"
      >
      <div>

<div className="w-full flex flex-col lg:flex-row items-center justify-center p-4 mt-32">

  {/* Text Section */}
  <div className="lg:w-6/12 w-full flex flex-col justify-center h-full text-center lg:text-left">
    <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-[#154D71] lg:w-10/12">
      Welcome to MenuMakchha!
    </h1>
    <p className="mt-6 sm:mt-8 text-[#1C6EA4] lg:w-10/12 text-sm sm:text-base md:text-lg">
      We're dedicated to bringing you the finest dining experiences from a variety of restaurants.
      Dive into our curated menus and uncover your next culinary delight!
    </p>
  </div>

  {/* Image Section */}
  <div className="lg:w-6/12 w-full mt-6 lg:mt-0 flex justify-center items-center">
    <img
      src={Homeimage}
      alt="food illustration"
      className="relative w-full h-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px]"
      loading="lazy"
    />
  </div>

</div>

{/* Cards Section */}
<div className="w-full p-4 flex justify-center mt-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full max-w-[1200px]">

    {/* Card 1 */}
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-md shadow-lg text-gray-700 
                    hover:shadow-xl hover:scale-105 active:scale-95 transition-transform duration-300 cursor-pointer h-full">
      <img src={camera} alt="Digital Presence" className="w-8 h-8 mb-2" />
      <p className="text-base font-light leading-relaxed text-center text-inherit">Digital Presence</p>
    </div>

    {/* Card 2 */}
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-md shadow-lg text-gray-700 
                    hover:shadow-xl hover:scale-105 active:scale-95 transition-transform duration-300 cursor-pointer h-full">
      <img src={right} alt="Conditional Recommendations" className="w-8 h-8 mb-2" />
      <p className="text-base font-light leading-relaxed text-center text-inherit">Conditional Recommendations</p>
    </div>

    {/* Card 3 */}
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-md shadow-lg text-gray-700 
                    hover:shadow-xl hover:scale-105 active:scale-95 transition-transform duration-300 cursor-pointer h-full">
      <img src={arrow} alt="Intelligent Sorting" className="w-8 h-8 mb-2" />
      <p className="text-base font-light leading-relaxed text-center text-inherit">Intelligent Sorting</p>
    </div>

    {/* Card 4 */}
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-md shadow-lg text-gray-700 
                    hover:shadow-xl hover:scale-105 active:scale-95 transition-transform duration-300 cursor-pointer h-full">
      <img src={promo} alt="Promo Code" className="w-8 h-8 mb-2" />
      <p className="text-base font-light leading-relaxed text-center text-inherit">Promo Code</p>
    </div>

    {/* Card 5 */}
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-md shadow-lg text-gray-700 
                    hover:shadow-xl hover:scale-105 active:scale-95 transition-transform duration-300 cursor-pointer h-full">
      <img src={brand} alt="Brand Enhancement" className="w-8 h-8 mb-2" />
      <p className="text-base font-light leading-relaxed text-center text-inherit">Brand Enhancement</p>
    </div>

  </div>
</div>



</div>

      </section>
    </>
  );
};

export default Home;


import React from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";

const About = () => {
  return (
    <section className="bg-white dark:bg-white-900 pt-28">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        {/* Text Section */}
        <div className="font-light text-black-500 sm:text-lg dark:text-black-400">
          <h2 className="mb-4 text-2xl sm:text-3xl lg:text-4xl tracking-tight font-extrabold text-white-900 dark:text-black">
            Discover the Essence of MenuMakchha
          </h2>
          <p className="mb-4">
            At MenuMakchha, we take immense pride in being Nepal's top restaurant, cafe, and hotel chain, renowned for offering an exquisite blend of authentic Nepali and international cuisine. Our mission is to provide an unparalleled dining and hospitality experience that showcases the rich culinary heritage and vibrant flavors of Nepal.
          </p>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img src={image1} alt="office content 1" className="w-full rounded-lg" />
          <img src={image2} alt="office content 2" className="mt-4 w-full lg:mt-10 rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="bg-sky-100 h-full flex pl-2 md:pl-8 justify-between text-black">
      <div className="flex flex-col py-64 xl:px-8 px-2">
        <div className="py-4 text-6xl sm:text-8xl font-semibold font-sans xl:py-4 bg-gradient-to-r from-orange-600 via-purple-600 to-blue-600 text-transparent bg-clip-text bg-300% animate-gradient">
          The Gateway<br></br> to Knowledge
        </div>
        <div className="text-xl sm:text-3xl font-light">
          Read your favourite books<br></br>
          <span className="text-orange-600 font-normal">Explore</span>, &nbsp;
          <span className="text-purple-600 font-normal">Discover</span> and
          &nbsp;
          <span className="text-blue-600 font-normal">Learn</span>!
        </div>
        <div>
          <Link to={'/login'}>
        <div className="bg-blue-500 hover:bg-blue-600 text-white hover:text-sky-100 font-bold py-4 px-10 rounded-full my-8 text-2xl w-fit shadow-lg shadow-blue-500/50">
          Learn
        </div>
          </Link>

        </div>
      </div>
      <div className="bg-[#effafc] py-32 invisible lg:visible flex align-middle">
        <img
          className="w-[38rem]"
          src="books_mint.jpg"
          alt="hero_image"
        ></img>
      </div>
    </div>
  );
}

export default Hero;

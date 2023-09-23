import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="bg-sky-100 h-screen flex px-8 justify-between text-black">
      <div className="flex flex-col py-64 xl:px-8 px-2">
        <div className="py-4 text-8xl font-semibold font-sans xl:py-4 bg-gradient-to-r from-orange-600 via-purple-600 to-blue-600 text-transparent bg-clip-text bg-300% animate-gradient">
          The Gateway<br></br> to Knowledge
        </div>
        <div className="text-3xl font-light">
          Read your favourite books<br></br>
          <span className="text-orange-600 font-normal">Explore</span>, &nbsp;
          <span className="text-purple-600 font-normal">Discover</span> and
          &nbsp;
          <span className="text-blue-600 font-normal">Learn</span>!
        </div>
        <div>
          <Link to={'/login'}>
        <div class="bg-blue-500 hover:bg-blue-600 text-white hover:text-sky-100 font-bold py-4 px-10 rounded-full my-8 text-2xl w-fit shadow-lg shadow-blue-500/50">
          Learn
        </div>
          </Link>

        </div>
      </div>
      <div className="bg-purple-600 py-32 px-16">
        <img
          className="w-80"
          src="https://images.unsplash.com/photo-1571988840298-3b5301d5109b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
          alt="hero_image"
        ></img>
      </div>
    </div>
  );
}

export default Hero;

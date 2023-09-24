import React from "react";
import { carouselData } from "../data/carouselData";
function Body() {
  const cara0 = carouselData[0].images.map((e) => {
    return (
      <div className="carousel-item h-full w-full">
          <img className="object-fill w-full" src={e.link} alt="book_image"/>
        </div>
    )
  })
  const cara1 = carouselData[1].images.map((e) => {
    return (
      <div className="carousel-item h-full w-full">
          <img className="object-fill w-full" src={e.link} alt="book_image"/>
        </div>
    )
  })
  const cara2 = carouselData[2].images.map((e) => {
    return (
      <div className="carousel-item h-full w-full">
          <img className="object-fill w-full" src={e.link} alt="book_image"/>
        </div>
    )
  })
  const cara3 = carouselData[3].images.map((e) => {
    return (
      <div className="carousel-item h-full w-full">
          <img className="object-fill w-full" src={e.link} alt="book_image"/>
        </div>
    )
  })
  // const cara2 = carouselData.map((e) => {
  //   return <Carousel img={e.image}/>
  // })
  // const cara3 = carouselData.map((e) => {
  //   return <Carousel img={e.image}/>
  // })
  // const cara4 = carouselData.map((e) => {
  //   return <Carousel img={e.image}/>
  // })
  return (
    <div className="flex flex-col h-screen bg-blue-300 text-black">

    <div className=" h-1/2 flex my-32 justify-center">
      <div className="h-96 carousel carousel-vertical px-2 align-middle shadow-lg w-full">
        {cara0}
      </div>
      <div className="h-96 carousel carousel-vertical px-2 align-middle shadow-lg w-full hidden md:block">
            {cara1}
      </div>
      <div className="h-96 carousel carousel-vertical px-2 align-middle shadow-lg w-full hidden lg:block">
            {cara2}
      </div>
      <div className="h-96 carousel carousel-vertical px-2 align-middle shadow-lg w-full hidden xl:block">
            {cara3}
      </div>
      
      
      </div>
      <div className="flex flex-col justify-around ">
    <div className="flex text-6xl font-thin w-full justify-center ">
      <span className="w-fit shadow-white">
        Endless Collections of Books
        </span>
        
    </div>
      <div className="text-md font-light w-full justify-center px-8 lg:px-64 xl:px-[24rem] py-16 bg-blue-300">
        Dive into a vast collection of books, magazines, journals, and multimedia resources spanning various genres and subjects. There's something for everyone, from avid readers to research enthusiasts.</div>
      </div>
    </div>
  );
}

export default Body;

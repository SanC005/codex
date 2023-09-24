import React from "react";

function Body() {
  return (
    <div className="flex flex-col h-screen bg-blue-300 text-black">

    <div className=" h-1/2 flex my-32 bg-red-500">
      <div className="h-96 carousel carousel-vertical px-2 align-middle shadow-lg w-full md:w-1/3 lg:w-1/4">
        <div className="carousel-item h-full w-full">
          <img className="object-fill w-full" src="http://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg" alt="book_image"/>
        </div>
        <div className="carousel-item h-full w-full ">
          <img className="object-fill w-full" src="http://images.amazon.com/images/P/0002005018.01.LZZZZZZZ.jpg" alt="book_image"/>
        </div>
        <div className="carousel-item h-full w-full">
          <img className="object-fill w-full" src="http://images.amazon.com/images/P/042519065X.01.LZZZZZZZ.jpg" alt="book_image"/>
        </div>
        <div className="carousel-item h-full w-full">
          <img className="object-fill w-full" src="http://images.amazon.com/images/P/0439625602.01.LZZZZZZZ.jpg" alt="book_image"/>
        </div>
        <div className="carousel-item h-full w-full ">
          <img className="object-fill w-full" src="http://images.amazon.com/images/P/0824940954.01.LZZZZZZZ.jpg" alt="book_image"/>
        </div>
      </div>

      <div className="h-96 carousel carousel-vertical px-2 align-middle shadow-lg md:w-1/3 invisible md:visible lg:w-1/4">
        <div className="carousel-item h-full w-full">
          <img className="object-fill w-full" src="http://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg" alt="book_image"/>
        </div>
        <div className="carousel-item h-full w-full ">
          <img className="object-fill w-full" src="http://images.amazon.com/images/P/0002005018.01.LZZZZZZZ.jpg" alt="book_image"/>
        </div>
        <div className="carousel-item h-full w-full">
          <img className="object-fill w-full" src="http://images.amazon.com/images/P/042519065X.01.LZZZZZZZ.jpg" alt="book_image"/>
        </div>
        <div className="carousel-item h-full w-full">
          <img className="object-fill w-full" src="http://images.amazon.com/images/P/0439625602.01.LZZZZZZZ.jpg" alt="book_image"/>
        </div>
        <div className="carousel-item h-full w-full ">
          <img className="object-fill w-full" src="http://images.amazon.com/images/P/0824940954.01.LZZZZZZZ.jpg" alt="book_image"/>
        </div>
      </div>

      <div className="h-96 carousel carousel-vertical rounded-box px-2 align-middle shadow-lg w-1/3 invisible md:visible md:w-1/4">
        <div className="carousel-item h-full w-full">
          <img className="object-fill w-full" src="http://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg" alt="book_image"/>
        </div>
        <div className="carousel-item h-full w-full ">
          <img className="object-fill w-full" src="http://images.amazon.com/images/P/0002005018.01.LZZZZZZZ.jpg" alt="book_image"/>
        </div>
        <div className="carousel-item h-full w-full">
          <img className="object-fill w-full" src="http://images.amazon.com/images/P/042519065X.01.LZZZZZZZ.jpg" alt="book_image"/>
        </div>
        <div className="carousel-item h-full w-full">
          <img className="object-fill w-full" src="http://images.amazon.com/images/P/0439625602.01.LZZZZZZZ.jpg" alt="book_image"/>
        </div>
        <div className="carousel-item h-full w-full ">
          <img className="object-fill w-full" src="http://images.amazon.com/images/P/0824940954.01.LZZZZZZZ.jpg" alt="book_image"/>
        </div>
      </div>

      <div className="h-96 carousel carousel-vertical rounded-box px-2 align-middle  shadow-lg w-1/3 invisible md:visible md:w-1/4">
        <div className="carousel-item h-full w-full">
          <img className="object-fill w-full" src="http://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg" alt="book_image"/>
        </div>
        <div className="carousel-item h-full w-full ">
          <img className="object-fill w-full" src="http://images.amazon.com/images/P/0002005018.01.LZZZZZZZ.jpg" alt="book_image"/>
        </div>
        <div className="carousel-item h-full w-full">
          <img className="object-fill w-full" src="http://images.amazon.com/images/P/042519065X.01.LZZZZZZZ.jpg" alt="book_image"/>
        </div>
        <div className="carousel-item h-full w-full">
          <img className="object-fill w-full" src="http://images.amazon.com/images/P/0439625602.01.LZZZZZZZ.jpg" alt="book_image"/>
        </div>
        <div className="carousel-item h-full w-full ">
          <img className="object-fill w-full" src="http://images.amazon.com/images/P/0824940954.01.LZZZZZZZ.jpg" alt="book_image"/>
        </div>
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

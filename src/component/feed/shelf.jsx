import React, { useEffect, useState } from "react";

import Card from "../card/card";




const Shelf = ({ title, books }) => {


  return (
    <div className="pt-6">
      <h1 className="mb-2  ml-[.7rem] text-xl font-bold text-white md:font-semibold">
        {title}
      </h1>
      <div className="no-scrollbar grid grid-flow-col overflow-x-scroll px-2 md:hidden ">
        {books &&
          books.length > 0 &&
          books.map((i,key) => (
            <Card
               key={key}
            
              image_src={i.image_url_l}
            //   image_alt={i && i.original_title}
            //   id={i.id}
            />
          ))}
      </div>
      <div className="no-scrollbar hidden grid-flow-col overflow-x-scroll px-2 md:grid  ">
        {books &&
          books.length > 0 &&
          books.map((i,key) => (
            <Card
            key={key}
         
           image_src={i.image_url_l}
         //   image_alt={i && i.original_title}
         //   id={i.id}
         />
          ))}
      </div>
    </div>
  );
};

export default Shelf;
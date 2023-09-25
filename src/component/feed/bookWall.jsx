import React from "react";
import Shelf from "./shelf";
import { bookData } from "../data/bookData";
const Body = () => {
  const fiction = bookData.filter((book) => book.genre === "Fiction");
  const history = bookData.filter((book) => book.genre === "History");

  const horror = bookData.filter((book) => book.genre === "Horror");

  const romance = bookData.filter((book) => book.genre === "Romance");
  const thriller = bookData.filter((book) => book.genre === "Thriller");

  const allRecommendations = [
    {
      genre: "Fiction",
      data: fiction,
    },
    {
      genre: "History",
      data: history,
    },
    {
      genre: "Romance",
      data: romance,
    },
    {
      genre: "Thriller",
      data: thriller,
    },
    {
      genre: "Horror",
      data: horror,
    },
  ];

  console.log(allRecommendations);

  return (
    <div className="">
      {allRecommendations.map((data,key) => {
        return <Shelf key={key} title={data.genre} books={data.data} />;
      })}
    </div>
  );
};
export default Body;

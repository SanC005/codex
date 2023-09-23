import React from "react";
import { sampleData } from "../data/sampleData";
import Card from "../card/card";
function Feed() {
  const card = sampleData.map((data) => {
    return <Card key={data.id} title={data.title}></Card>;
  });
  return (
    <div className="flex h-max w-max overflow-scroll  carousel carousel-end rounded-box">
      <div className="carousel-item">
       {card}
      </div>
    </div>
  );
}

export default Feed;

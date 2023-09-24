import React from "react";
import { sampleData } from "../data/sampleData";
import Card from "../card/card";
function Feed() {
  const card = sampleData.map((data) => {
    return <Card key={data.id} title={data.title}></Card>;
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
      {card}
    </div>
  );
}

export default Feed;

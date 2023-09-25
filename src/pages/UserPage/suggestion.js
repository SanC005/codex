import React from "react";
import { bookData } from "../../component/data/bookData";
import Book from "../../component/card/bookCard";




const Suggestions = () => {
  function getRandomItems(arr, numItems) {
    if (numItems >= arr.length) {
      return arr;
    }

    const shuffled = arr.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.slice(0, numItems);
  }

  const recommendationList = getRandomItems(bookData, 10);

  return (
    <div>
      <div className=" pt-8">
        <div
          
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-full"
        >
          {recommendationList &&
            recommendationList.length > 0 &&
            recommendationList.map((book, index) => (
              <Book
                key={index}
                title={book.book_title}
                author={book.book_author}
                genre={book.genre}
                coverImage={book.image_url_l}
                authCheckCallBack={()=>{}}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Suggestions;

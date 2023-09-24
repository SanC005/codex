import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import SearchCard from "./searchCard";
import { MoonLoader } from "react-spinners";
import { useParams } from "react-router-dom";


function SearchResults({redirectionTo}) {
  const { searchTerm } = useParams();
  console.log(searchTerm);
  const listInnerRef = useRef();
  const [currPage, setCurrPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
  const [bookList, setBookList] = useState([]);
  const [lastPage, setLastPage] = useState(false);

  const key = "AIzaSyB3weTpE_uWcbQFLITLLf3clroI4EOB7Sw";


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&startIndex=${currPage}&maxResults=10&key=${key}`
        );

        if (response.data.items && response.data.items.length === 0) {
          setLastPage(true);
          return;
        }
        console.log(response.data.items);

        setPrevPage(currPage);
        setBookList([...bookList, ...response.data.items]);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (!lastPage && prevPage !== currPage) {
      fetchData();
    }
  }, [currPage, lastPage, prevPage, bookList]);

  useEffect(() => {
  setCurrPage(0)
  setBookList([])
    
  }, [searchTerm])
  

  const onScroll = () => {
    if (listInnerRef.current) {
      console.log("'scrolled'");
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setCurrPage(currPage + 1);
      }
    }
  };

  return (
    <div>
      <div className="bg-yellow pt-8">
        <div
          ref={listInnerRef}
          onScroll={onScroll}
          style={{
            border: "1px solid black",
            width: "100%",
            height: "90vh",

            overflow: "auto",
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 	"
        >
          {bookList &&
            bookList.length > 0 &&
            bookList.map((i, index) => (
              <SearchCard
                key={index}
                title={i.volumeInfo.title}
                img_src={i.volumeInfo?.imageLinks?.thumbnail}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import SearchCard from "./searchCard";
import { MoonLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import Lottie from "lottie-react";
import bookLoading from "../../assests/bookLoading.json"
<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>

  
function SearchResults({redirectionTo}) {
  const { searchTerm } = useParams();
  // console.log(searchTerm);
  const listInnerRef = useRef();
  const [currPage, setCurrPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
  const [bookList, setBookList] = useState([]);
  const [lastPage, setLastPage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const key = process.env.REACT_APP_GOOGLE_API_KEY;
  const style = {
    height: 300,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&startIndex=${currPage}&maxResults=10&key=${key}`
        );
        setTimeout(() => {
          setIsLoading(false);
        }, "300");
        
        if (response.data.items && response.data.items.length === 0) {
          setLastPage(true);
          return;
        }
        // console.log(response.data.items);

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
      // console.log("'scrolled'");
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setCurrPage(currPage + 1);
      }
    }
  };

  return (
    <div>
      <div className="bg-sky-100 pt-24">
        {isLoading?<div className="h-screen flex justify-center my-32">
          <Lottie animationData={bookLoading} style={style}/>
          </div>:
        <div
          ref={listInnerRef}
          onScroll={onScroll}

          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-full w-full overflow-auto"
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
          <div>
          <Lottie animationData={bookLoading} style={style}/>
          </div>
        </div>}
      </div>
    </div>
  );
}

export default SearchResults;

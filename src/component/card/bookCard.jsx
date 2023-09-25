import { useState } from "react";

import { useIsAuthenticated } from "react-auth-kit";

export default function BookCard({ title, author, genre, coverImage, authCheckCallBack }) {
    const [count, setCount] = useState(10);
    const isAuthenticated = useIsAuthenticated();
    const handleAddButton = () => {
      console.log(isAuthenticated === true);
      if (isAuthenticated() ) {
        setCount(count - 1);
      } else {
        authCheckCallBack();
      }
    };
  
    return (
      <div className="w-52 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <img
          src={coverImage}
          alt="Product"
          className="h-52 w-52 object-cover rounded-t-xl"
        ></img>
  
        <div className="px-4 py-2 w-48">
          <span className="text-gray-400 mr-3 uppercase text-xs ">
            <p className="truncate block capitalize">{author}</p>
          </span>
          <p className="text-lg font-bold text-black truncate block capitalize">
            {title}
          </p>
          <div className="flex justify-between items-center ">
            <p className="text-sm text-gray-600 cursor-auto ml-2">{count}</p>
            <div className=" ">
              <button
                type="button"
                onClick={handleAddButton}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                </svg>
                <span className="sr-only">Icon description</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };
  const DropDown = () => {
    return (
      <select
        name="Filters"
        id="cars"
        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none"
      >
        <option value="title">Title</option>
        <option value="artist">Artists</option>
        <option value="writer">Writer</option>
        <option value="published">published</option>
      </select>
      // <div
      //   id="dropdown"
      //   className="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      // >
      //   <ul
      //     className="py-2 text-sm text-gray-700 dark:text-gray-200"
      //     aria-labelledby="dropdown-button"
      //   >
      //     <li>
      //       <button
      //         type="button"
      //         className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      //       >
      //         Mockups
      //       </button>
      //     </li>
      //     <li>
      //       <button
      //         type="button"
      //         className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      //       >
      //         Templates
      //       </button>
      //     </li>
      //     <li>
      //       <button
      //         type="button"
      //         className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      //       >
      //         Design
      //       </button>
      //     </li>
      //     <li>
      //       <button
      //         type="button"
      //         className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      //       >
      //         Logos
      //       </button>
      //     </li>
      //   </ul>
      // </div>
    );
  };

  return (
    <div>
      <form>
        <div className="flex">
        
        

          <div className="relative w-full">
            <input
            onChange={(x) => {setSearchTerm(x.target.value)}}
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search for Books..."
              required=""
            />
            <button
            onClick={onhandleSubmit}
              type="submit"
              className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>

    </div>
  );
};

export default SearchBar;

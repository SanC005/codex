import React from "react";
import { useState } from "react";
import Card from "../card/card";
import { bookData } from "../data/bookData";
const Card2 = ({ newid, newpic, newtitle, callBackFunction2,genre,author,year }) => {
  return (
    <>
      <div onClick={callBackFunction2} className="min-h-screen grid place-items-center font-mono ">
        <div className="bg-white h-[450px] w-[450px] rounded-md">
          <div className="flex justify-center items-center leading-none">
            <img
              src={newpic}
              alt="pic"
              className="h-80 w-72 object-cover rounded-md shadow-2xl mt-6 transform -translate-y-10 hover:-translate-y-4 transition duration-700"
            />
          </div>
          <div className="p-3 ">
            <p className="block mb-1 text-center font-extralight text-sm">{newtitle}</p>
            <p className="text-xs tracking-tighter text-gray-600 text-center">{genre}&nbsp;{year} </p>
          </div>
          <div className="flex justify-between items-center p-0">
            <div>{author}</div>
            <div className="flex">
              <i className="material-icons" style={{ color: "#522cad" }} />
              <span className="text-sm ml-1">Available</span>
              <div className=" px-3 ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="currentColor"
                  className="bi bi-bag-plus"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                  />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

function Feed() {
  
  const [id, setId] = useState(null)
  const [pic, setpic] = useState(null)
  const [title, settitle] = useState(null)
  const [genre, setgenre] = useState(null)
  const [author, setauthor] = useState(null)
  const [year, setyear] = useState(null)

  const [launch, setLaunch] = useState(false)

  const defaultCss = " hidden fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-opacity-50 bg-gray-900"
  const launchedCss = "  fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-opacity-50 bg-gray-900"

  const callBackHandler = (newid, newtitle, newpic,year,author,genre) => {
    setId(newid)
    setpic(newpic)
    settitle(newtitle)
    setLaunch(true)
    setgenre(genre)
    setyear(year)
    setId(author)
  }

  const remove = () => {
    setId(null)
    setpic(null)
    settitle(null)
    setyear(null)
    setauthor(null)
    setgenre(null)
    setLaunch(false)
  }

  return (

    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {bookData.map((data) => {
          return <Card key={data._id.$oid} img={data.image_url_l}  callBackFunction={() => {
            callBackHandler(data._id.$oid, data.book_title || data["Book-Title"], data.image_url_l,data.year_of_publication,data.book_author || data["Book-Author"],data.genre)
          }} />
        })}
      </div>
      <div  className={launch ? launchedCss : defaultCss}>
        <Card2 newid={id} newpic={pic} newtitle={title} callBackFunction2={remove} year={year} author={author} genre={genre} />
      </div>

    </div>

  );
}

export default Feed;

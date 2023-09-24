import React from 'react'
import { Link } from "react-router-dom";
import Cartcard from "./cartcard"

//this is just for the cart
export const sampleData = [
    {
      id: 1,
      title: "First Post!",
      img: "https://www.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e-1520x800.webp",

    },
    {
      id: 2,
      title: "Second Post!",
      img: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

    },

  ];
  

function Cart() {
    const cart = sampleData.map((data) => {
        return <Cartcard key={data.id} title={data.title}></Cartcard>
    })
    return (
        
        <div className="h-screen bg-pink-600 pt-24">
            <h1 className="mb-10 text-center text-2xl font-bold">Your Books</h1>
            <div className="mx-auto max-w-5xl justify-center px-4 md:flex md:space-x-4 xl:px-0">
                <div className="rounded-lg md:w-2/3 " >
                    {cart}
                </div>
                <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                    <div className="mb-2 flex justify-between">
                        <p className="text-gray-700">Total no of books Issued </p>
                        <p className="text-gray-700">1</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-700">Fine for Late submission</p>
                        <p className="text-gray-700">0</p>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between">
                        <p className="text-lg font-bold">Total</p>
                        <div className="">
                            <p className="mb-1 text-lg font-bold">0</p>
                        </div>
                    </div>
                    <Link to="/user">
                    <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                        Contiune Reading
                    </button>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Cart

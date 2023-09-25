import React from 'react'
import { Link } from "react-router-dom";
import Cartcard from "./cartcard"
import { bookData } from '../../component/data/bookData';
//this is just for the cart

  

function Cart() {
    const cart = bookData.slice(0,2).map((data) => {
        return <Cartcard key={data._id.$oid} title={data.book_title} author={data.book_author} img={data.image_url_l}></Cartcard>
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
                        <p className="text-gray-700">2</p>
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

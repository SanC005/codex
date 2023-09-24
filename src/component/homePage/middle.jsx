import React from 'react'
function Middle() {

  return (
    <div className='h-screen bg-gray-100 py-16'>
        <div className='sm:text-6xl text-3xl font-bold flex justify-center pt-80 sm:pt-72 md:py-32 md:pb-12 font-serif px-12 '>
        <span className='hover:text-orange-600'>Easy.</span>&nbsp;
        <span className='hover:text-green-600'>Reliable.</span>&nbsp;
        <span className='hover:text-blue-600'>Cheap.</span>&nbsp;
          
        </div>
        <div className='font-sm md:text-2xl font-extralight md:py-4 py-12 px-12'>
            <span className='font-bold text-md text-orange-600'>Rent</span> your desired books.<br></br> <span className='font-bold text-md text-green-600'>Access</span> Knowledge with a click.<br></br> <span className='font-bold text-md text-blue-600'>Search</span> your next funtime by searching our extensive catalogue of books.
        </div>
        <div className='flex justify-center md:py-8'>
            <img className="md:w-1/2 w-3/4" src='books_svg_vector.svg' alt='book_vector'></img>
        </div>
    </div>
  )
}

export default Middle
import React from 'react'

function Hero() {
  return (
    <div className='bg-cyan-400 h-screen flex px-8 justify-between text-black'>
      <div className='flex flex-col py-64'>
      <div className='text-8xl font-semibold font-sans py-2'>
        The Gateway<br>
        </br> to Knowledge
        </div>
        <div className='text-3xl font-light'>
          Read your favourite books
        </div>
        </div>

      <div className='bg-red-400 py-32 px-16'>
        <img className="w-80" src="https://images.unsplash.com/photo-1571988840298-3b5301d5109b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="hero_image"></img>
      </div>
      </div>
  )
}

export default Hero
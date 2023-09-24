import React from 'react'
import Body from '../../component/homePage/body'
import Hero from '../../component/homePage/hero'
import Middle from '../../component/homePage/middle'
function Home() {
  return (
    <div className=' w-full text-black'>
      {/* <Sidebar/> */}
      <Hero/>
      <Body/>
      <Middle/>
    </div>
  )
}

export default Home
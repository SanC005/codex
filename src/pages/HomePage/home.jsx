import React from 'react'
import Header from '../../component/homePage/header'
import Body from '../../component/homePage/body'
import Footer from '../../component/homePage/footer'
import Hero from '../../component/homePage/hero'
import Middle from '../../component/homePage/middle'
// import Sidebar from '../../component/Sidebar/sidebar'
function Home() {
  return (
    <div className='bg-blue-600 text-black'>
      {/* <Sidebar/> */}
      <Header/>
      <Hero/>
      <Body/>
      <Middle/>
      <Footer/>
    </div>
  )
}

export default Home
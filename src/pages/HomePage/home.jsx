import React from 'react'
import Header from '../../component/homePage/header'
import Body from '../../component/homePage/body'
import Footer from '../../component/homePage/footer'
import Hero from '../../component/homePage/hero'
function Home() {
  return (
    <div className='bg-blue-600'>
      <Header/>
      <Hero/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default Home
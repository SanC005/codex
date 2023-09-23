import React from 'react'
import Header from '../homePage/header'
import Footer from '../homePage/footer'
import { Outlet } from 'react-router-dom'


const CommonLayout = () => {
  return (
    <div className=' text-black'>
    {/* <Sidebar/> */}
    <Header/>
    <Outlet/>
    
    <Footer/>
  
  </div>
    
  )
}

export default CommonLayout
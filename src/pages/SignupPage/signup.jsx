import React from 'react'
// import Header from '../../component/homePage/header'
import { Link } from 'react-router-dom'
function Signup() {
  const getDetails = (e) => {
    e.preventDefault();
    const emailInput = document.querySelector('#email').value
    const usernameInput = document.querySelector('#username').value
    const passwordInput = document.querySelector('#password').value
    // setSignUpDetails({username:`${usernameInput}`,email:`${emailInput}`,password:`${passwordInput}`})
    // console.log(signUpDetails)
    const url = `https://chimes-api.vercel.app/api/v2/auth/register`
    const item = {username:`${usernameInput}`,email:`${emailInput}`,password:`${passwordInput}`}
    // postUser(item,url)
    alert('you have successfully signed up')
  }
  return (
    <div>
      {/* <Header/> */}
    <div className="bg-gray-50">
      
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div
      className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
    >
      <Link to='/'>
      <img
        className="w-8 h-8 mr-2"
        src="book.png"
        alt="logo"
        />
        </Link>
      Codex
    </div>
    <div className="w-full bg-white rounded-lg shadow-lg shadow-gray-500/50 md:mt-0 sm:max-w-md xl:p-0 ">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
          Create an account
        </h1>
        <form className="space-y-4 md:space-y-6" action="#">
        <div>
            <label
              htmlFor="Name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              UserName
            </label>
            <input
              id="username"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="Enter Your name"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="abc@gmail.com"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Confirm password
            </label>
            <input
              type="confirm-password"
              name="confirm-password"
              id="confirm-password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              required=""
            />
          </div>
          <Link to={'/user'}>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-500 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            onClick={(e) => getDetails(e)}
          >
            Create an account
          </button>
          </Link>
          <div className="text-sm font-semibold text-indigo-600 hover:text-indigo-500 ">
          <Link to='/login'>
            Already have an account?{" "}

          </Link>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</div>

  )
}

export default Signup

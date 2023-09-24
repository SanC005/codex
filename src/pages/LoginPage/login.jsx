import React, { useEffect, useState } from "react";
import Header from "../../component/homePage/header";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
function Login() {
  const [user,setUser] = useState({});
  const [log,setLog] = useState(false);
  const logOut = () => {
    console.log("loged out")
    setUser({})
    setLog(false)
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }
  function handleCallbackResponse(res){
    // console.log("Encoded JWT ID token is: "+res.credential)
    let userObj = jwtDecode(res.credential);
    console.log(userObj)
    setUser(userObj);
    setLog(true);
  }
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "834208871160-k1fvufn3o3ftp8c58j6fft2hbe87gtnh.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"), 
      { theme: "outline",size:"large"}
    );
    google.accounts.id.prompt();
  },[])
  const getLogDetails = async (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value
    // const usernameInput = document.querySelector('#username').value
    const password = document.querySelector('#password').value
    // setSignUpDetails({username:`${usernameInput}`,email:`${emailInput}`,password:`${passwordInput}`})
    // console.log(signUpDetails)
    try {
      const url = ``
      const item = {email,password}
      // const {user,token} = await postUser(item,url)
      // console.log(user)
      // console.log(token)
      // localStorage.setItem('username', user.username)
      // localStorage.setItem('email', email)
      // localStorage.setItem('token', token)
      alert('successfully logged in')
    } catch (error) {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    }
  }
  return (
    <div className="">
      {/* <Header/> */}
    <div className="flex items-center min-h-screen p-4 bg-gray-100 justify-center ">
      {log?<div>
        Your are Successfully logged in!<br></br>
        <div className="">
          <Link to={'/user'}>
        <div className="bg-blue-500 hover:bg-blue-600 text-white hover:text-sky-100 font-bold py-4 px-10 rounded-full my-8 text-2xl w-fit shadow-lg shadow-blue-500/50">
          Browse books
        </div>
          </Link>
          <Link to={'/'} onClick={() => logOut()}>
        <div className="bg-black hover:bg-gray-700 text-white hover:text-gray-100 font-semibold py-4 px-10 rounded-full my-8 text-lg w-fit shadow-lg shadow-blue-800/50 mx-10">
          Sign out?
        </div>
          </Link>

        </div>
        </div>:
      <div className="flex flex-col overflow-hidden rounded-md max md:flex-row md:flex-1 lg:max-w-screen-md shadow-lg shadow-gray-500/50">
        <div className="p-4 py-6 text-white bg-blue-500 w-0 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly invisible md:visible">
          <img alt="image1" src="https://images.unsplash.com/photo-1571988840298-3b5301d5109b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" />
        </div>
        <div>
          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
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
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 pb-4">
                Sign in to your account
              </h2>
              <div className="" id="signInDiv">
                
              </div>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="abc@gmail.com"
                      autoComplete="email"
                      required=""
                      className="bg-gray-50  border-gray-300  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="text-sm">
                      <p
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot password?
                      </p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      autoComplete="current-password"
                      required=""
                      className="bg-gray-50  border-gray-300 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <Link to={'/user'}>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                  </Link>
                </div>
              </form>
              <div className="mt-10 text-center text-sm text-gray-500">
                Not a member?
                <Link to="/signup">
                <p 
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  Don't have an account?
                </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>}
    </div>
    </div>
  );
}

export default Login;

import React from 'react'
import { Link } from 'react-router-dom'

import  bookShelfs  from '../../assets/img/lib.jpeg';

const Login = () => {
    return (
      <section className="flex flex-col items-center h-screen md:flex-row ">
        <div className="hidden w-full h-screen bg-black lg:block md:w-1/3 xl:w-2/3">
          <img
            src={bookShelfs}
            alt=""
            className="object-cover overlay opacity-40 w-full h-full"
          />
        </div>
        <div className="flex items-center justify-center w-full h-screen px-6 bg-green-1300 md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 lg:px-16 xl:px-12">
          <div className="w-full h-100">
            <Link
              to="#"
              className="flex items-center w-32 mb-4 font-medium text-gray-900 title-font md:mb-0"
            >
              <img
                src="https://fmcabeokuta.net/wp-content/uploads/LOGO-150x150.jpg"
                alt="logo"
                className="hidden md:block h-12 md:h-16"
              />
            </Link>
            <h1 className="mt-0 md:mt-12 text-2xl font-semibold tracking-tighter text-green-700 sm:text-3xl title-font">
              Log in to your account
            </h1>
            <form className="md:mt-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-relaxed tracking-tighter text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name=""
                  id="email"
                  placeholder="Your Email "
                  className="w-full px-4 py-2 mt-2 text-base text-green-700 bg-gray-100 border-transparent rounded-lg focus:border-green-500 focus:bg-white focus:ring-0 "
                  autoFocus
                  autoComplete="true"
                  required
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-relaxed tracking-tighter text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  name=""
                  id="password"
                  placeholder="Your Password"
                  minLength="6"
                  className="w-full px-4 py-2 text-base text-green-700 bg-gray-100 border-transparent rounded-lg focus:border-green-500 focus:bg-white focus:ring-0"
                  required
                />
              </div>
              <div className="mt-2 text-right">
                <Link
                  to="#"
                  className="text-sm font-semibold leading-relaxed text-gray-700 hover:text-green-700 focus:text-green-700"
                >
                  Forgot Password?
                </Link>
              </div>
              <button
                type="submit"
                className="block w-full px-4 py-3 mt-6 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg bg-gradient-to-r from-green-700 hover:from-green-600 to-green-600 hover:to-green-700 focus:shadow-outline focus:outline-none"
              >
                Log In
              </button>
            </form>
            <hr className="w-full my-6 border-gray-300" />

            <p className="mt-8 text-center">
              Need an account?
              <Link
                to="/user/register"
                className="font-semibold text-green-500 hover:text-green-700"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </section>
    );
}

export default Login

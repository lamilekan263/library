import React from 'react'
import { Link } from 'react-router-dom'
import BookReading from '../../assets/img/bookReading.jpeg'

const Register = () => {
    return (
      <section className="flex flex-col my-7 h-screen md:flex-row">
        <div className="container mx-auto">
          <div className="flex justify-center px-2 py-6 ">
            <div className="flex w-full rounded-lg xl:w-3/4 lg:w-11/12 lg:shadow-xl ">
              <div className="relative hidden w-full h-auto bg-cover border-r rounded-l-lg bg-green-1300 lg:block lg:w-6/12">
                <div className="relative z-7 m-12 text-left ">
                  <Link
                    to="#"
                    className="flex items-center w-32 font-medium text-gray-900 title-font md:mb-6"
                  >
                    <img src={BookReading} alt="" />
                  </Link>
                  <h2 className="mt-12 mb-2 text-2xl font-semibold tracking-tighter text-green-700 sm:text-3xl title-font">
                    Create an account.
                  </h2>
                  <div className="w-full mt-16 mb-8 text-base leading-relaxed text-gray-900 sm:md:w-3/3 lg:text-1xl ">
                    We are Happy to Have you here
                  </div>
                </div>
              </div>
              <div className="w-full px-8 py-24 border-gray-100 rounded-lg bg-green-1300 lg:w-8/12 lg:px-24 lg:py-4 lg:rounded-l-none s">
                <div className="relative z-7 text-left ">
                  <Link
                    to="#"
                    className="flex items-center w-32 mb-4 font-medium text-gray-900 title-font md:mb-0"
                  >
                    <img
                      src="https://fmcabeokuta.net/wp-content/uploads/LOGO-150x150.jpg"
                      alt="logo"
                      className="h-12 md:h-16"
                    />
                  </Link>
                  <form className="mt-6" action="#" method="POST">
                    <div>
                      <label className="block text-base font-medium leading-relaxed text-gray-700">
                        User Name
                      </label>
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Your User Name "
                        className="w-full px-4 py-2 mt-2 text-base bg-gray-100 border-transparent rounded-lg ext-green-700 focus:border-gray-500"
                        autoFocus
                        autoComplete="true"
                        required
                      />
                    </div>
                    <div className="mt-4">
                      <label className="block text-base font-medium leading-relaxed text-gray-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name=""
                        id=""
                        placeholder="Your Email "
                        className="w-full px-4 py-2 mt-2 text-base bg-gray-100 border-transparent rounded-lg ext-green-700 focus:border-gray-500"
                        autoFocus
                        autoComplete="true"
                        required
                      />
                    </div>
                    <div className="flex flex-wrap mt-4 mb-6 -mx-3">
                      <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                        <label
                          className="text-base font-medium leading-relaxed text-gray-700"
                          htmlFor="password"
                          minLength="6"
                        >
                          Password
                        </label>
                        <input
                          className="block w-full px-4 py-2 mt-2 text-base text-green-700 bg-gray-100 border-transparent rounded-lg ext-green-700 focus:border-gray-500"
                          id="password"
                          type="text"
                          placeholder="Your Password"
                        />
                        <p className="mt-1 text-xs italic text-green-500">
                          Please fill out this field.
                        </p>
                      </div>
                      <div className="w-full px-3 md:w-1/2">
                        <label
                          className="text-base font-medium leading-relaxed text-gray-700"
                          htmlFor="confirm"
                        >
                          Confirm
                        </label>
                        <input
                          className="block w-full px-4 py-2 mt-2 text-base text-green-700 bg-gray-100 border-transparent rounded-lg ext-green-700 focus:border-gray-500 "
                          id="confirm"
                          type="text"
                          placeholder="Confirm"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="block w-full px-4 py-3 mt-6 font-semibold text-white transition duration-500 ease-in-out transhtmlForm rounded-lg bg-gradient-to-r from-green-700 hover:from-green-500 to-green-500 hover:to-green-700 focus:shadow-outline focus:outline-none"
                    >
                      Log In
                    </button>
                  </form>
                  <p className="mt-8 text-center">
                    Already have an account?{" "}
                    <Link
                      to="/user/login"
                      className="font-semibold text-green-500 hover:text-green-700"
                    >
                      Sign In
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Register

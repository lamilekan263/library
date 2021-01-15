import React from 'react'
import { Link , NavLink } from 'react-router-dom'

const Footer = () => {
    return (
      <footer className="mt-10 text-gray-700 bg-white border-t body-font">
        <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row md:flex-no-wrap ">
          <Link className="flex items-center justify-center w-48 font-medium text-gray-900 title-font md:justify-start " to="#">
            {/* <img src="../badges/WhitePink.svg" alt=""/> */}
            <h1 className="text-3xl">LOGO</h1>
          </Link>
          <nav className="flex flex-wrap justify-center py-6 text-base items-cente md:mr-auto md:ml-4 md:py-1 md:pl-4 ">
            <NavLink
              to="#"
              className="mr-5 text-sm text-gray-600 hover:text-gray-800"
            >
              {" "}
              Prices
            </NavLink>
            <NavLink
              to="#"
              className="mr-5 text-sm text-gray-600 hover:text-gray-800"
            >
              {" "}
              Contact
            </NavLink>
            <NavLink
              to="#"
              className="mr-5 text-sm text-gray-600 hover:text-gray-800"
            >
              {" "}
              Services
            </NavLink>
            <NavLink
              to="#"
              className="mr-5 text-sm text-gray-600 hover:text-gray-800"
            >
              {" "}
              About
            </NavLink>
          </nav>
          <div className="flex flex-wrap justify-center ml-auto md:flex-no-wrap md:justify-end">
            <input
              className="w-2/4 px-4 py-2 mr-2 text-base text-blue-700 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0 lg:w-full xl:w-1/2"
              placeholder="Your Email"
              type="text"
            />
            <button className="inline-flex px-4 py-2 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 hover:-translate-y-1 hover:scale-110 focus:ring focus:outline-none">
              Subscribe
            </button>
          </div>
        </div>
        <div className="bg-blueGray-900">
          <div className="container flex flex-col flex-wrap px-5 py-6 mx-auto sm:flex-row">
            <p className="text-sm text-center text-gray-600 sm:text-left ">
              © Your Company 2020
            </p>
            <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
              <NavLink to="#" className="text-white hover:text-blue-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </NavLink>
              <NavLink to="#" className="ml-4 text-white hover:text-blue-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </NavLink>
              <NavLink to="#" className="ml-4 text-white hover:text-blue-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </NavLink>
            </span>
          </div>
        </div>
      </footer>
    );
}

export default Footer

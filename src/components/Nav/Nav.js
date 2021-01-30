import React from 'react'
import { NavLink, Link } from 'react-router-dom'


const Nav = ({ menu }) => {
  return (
    <header className="text-gray-700 bg-white border-t border-b body-font sticky top-0 z-10">
      <div className="container flex  justify-between flex-wrap px-5 py-2 mx-auto items-center flex-row ">
        <Link
          className="flex items-center w-40 mb-4 font-medium text-gray-900 title-font md:mb-0 "
          to="/"
        >
          <img
            src="https://fmcabeokuta.net/wp-content/uploads/LOGO-150x150.jpg"
            alt="logo"
            className="h-12 md:h-16"
          />
        </Link>
        <div className="lg:hidden" onClick={menu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
        <nav className="hidden md:flex flex-wrap items-center justify-center text-base ">
          <NavLink
            to="/"
            className="mr-5 text-md font-semibold text-gray-600 lg:ml-24 hover:text-green-800 "
            activeclassname="border-b-2 border-green-900"
          
          >
            Home
          </NavLink>

          {/* <NavLink
            to="/resources/opac"
            className="mr-5 text-md font-semibold text-gray-600 hover:text-green-800"
            activeclassname="border-b-2 border-green-900"
          >
            Opac
          </NavLink>
          <a
            href="https://www.who.int/hinari/en/"
            className="mr-5 text-md font-semibold text-gray-600 hover:text-green-800"
            activeclassname="border-b-2 border-green-900"
          >
            Hinary
          </a> */}
          <NavLink
            to="/resources/free"
            className="mr-5 text-md font-semibold text-gray-600 hover:text-green-800"
            activeclassname="border-b-2 border-green-900"
          >
           Resources
          </NavLink>
          <NavLink
            to="/services"
            className="mr-5 text-md font-semibold text-gray-600 hover:text-green-800"
            activeclassname="border-b-2 border-green-900"
          >
            Services
          </NavLink>
          <NavLink
            to="#"
            className="mr-5 text-md font-semibold text-gray-600 hover:text-green-800"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="mr-5 text-md font-semibold text-gray-600 hover:text-green-800"
            activeclassname="border-b-2 border-green-900"
          >
            Contact
          </NavLink>
        </nav>
        <div className="hidden md:flex ml-auto">
          <Link to="/user/login">
            <button className="items-center px-8  animate-bounce py-3 mt-4 ml-5 font-semibold text-white transition duration-500 ease-in-out transform bg-green-700 border rounded-lg lg:inline-flex lg:mt-px hover:border-blue hover:bg-white hover:text-green-700 focus:ring focus:outline-none">
              Sign In
              <svg
                className="hidden w-4 h-4 ml-1 lg:block "
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Nav

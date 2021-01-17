import React from 'react';
import { Link } from 'react-router-dom'

const Menu = ({isMenuOpen, menu}) => {
    return (
      <div
        className={
          isMenuOpen
            ? "my-5 flex flex-col justify-end  transition-transform delay-1000 ease-in container"
            : "hidden"
        }
        onClick={menu}
      >
        <Link to='/' className="m-2 mr-5 text-md font-semibold text-gray-600 hover:text-green-800">
          Home
        </Link>
        <Link to="/resources/opac" className="m-2 mr-5 text-md font-semibold text-gray-600 hover:text-green-800">
          Opac
        </Link>
        <Link to="#" className="m-2 mr-5 text-md font-semibold text-gray-600 hover:text-green-800">
          Hinary
        </Link>
        <Link to="#" className="m-2 mr-5 text-md font-semibold text-gray-600 hover:text-green-800">
          Free Resources
        </Link>
        <Link to="/services" className="m-2 mr-5 text-md font-semibold text-gray-600 hover:text-green-800">
          Services
        </Link>
        <Link to="#" className="m-2 mr-5 text-md font-semibold text-gray-600 hover:text-green-800">
          About
        </Link>
        <Link to="/contact" className="m-2 mr-5 text-md font-semibold text-gray-600 hover:text-green-800">
          Contact
        </Link>
        <Link to="/user/login">
          <button className="items-center px-8  animate-bounce py-3 m-2 mr-5 font-semibold text-white transition duration-500 ease-in-out transform bg-green-700 border rounded-lg lg:inline-flex lg:mt-px hover:border-blue hover:bg-white hover:text-green-700 focus:ring focus:outline-none">
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
    );
}

export default Menu
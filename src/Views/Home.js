import React, { useEffect } from 'react'
import AOS from "aos";
import { Link } from 'react-router-dom'

const Home = () => {
  useEffect(() => {
    AOS.init({duration : 3000})
  }, [])
    return (
      <div>
        <section className="text-gray-700 body-font">
          <div className="container flex flex-col items-center px-5 py-16 mx-auto lg:px-20 lg:py-24 md:flex-row">
            <div data-aos='fade-right' className="flex flex-col items-center w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 lg:mr-20 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0 lg:text-center">
              <h2 className="mb-1 text-xs font-medium tracking-widest text-green-500 title-font">
                Company Name
              </h2>
              <h1 className="mb-8 text-2xl font-bold tracking-tighter text-center text-green-800 lg:text-left lg:text-5xl title-font">
                Welcome to Our Library
              </h1>
              <p className="mb-8 text-base leading-relaxed text-center text-gray-700 lg:text-left lg:text-1xl">
                Browse from the largest collection of ebooks. Read stories from
                anywhere, at anytime.
              </p>
              <div className="flex justify-center">
                <Link
                  to="#"
                  className="inline-flex items-center font-semibold text-green-700 md:mb-2 lg:mb-0 hover:text-green-400 "
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="currentColor"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
              <img
                className="object-cover object-center rounded-lg "
                alt="hero"
                src="https://static.live.templately.com/2020/07/872fb83e-vactor.svg"
              />
            </div>
          </div>
        </section>
        {/* Testimonial Section starts here*/}
        <section className="text-gray-700 body-font">
          <div className="container flex flex-col items-center px-5 py-16 mx-auto lg:px-20 lg:py-24 md:flex-row"></div>
        </section>

        {/* Testimonial section ends here */}
      </div>
    );
}

export default Home

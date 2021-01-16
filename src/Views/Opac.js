import React from 'react'
import Online from '../assets/img/book.svg'

const Opac = () => {
    return (
      <div className="container   justify-between flex-wrap p-5 mx-auto md:items-center flex-row text-center">
        <div className="md:flex  justify-center mt-10">
          <div className="h-80 bg-green-700 my-5 md:mr-5 hover:bg-green-500 cursor-pointer rounded-md w-full md:w-96 flex flex-col justify-center items-center">
            <img alt="" src={Online} className="m-0 p-0 bg-white text-white" />
            <h1 className="text-white md:text-xl">
              Access our online resources here
            </h1>
          </div>
          <div className="h-80 bg-green-900 hover:bg-green-500 rounded-md w-full cursor-pointer md:w-96 flex justify-center items-center">
            <img alt="" src={Online} className="m-0 p-0 bg-white text-white" />
            <h1 className="text-white md:text-xl">
              Access our offline resources here
            </h1>
          </div>
        </div>
      </div>
    );
}

export default Opac

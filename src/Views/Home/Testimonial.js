import React from 'react';
import { Link } from 'react-router-dom';



const Testimonial = () => {
    
  

    return (
      <section className="text-gray-700 body-font">
        <div className="container px-8 pb-24 mx-auto  lg:px-4">
          <div className="flex flex-wrap -m-4">
            <div className="p-8 mx-auto mb-6 lg:w-1/3 lg:mb-0 ">
              <div className="h-full p-4 text-left border rounded-xl shadow-2xl">
                <p className="text-base font-medium leading-relaxed text-gray-700">
                  "Skate ipsum dolor sit amet, slam birdie wheels ollie
                  darkslide egg plant. Baseplate 540 helipop flypaper feeble
                  griptape. Nollie deck street bluntslide half-cab yeah. Casper
                  slide ollie north 540 Bill Danforth slide cess slide nose
                  blunt. Pressure flip Streetstyle in Tempe mute-air judo air
                  backside fastplant yeah. ".
                </p>
                <Link to="#" className="flex flex-wrap items-center mt-6">
                  <img
                    alt="testimonial"
                    className="inline-block object-cover object-center w-16 h-16 mb-4 rounded-full bg-4gray-100"
                    src="https://dummyimage.com/302x302/94a3b8/ffffff"
                  />
                </Link>
                <span className="flex flex-col flex-grow ">
                  <span className="font-medium text-gray-900 title-font">
                    Jakko Svensson
                  </span>
                  <span className="text-sm text-gray-500 uppercase">
                    Corporate Position
                  </span>
                </span>
              </div>
            </div>
            <div className="p-8 mx-auto mb-6 lg:w-1/3 lg:mb-0">
              <div className="h-full p-4 text-left border rounded-xl shadow-2xl">
                <p className="text-base font-medium leading-relaxed text-gray-700">
                  "Skate ipsum dolor sit amet, slam birdie wheels ollie
                  darkslide egg plant. Baseplate 540 helipop flypaper feeble
                  griptape. Nollie deck street bluntslide half-cab yeah. Casper
                  slide ollie north 540 Bill Danforth slide cess slide nose
                  blunt. Pressure flip Streetstyle in Tempe mute-air judo air
                  backside fastplant yeah. ".
                </p>
                <Link to="#" className="flex flex-wrap items-center mt-6" >
                  <img
                    alt="testimonial"
                    className="inline-block object-cover object-center w-16 h-16 mb-4 rounded-full bg-4gray-100"
                    src="https://dummyimage.com/302x302/94a3b8/ffffff"
                  />
                </Link>
                <span className="flex flex-col flex-grow ">
                  <span className="font-medium text-gray-900 title-font">
                    Mike Taissöön
                  </span>
                  <span className="text-sm text-gray-500 uppercase">
                    Corporate Position
                  </span>
                </span>
              </div>
            </div>
            <div className="p-8 mx-auto mb-6 lg:w-1/3 lg:mb-0">
              <div className="h-full p-4 text-left border rounded-xl shadow-2xl">
                <p className="text-base font-medium leading-relaxed text-gray-700">
                  "Skate ipsum dolor sit amet, slam birdie wheels ollie
                  darkslide egg plant. Baseplate 540 helipop flypaper feeble
                  griptape. Nollie deck street bluntslide half-cab yeah. Casper
                  slide ollie north 540 Bill Danforth slide cess slide nose
                  blunt. Pressure flip Streetstyle in Tempe mute-air judo air
                  backside fastplant yeah. ".
                </p>
                <Link className="flex flex-wrap items-center mt-6" to="#">
                  <img
                    alt="testimonial"
                    className="inline-block object-cover object-center w-16 h-16 mb-4 rounded-full bg-4gray-100"
                    src="https://dummyimage.com/302x302/94a3b8/ffffff"
                  />
                </Link>
                <span className="flex flex-col flex-grow ">
                  <span className="font-medium text-gray-900 title-font">
                    Sanna Ristola
                  </span>
                  <span className="text-sm text-gray-500 uppercase">
                    Corporate Position
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}


export default Testimonial
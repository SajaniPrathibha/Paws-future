import React from 'react'
import NavBar from '../components/NavBar'


const Home = () => {
  return (
    <div>
        <NavBar/>
          {/* Hero Section */}
          <div className="relative w-full h-screen flex justify-center items-center px-5">
              <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="absolute top-0 left-0 w-full h-full object-cover z-0"

              >

                  <source src="/images/v1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
              </video>


              <div className="text-center text-white z-10">
                  <h1 className="text-5xl md:text-[120px] z-10 font-bold text-white text-stroke-black hover:text-transparent transition-all duration-500">
  Paws Future
</h1>

                  <p className="mt-4 text-lg z-1 md:text-2xl font-semibold ">Adopt, Don't Stop</p>
              </div>
          </div>
    </div>
  )
}

export default Home
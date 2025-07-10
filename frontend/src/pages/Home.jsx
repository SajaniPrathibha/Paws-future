import React from 'react'
import NavBar from '../components/NavBar'
import Flipcard from './FlipCard'


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
      <div className="relative w-full min-h-[75vh] px-6 md:px-12 lg:px-24 py-10 flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#FFFFFF] mb-8">
            Who We Are?
          </h2>
          <p className="text-[#F0ECE2] max-w-3xl">
          "At Paws Future, we believe every dog deserves a life full of love, safety, and
           purpose. Our mission is to create a better tomorrow for abandoned and neglected 
           dogs by connecting them with compassionate families and supporting long-term care. 
           From wagging tails to second chances, we’re not just finding homes—we’re building 
           futures, one paw at a time."
          </p>
          <Flipcard/>
      </div>

    </div>
  )
}

export default Home
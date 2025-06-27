import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdoptReasons = () => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/info');
    }

  return (
    <div>
          <div className="relative w-full min-h-[75vh] px-6 md:px-12 lg:px-24 py-10 flex flex-col lg:flex-row justify-between items-center gap-20">
              {/* Content Box */}
              <div className="w-full lg:w-1/2 p-2">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
                      Why Need To Adopt?
                  </h2>
                  <p className="!text-xl md:text-4xl font-extrabold text-white mb-8">
                  "Because every abandoned dog deserves more than a second chance — 
                  they deserve a home, a family, and a life filled with love."</p>
                  <p className="text-gray-100 text-justify mb-5">
                      Adopting a dog isn’t just an act of kindness — it’s an act of healing, for both of you.
                       Behind every abandoned dog is a heart that’s been broken, eyes that have searched for 
                       love, and a spirit that refuses to give up. When you choose adoption, you’re not just
                        giving them a home — you’re giving them a second chance at life. You become their
                         reason to trust again, to feel safe, to wag their tail with joy instead of fear. 
                         And in return, they give you a kind of love that’s pure, forgiving, and forever. 
                      Saving them might feel like a small thing — but to that dog, it means everything.
                  </p>


                  <button
                      onClick={handleNavigate}
                      className="mt-6 px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition"
                  >
                      Learn More
                  </button>
              </div>
              <div className="w-full lg:w-1/2 p-10">
                  <img src="/images/d1.gif" alt="Dog GIF" className="w-110 h-auto " />

              </div>


          </div>
    </div>
  )
}

export default AdoptReasons
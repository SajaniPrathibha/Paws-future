import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

const tips = [
  {
    title: 'Provide Nutritious Food',
    content: 'Feed your dog a balanced diet suitable for their age, size, and health.'
  },
  {
    title: 'Fresh Water Daily',
    content: 'Make sure clean, fresh water is always available.'
  },
  {
    title: 'Regular Exercise',
    content: 'Take your dog on daily walks and give them time to play and stay active.'
  },
  {
    title: 'Vet Checkups',
    content: 'Schedule regular veterinary visits and keep up with vaccinations.'
  },
  // Add more tips here...
];

const Info = () => {

  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/dogs');
  }
  return (
    <section id="info" className="min-h-screen py-10 px-4 md:px-24 text-white">
      <div className="relative bg-black  w-full min-h-[75vh] px-6 md:px-12 lg:px-24 py-10 flex flex-col lg:flex-row justify-between items-center gap-30"> 
        <div className="w-full lg:w-1/2 p-2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#FFFFFF] mb-8">
             Dogs?
            </h2>
             <p className="text-[#F0ECE2] text-justify mb-5">
             Dogs are loyal, loving, and irresistibly adorable companions that have been 
             by our side for thousands of years. Whether big or small, fluffy or sleek, every
            dog has its own unique personality that makes them special. With their wagging
            tails, playful energy, and those classic puppy eyes, dogs bring joy, comfort, 
            and endless affection into our lives. They don’t just become pets—they become 
            family.
              </p>
        </div>
      
           <div className="w-full lg:w-1/2 p-2">
              <img src="/images/dog3.jpg" alt="Dog GIF" className="w-[450px] h-auto" />
           </div>  
      </div>
      {/* Take Care of Dog */}
      <div className="w-full  mt-20 p-8 rounded-xl text-black ">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#FFFFFF] mb-8"> How to Take Care of Dog...</h2>
        <div className="space-y-4 p-8">
          {tips.map((tip, index) => (
            <div key={index} className="border border-[#FF914D] rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-4 py-3 bg-[#252422] text-white font-semibold 
                       hover:bg-[#FF914D] hover:text-black transition duration-200 cursor-pointer"
              >
                {tip.title}
              </button>
              {openIndex === index && (
                <div className="px-4 py-3 text-[#F0ECE2] bg-[#1b1a18]">
                  {tip.content}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* Adoption Part */}
      <div className="w-full bg-[#cac5bf] mt-20 p-8 rounded-xl text-black ">
        <h3 className="text-2xl font-bold mb-4">Why Adopt?</h3>
        <p className="!text-xl md:text-4xl font-bolt text-black mb-8">
          Adopting a dog not only saves a life but also enriches your own. Rescue dogs come
          from many backgrounds, each one deserving of love, care, and a second chance.
        </p>
      </div>
      

      <div className='w-full mt-20 p-8 rounded-xl text-white bg-[#252422]'>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="w-full lg:w-1/2 p-2">
            <img src="/images/dog4.gif" alt="Dog GIF" className="w-[500px] h-auto " />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 p-2">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8">How to Adopt?</h2>
            <ol className="list-decimal list-inside space-y-4 text-[#F0ECE2] text-lg">
              <li><strong>Browse Available Dogs:</strong> Explore our online gallery or visit the shelter to meet dogs currently up for adoption.</li>
              <li><strong>Choose Your Companion:</strong> Spend time with the dogs and find the one that best fits your lifestyle and personality.</li>
              <li><strong>Submit an Adoption Form:</strong> Fill out our application form with details about your home, experience, and preferences.</li>
              <li><strong>Home Visit (if required):</strong> Our team may visit your home to ensure it's safe and suitable for a new pet.</li>
              <li><strong>Meet & Greet:</strong> Bring your family and any existing pets to meet the dog and ensure compatibility.</li>
              <li><strong>Finalize the Adoption:</strong> Once approved, pay the adoption fee, complete the paperwork, and take your dog home!</li>
            </ol>

            <button
              onClick={handleNavigate}
              className="mt-6 px-6 py-3 bg-[#FF914D] hover:bg-[#FF6B35] text-black font-bold rounded-lg transition cursor-pointer"
            >
              Let's Adopt
            </button>
          </div>

          {/* Image Section */}
          

        </div>
      </div>

    </section>
    
  )
}

export default Info
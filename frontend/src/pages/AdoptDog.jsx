import React from 'react'
import Slider from './Slider';
import { useNavigate } from 'react-router-dom'

const slides = [
    {
        id: 1,
        title: 'Bella',
        subtitle: 'Loving & Calm',
        description: 'Enjoys cuddles and walks.',
        image: './images/S1.jpeg',
    },
    {
        id: 2,
        title: 'Max',
        subtitle: 'Playful & Loyal',
        description: 'Loves to fetch and snuggle.',
        image: './images/to.jpeg',
    },
    {
        id: 3,
        title: 'Luna',
        subtitle: 'Sweet & Quiet',
        description: 'Perfect for peaceful homes.',
        image: './images/s3.jpeg',
    },
    {
        id: 4,
        title: 'Rocky',
        subtitle: 'Alert & Active',
        description: 'Great for active families.',
        image: './images/s2.jpg',
    },
    {
        id: 5,
        title: 'Daisy',
        subtitle: 'Friendly & Shy',
        description: 'Warms up with love.',
        image: './images/s4.jpg',
    },
];
  
  

const AdoptDog = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/dogs');
    }
  return (
      <div className="w-full min-h-[90vh] px-6 md:px-12 lg:px-24 py-10 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10 z-10">
              Every Home Deserves a Wagging Tail
          </h2>
          <p className="text-[#F0ECE2] text-justify mb-5">
              There’s something magical about coming home to a wagging tail and a happy 
              face that’s been waiting just for you. Dogs aren’t just pets—they’re family,
               companions, and loyal friends who bring warmth, joy, and unconditional love 
               into our lives. Whether you live alone or with a full house, there’s a dog 
               out there ready to make your place feel even more like home. Adopting a dog 
               means gaining a best friend who’s always excited to see you, no matter what. 
               Because truly, every home deserves a wagging tail.
          </p>
          <div className='w-full min-h-[90vh] px-6 md:px-12 lg:px-24 py-10 flex flex-col items-center text-center'>
              <Slider slides={slides} isPageBackground={true} />
          </div>
          <button
              onClick={handleNavigate}
              className="mt-6 px-6 py-3 bg-[#FF914D] hover:bg-[#FF6B35] text-black font-bold rounded-lg transition cursor-pointer"
          >
              Let's Adopt
          </button>

     </div>
      )
}

export default AdoptDog
import React from 'react'
import Slider from './Slider';

const slides = [
    {
        id: 1,
        title: 'First',
        subtitle: 'slide',
        description: 'Praesent ac sem eget est.',
        image: 'https://picsum.photos/id/1/500/500',
    },
    {
        id: 2,
        title: 'Second',
        subtitle: 'slide',
        description: 'Praesent ac sem eget est.',
        image: 'https://picsum.photos/id/234/500/500',
    },
    {
        id: 3,
        title: 'Third',
        subtitle: 'slide',
        description: 'Praesent ac sem eget est.',
        image: 'https://picsum.photos/id/790/500/500',
    },
];
  

const AdoptDog = () => {
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

     </div>
      )
}

export default AdoptDog
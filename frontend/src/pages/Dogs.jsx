import React from 'react'
import DogCardGrid from './DogCardGrid';
import { useNavigate } from 'react-router-dom'


const adoptableDogs = [
    {
        title: "Bella",
        text: "Bella is a playful 2-year-old who loves cuddles and belly rubs.",
        image: "/images/s4.jpg",
    },
    {
        title: "Max",
        text: "Max is a loyal and calm companion, perfect for a quiet home.",
        image: "/images/A2.jpg",
    },
    {
        title: "Luna",
        text: "Luna is a gentle soul rescued from the streets. She loves kids and long walks in the park.",
        image: "/images/A3.jpeg",
    },
    {
        title: "Rocky",
        text: "Rocky is full of energy and loves to fetch. He’s great for an active family.",
        image: "/images/A1.jpeg",
    },
    {
        title: "Daisy",
        text: "Daisy is sweet, shy at first, but opens up with treats and love. Ideal for a calm home.",
        image: "/images/A5.jpg",
    },
    {
        title: "Shadow",
        text: "Shadow is a loyal protector who bonds deeply. Best for someone experienced with dogs.",
        image: "/images/A6.jpg",
    },
    {
        title: "Milo",
        text: "Milo is a small dog with a big heart. Loves laps, treats, and lazy mornings.",
        image: "/images/A4.jpg",
    },
    {
        title: "Zara",
        text: "Zara is curious, brave, and smart. She’s eager to learn and loves toys.",
        image: "/images/A8.jpeg",
    },
    {
        title: "Toby",
        text: "Toby is older but still spry. He needs a quiet home where he can retire in peace.",
        image: "/images/A9.jpeg",
    },
    {
        title: "Nala",
        text: "Nala is affectionate and sociable. She gets along with other pets and kids.",
        image: "/images/A11.jpeg",
    },
];


const Dogs = () => {

    const navigate = useNavigate();

    const handleAdoptClick = (dog) => {
        navigate("/adoptionform", { state: { selectedDog: dog } });
    };

  return (
      <div className="w-full min-h-[90vh] px-6 md:px-12 lg:px-24 py-10 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10 z-10">
              Bring Home a Lifetime of Love
          </h2>
          <div className="w-full">
            <DogCardGrid
                  cards={adoptableDogs}
                  heading="Give them a forever home. Adopt, don’t shop."
                  buttonLabel="Adopt"
                  onButtonClick={handleAdoptClick}
                  />
          </div>

     </div>
     
    
        
  )
}

export default Dogs
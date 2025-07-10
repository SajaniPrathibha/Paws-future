import React from 'react';
import './flipCardStyles.css'; // Custom CSS for perspective & 3D transforms

const images = [
    {
        src:"/images/dogs1.jpeg",
        alt: "colorful fishes in the ocean",
        text: "Abandoned"
    },
    {
        src: "/images/to.jpeg",
        alt: "colorful fish in the ocean",
        text: "To"
    },
    {
        src: "/images/adopt.jpg",
        alt: "colorful fishes in the ocean",
        text: "Adopt"
    },
];

const Flipcard = () => {
    return (
        <div className="max-w-screen-xl mx-auto py-10 px-4">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
                {images.map((image, index) => (
                    <div key={index} className="w-72 perspective">
                        <div className="relative w-full h-80 transition-transform duration-700 transform-style preserve-3d hover:rotate-y-180">
                            {/* Front Side */}
                            <div className="absolute w-full h-full backface-hidden">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover rounded-lg shadow-lg"
                                />
                            </div>

                            {/* Back Side */}
                            <div className="absolute w-full h-full bg-[#133463] text-white rounded-lg flex flex-col justify-center items-center px-6 text-center rotate-y-180 backface-hidden">
                                <h3 className="text-4xl font-bold uppercase">{image.text}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Flipcard;

import { useState, useRef } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'

const Help = () => {
    const images = [
        { src: "/images/dogs1.jpeg", alt: "dog1", text: "Abandoned" },
        { src: "/images/dogS1.jpg", alt: "to", text: "To" },
        { src: "/images/dogS2.jpg", alt: "adopt", text: "Adopt" },
        { src: "/images/dogS3.jpeg", alt: "dog2", text: "Safe" },
        { src: "/images/dogS4.jpg", alt: "to2", text: "Home" },
        { src: "/images/dogS5.jpg", alt: "adopt2", text: "Love" },
        { src: "/images/dogS6.jpeg", alt: "dog3", text: "Care" },
    ];

    const visibleCount = 5;
    const middleIndex = Math.floor(visibleCount / 2);
    const [startIndex, setStartIndex] = useState(0);
    const lastMoveTime = useRef(0);
    const moveDelay = 400;

    const getVisibleImages = () => {
        const result = [];
        for (let i = 0; i < visibleCount; i++) {
            result.push(images[(startIndex + i) % images.length]);
        }
        return result;
    };

    const rotateLeft = () => {
        setStartIndex((prev) => (prev + 1) % images.length);
    };

    const rotateRight = () => {
        setStartIndex((prev) =>
            (prev - 1 + images.length) % images.length
        );
    };

    const handleMouseMove = (e) => {
        const now = Date.now();
        if (now - lastMoveTime.current < moveDelay) return;

        const bounds = e.currentTarget.getBoundingClientRect();
        const middle = bounds.left + bounds.width / 2;
        const buffer = 50;

        if (e.clientX < middle - buffer) {
            rotateRight();
            lastMoveTime.current = now;
        } else if (e.clientX > middle + buffer) {
            rotateLeft();
            lastMoveTime.current = now;
        }
    };

    const handleClick = (clickedIndex) => {
        const relativeIndex = (clickedIndex - middleIndex + images.length) % images.length;
        const newStart = (startIndex + relativeIndex) % images.length;
        setStartIndex(newStart);
    };

    const imageVariants = {
        0: { x: '-100%', scale: 0.4, zIndex: 0 },
        1: { x: '-60%', scale: 0.6, zIndex: 1 },
        2: { x: '0%', scale: 1, zIndex: 5 },
        3: { x: '60%', scale: 0.6, zIndex: 1 },
        4: { x: '100%', scale: 0.4, zIndex: 0 },
    };

    const visibleImages = getVisibleImages();

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/donate');
    }

    return (
        <div className="w-full min-h-[90vh] px-6 md:px-12 lg:px-24 py-10 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10 z-10">
                We Need Your Help
            </h2>

            {/* Only mouse movement inside this area triggers rotation */}
            <div
                className="relative w-full h-[400px] flex items-center justify-center mb-10 overflow-hidden"
                onMouseMove={handleMouseMove}
            >
                {visibleImages.map((image, i) => (
                    <motion.div
                        key={`${image.alt}-${startIndex + i}`}
                        className="absolute flex flex-col items-center cursor-pointer"
                        initial={false}
                        animate={imageVariants[i]}
                        transition={{ duration: 0.6 }}
                        style={{ width: '40%' }}
                        onClick={() => handleClick(i)}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="rounded-[12px] shadow-lg w-full"
                        />
                        <p className="mt-4 text-white font-bold text-xl">{image.text}</p>
                    </motion.div>
                ))}
            </div>
            <button
                onClick={handleNavigate}
                className="mt-6 px-6 py-3 bg-[#FF914D] hover:bg-[#FF6B35] text-black font-bold rounded-lg  transition cursor-pointer"
            >
                Let's Help
            </button>
        </div>
    );
};

export default Help;

import React from "react";

const DogCardGrid = ({ cards = [], heading = "", buttonLabel = "", onButtonClick }) => {
    return (
        <div className="relative w-full px-6 md:px-12 lg:px-24 pt-10 flex flex-col mt-20 items-center text-center">
            {heading && (
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-20 z-10">
                    {heading}
                </h2>
            )}
            <ul className="flex flex-wrap p-0 m-0 list-none">
                {cards.map((card, idx) => (
                    <li key={idx} className="w-full sm:w-1/2 lg:w-1/3 p-4 flex">
                        <div className="bg-white shadow-xl rounded overflow-hidden flex flex-col w-full hover:shadow-2xl transition-shadow">
                            <div
                                className="w-full h-48 bg-cover bg-center filter contrast-75 hover:contrast-100 transition-all"
                                style={{ backgroundImage: `url(${card.image})` }}
                            ></div>
                            <div className="p-4 flex flex-col flex-1">
                                <h2 className="text-gray-600 text-xl font-light uppercase tracking-wider mb-2">
                                    {card.title}
                                </h2>
                                <p className="text-gray-500 text-sm flex-1 mb-4">{card.text}</p>
                                <button
                                    onClick={() => onButtonClick && onButtonClick(card)}
                                    className="w-full py-2 border border-gray-300 text-black bg-[#FF914D] hover:bg-[#FF6B35] transition rounded"
                                >
                                    {buttonLabel}
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DogCardGrid;

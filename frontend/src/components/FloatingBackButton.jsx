import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const FloatingBackButton = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleBack = () => {
        navigate(-1); // go back to previous page
    };

    // Optional: hide button on home page ("/")
    if (location.pathname === "/") return null;

    return (
        <button
            onClick={handleBack}
            className="fixed bottom-6 left-6 z-50 bg-[#FF914D] hover:bg-[#FF6B35] text-white p-3 rounded-full shadow-lg transition duration-300 ease-in-out"
            title="Go Back"
        >
            <FaArrowLeft size={20} />
        </button>
    );
};

export default FloatingBackButton;

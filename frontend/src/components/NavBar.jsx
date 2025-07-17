import React, { useState } from "react";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50  flex justify-between px-6 py-4 bg-transparent ">

            {/* Left Section - Logo and Name */}
            <div className="flex items-center">
                {/* <img src="/logo.png" alt="Logo" className="w-10 h-10 mr-2" /> */}
                <span className="italic text-lg font-semibold text-[#fffeff] text-stroke text-glow">
                    Paws Future
                </span>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-[#fffeff] focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>


            <nav
                className={`${menuOpen ? "block" : "hidden"
                    } absolute top-16 right-6 bg-white shadow-lg p-4 rounded-lg md:flex md:static md:bg-transparent md:shadow-none md:p-0 md:space-x-6`}
            >
                <a href="#home" className="block md:inline-block text-[#fffeff] hover:underline py-2" onClick={() => setMenuOpen(false)}>
                    Home
                </a>
                <a href="#adoptReasons" className="block md:inline-block text-[#fffeff] hover:underline py-2" onClick={() => setMenuOpen(false)}>
                    Info
                </a>
                <a href="#help" className="block md:inline-block text-[#fffeff] hover:underline py-2" onClick={() => setMenuOpen(false)}>
                    Help
                </a>
                <a href="#adoption" className="block md:inline-block text-[#fffeff] hover:underline py-2" onClick={() => setMenuOpen(false)}>
                    adoption
                </a>

                <a href="#contact" className="block md:inline-block text-[#fffeff] hover:underline py-2" onClick={() => setMenuOpen(false)}>
                    Contact us
                </a>
            </nav>
        </header>
    );
};

export default NavBar;

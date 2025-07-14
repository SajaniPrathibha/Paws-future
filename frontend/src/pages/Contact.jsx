import React, { useState } from "react";
import contactImg from "/images/contact.png";

const Contact = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        const { name, email, message } = formData;

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if (!gmailRegex.test(email)) {
            alert("Please enter a valid Gmail address.");
            return;
        }

        setShowPopup(true);
        setFormData({ name: "", email: "", message: "" });
    };
    

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="w-full min-h-[50vh] px-6 md:px-24 py-10 flex flex-col md:flex-row justify-center items-center">
            <img
                src={contactImg}
                alt="Contact"
                className="w-full md:w-1/2 h-full object-cover rounded-lg mb-6 md:mb-0"
            />

            <div className="w-full md:w-1/2 md:ml-8">
                <h1 className="text-white text-3xl font-bold mb-6">Contact Us</h1>

                <div className="space-y-4">
                    <div className="text-white">
                        <p className="mb-1">Enter name</p>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className="w-full p-3 rounded bg-black text-white text-lg outline-none"
                        />
                    </div>

                    <div className="text-white">
                        <p className="mb-1">Email</p>
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full p-3 rounded bg-black text-white text-lg outline-none"
                        />
                    </div>

                    <div className="text-white">
                        <p className="mb-1">Message</p>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="type here..."
                            className="w-full p-3 rounded bg-black text-white text-lg outline-none h-32"
                        ></textarea>
                    </div>

                    <div>
                        <button
                            onClick={handleSubmit}
                            className="mt-6 px-6 py-3 bg-[#FF914D] hover:bg-[#FF6B35] text-black font-bold rounded-lg transition cursor-pointer"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>

            {/* Popup */}
            {showPopup && (
                <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full text-black">
                        <h3 className="text-lg font-bold mb-4">Message Sent ✅</h3>
                        <p className="mb-6">Your message has been sent successfully. We’ll get back to you shortly.</p>
                        <button
                            onClick={handleClosePopup}
                            className="bg-[#FF914D] hover:bg-[#FF6B35] text-white font-semibold py-2 px-6 rounded"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;

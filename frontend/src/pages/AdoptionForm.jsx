import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AdoptionForm = () => {
    const location = useLocation();
    const selectedDog = location.state?.selectedDog;

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        currentJob:'',
        dogName: selectedDog?.title || '',
        message: '',
        residence: '',
        otherResidence: ''
    });

    useEffect(() => {
        // Optional: update if user refreshes while keeping state
        if (selectedDog) {
            setFormData((prev) => ({ ...prev, dogName: selectedDog.title }));
        }
    }, [selectedDog]);


    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Adoption Request Submitted:', formData);
        alert(`Thank you, ${formData.fullName}. We’ll contact you soon.`);
        // Reset form
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            address: '',
            currentJob: '',
            dogName: '',
            message: ''
        });
      };

  return (
      <div className="w-full min-h-[90vh] px-6 md:px-12 lg:px-24 py-10 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10 z-10">
              Adoption information
          </h2>
          <form
              onSubmit={handleSubmit}
              className="w-full max-w-xl space-y-8 p-6 rounded shadow-md"
          >


              <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2"
              />

              <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2"
              />
              

              <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2"
              />

              <input
                  type="text"
                  name="address"
                  placeholder="Home Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2"
              />
              <input
                  type="text"
                  name="currentJob"
                  placeholder="Current job"
                  value={formData.currentJob}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2"
              />


              <input
                  type="text"
                  name="dogName"
                  placeholder="Dog's Name You Want to Adopt"
                  value={formData.dogName}
                  onChange={handleChange}
                  required
                  readOnly
                  className="w-full border border-gray-300 rounded px-4 py-2 cursor-not-allowed"
              />

              <textarea
                  name="message"
                  placeholder="Why do you want to adopt this dog?"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full border border-gray-300 rounded px-4 py-2"
              ></textarea>

              <button
                  type="submit"
                  className="w-full bg-[#FF914D] hover:bg-[#FF6B35] text-white font-bold py-2 rounded"
              >
                  Submit Request
              </button>
          </form>

    </div>
  )
}

export default AdoptionForm